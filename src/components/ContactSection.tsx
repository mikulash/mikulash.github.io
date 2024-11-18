const ContactSection = () => {
  return (
    <section id="contact" className="p-8">
      <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
      <ul className="space-y-4">
        <li className="text-lg">
          <strong>Email:</strong>{" "}
          <a href="mailto:heinz.mikulas@gmail.com" className="underline">
            heinz.mikulas@gmail.com
          </a>
        </li>

        <li className="text-lg">
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/mikulas-heinz/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            linkedin.com/in/mikulas-heinz
          </a>
        </li>
        <li className="text-lg">
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/mikulash"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            github.com/mikulash
          </a>
        </li>
      </ul>
    </section>
  );
};

export default ContactSection;
