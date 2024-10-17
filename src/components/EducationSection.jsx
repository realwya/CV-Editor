import EducationInputItem from "./EducationInputItem";

export default function EducationSection({
  education,
  onEducationChange,
  onAddEducation,
  onDeleteEducation,
}) {
  return (
    <section>
      <h1>Education</h1>
      <ul>
        {education.map((item, index) => (
          <li key={index}>
            <EducationInputItem
              education={item}
              onChange={(field, value) =>
                onEducationChange(index, field, value)
              }
            />
            <button
              className="deleteEducation"
              type="button"
              onClick={() => onDeleteEducation(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button className="addEducation" type="button" onClick={onAddEducation}>
        Add Education
      </button>
    </section>
  );
}
