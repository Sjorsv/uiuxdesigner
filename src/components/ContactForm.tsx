import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();

  const contactSchema = z.object({
    name: z.string().trim().min(1, t("contact.error_name")).max(100),
    email: z.string().trim().email(t("contact.error_email")).max(255),
    company: z.string().trim().max(100).optional(),
    message: z.string().trim().min(1, t("contact.error_message")).max(2000),
  });

  type ContactFormType = z.infer<typeof contactSchema>;

  const [form, setForm] = useState<ContactFormType>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [freeConcept, setFreeConcept] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormType, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof ContactFormType, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormType, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactFormType;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSubmitted(true);
    toast.success(t("contact.success_toast"));
  };

  const inputClasses =
    "w-full bg-transparent border-b border-border px-0 py-4 text-foreground font-body text-base placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground transition-colors duration-300";

  return (
    <section className="py-32 border-t border-border" id="contact">
      <div className="swiss-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-number">{t("contact.section_number")}</span>
            <span className="section-label ml-4">{t("contact.section_label")}</span>
            <h2 className="heading-lg mt-4 mb-8">
              {t("contact.title_line1")}<br />{t("contact.title_line2")}
            </h2>
            <p className="body-md max-w-md mb-10">{t("contact.description")}</p>
            <div className="space-y-4">
              <a href="mailto:uiuxdesignernl@gmail.com" className="block font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                uiuxdesignernl@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {submitted ? (
              <div className="flex items-center justify-center h-full min-h-[400px]">
                <div className="text-center">
                  <h3 className="font-display font-bold text-2xl text-foreground mb-4">{t("contact.thank_you_title")}</h3>
                  <p className="body-md max-w-sm">{t("contact.thank_you_message")}</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2" noValidate>
                <div>
                  <input type="text" placeholder={t("contact.name_placeholder")} value={form.name} onChange={(e) => handleChange("name", e.target.value)} className={inputClasses} maxLength={100} />
                  {errors.name && <p className="text-xs text-destructive mt-1 font-body">{errors.name}</p>}
                </div>
                <div>
                  <input type="email" placeholder={t("contact.email_placeholder")} value={form.email} onChange={(e) => handleChange("email", e.target.value)} className={inputClasses} maxLength={255} />
                  {errors.email && <p className="text-xs text-destructive mt-1 font-body">{errors.email}</p>}
                </div>
                <div>
                  <input type="text" placeholder={t("contact.company_placeholder")} value={form.company} onChange={(e) => handleChange("company", e.target.value)} className={inputClasses} maxLength={100} />
                </div>
                <div>
                  <textarea placeholder={t("contact.message_placeholder")} value={form.message} onChange={(e) => handleChange("message", e.target.value)} className={`${inputClasses} resize-none min-h-[120px]`} maxLength={2000} rows={4} />
                  {errors.message && <p className="text-xs text-destructive mt-1 font-body">{errors.message}</p>}
                </div>
                <label className="flex items-center gap-3 cursor-pointer pt-2">
                  <input type="checkbox" checked={freeConcept} onChange={(e) => setFreeConcept(e.target.checked)} className="w-5 h-5 rounded border-border accent-brand cursor-pointer" />
                  <span className="font-body text-sm text-muted-foreground">{t("contact.free_concept")}</span>
                </label>
                <div className="pt-6">
                  <button type="submit" className="btn-primary">{t("contact.submit")}</button>
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
