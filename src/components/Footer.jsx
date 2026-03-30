function Footer() {
  return (
    <footer className="bg-dark text-muted py-6 text-center">
      <p>
        © {new Date().getFullYear()}
        <span className="text-primary font-semibold"> BKS Enterprise</span>. All
        rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
