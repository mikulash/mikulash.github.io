const ContactSection = () => {
  return (
    <section id="contact" className="p-8">
      <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
      <p className="text-lg">
        Email:{" "}
        <a href="mailto:your-email@example.com" className="underline">
          your-email@example.com
        </a>
      </p>
    </section>
  );
};

export default ContactSection;
