const EducationSection = () => {
  return (
    <section id="education" className="p-8">
      <h2 className="text-4xl font-bold mb-4">Education</h2>
      <ul className="space-y-4">
        <li>
          <h3 className="text-xl font-semibold">
            Master's Degree in Software Engineering
          </h3>
          <p className="text-lg">
            <strong>Institution:</strong> Masaryk University <br />
            <strong>Year:</strong> 2023 - Current
          </p>
        </li>
        <li>
          <h3 className="text-xl font-semibold">
            Bachelor's Degree in Information Technology
          </h3>
          <p className="text-lg">
            <strong>Institution:</strong> Brno University of Technology <br />
            <strong>Year:</strong> 2019 - 2022
          </p>
        </li>
      </ul>
    </section>
  );
};

export default EducationSection;
