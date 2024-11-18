const JobSection = () => {
  return (
    <section id="job" className="p-8">
      <h2 className="text-4xl font-bold mb-4">Job Experience</h2>
      <ul className="space-y-4">
        <li>
          <h3 className="text-xl font-semibold">Full Stack Developer</h3>
          <p className="text-lg">
            <strong>Company:</strong> ARRIVA CZ (Brno, Czechia) <br />
            <strong>Duration:</strong> October 2022 - May 2024 <br />
            Collaborated on frontend development using React, TypeScript, and
            Tailwind CSS. Contributed to backend APIs using .NET, implemented
            integration/unit tests, and worked on the ticket purchasing flow for
            e-shop customers and external partners.
          </p>
        </li>
        <li>
          <h3 className="text-xl font-semibold">Web Application Developer</h3>
          <p className="text-lg">
            <strong>Company:</strong> Masaryk University <br />
            <strong>Duration:</strong> 2020 - 2022 <br />
            Developed single-page web applications with React and static modular
            websites using PHP and JavaScript.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default JobSection;
