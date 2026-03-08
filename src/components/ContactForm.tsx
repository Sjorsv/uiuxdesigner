import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Naam is verplicht").max(100),
  email: z.string().trim().email("Ongeldig e-mailadres").max(255),
  company: z.string().trim().max(100).optional(),
  message: z.string().trim().min(1, "Bericht is verplicht").max(2000),
});

type ContactForm = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof ContactForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactForm;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSubmitted(true);
    toast.success("Bericht verzonden! We nemen snel contact op.");
  };

  const inputClasses =
    "w-full bg-transparent border-b border-border px-0 py-4 text-foreground font-body text-base placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground transition-colors duration-300";

  return (
    <section className="py-32 border-t border-border" id="contact">
      <div className="swiss-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-number">06</span>
            <span className="section-label ml-4">Contact</span>
            <h2 className="heading-lg mt-4 mb-8">
              Laten we<br />samenwerken.
            </h2>
            <p className="body-md max-w-md mb-10">
              Vertel over je project en we plannen een vrijblijvend gesprek in om de mogelijkheden te bespreken.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:hello@uiuxdesigner.nl"
                className="block font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                hello@uiuxdesigner.nl
              </a>
            </div>
          </motion.div>

          {/* Right side — form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {submitted ? (
              <div className="flex items-center justify-center h-full min-h-[400px]">
                <div className="text-center">
                  <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                    Bedankt!
                  </h3>
                  <p className="body-md max-w-sm">
                    Je bericht is ontvangen. We nemen zo snel mogelijk contact met je op om een gesprek in te plannen.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2" noValidate>
                <div>
                  <input
                    type="text"
                    placeholder="Naam *"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className={inputClasses}
                    maxLength={100}
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive mt-1 font-body">{errors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="E-mail *"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={inputClasses}
                    maxLength={255}
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive mt-1 font-body">{errors.email}</p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Bedrijf"
                    value={form.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    className={inputClasses}
                    maxLength={100}
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Vertel over je project *"
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className={`${inputClasses} resize-none min-h-[120px]`}
                    maxLength={2000}
                    rows={4}
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive mt-1 font-body">{errors.message}</p>
                  )}
                </div>

                <div className="pt-6">
                  <button type="submit" className="btn-primary">
                    Verstuur bericht
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
