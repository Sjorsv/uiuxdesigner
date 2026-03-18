const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="swiss-container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-display font-bold text-lg text-foreground mb-2">uiuxdesigner.nl</p>
            <p className="text-sm text-muted-foreground font-body">
              Websites voor groeiende bedrijven.
            </p>
          </div>

          <div className="flex flex-wrap gap-8">
            <a href="/portfolio" className="text-sm text-muted-foreground font-body hover:text-foreground transition-colors">
              Cases
            </a>
            <a href="#services" className="text-sm text-muted-foreground font-body hover:text-foreground transition-colors">
              Diensten
            </a>
            <a href="#process" className="text-sm text-muted-foreground font-body hover:text-foreground transition-colors">
              Proces
            </a>
            <a href="#about" className="text-sm text-muted-foreground font-body hover:text-foreground transition-colors">
              Over
            </a>
            <a href="#contact" className="text-sm text-muted-foreground font-body hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground font-body">
            © {new Date().getFullYear()} UIUXDESIGNER.NL — Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
