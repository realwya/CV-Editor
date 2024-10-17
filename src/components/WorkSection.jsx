import WorkInputItem from "./WorkInputItem";

export default function WorkSection({
  work,
  onWorkChange,
  onAddWork,
  onDeleteWork,
}) {
  return (
    <section>
      <h1>Work Experience</h1>
      <ul>
        {work.map((item, index) => (
          <li key={index}>
            <WorkInputItem
              work={item}
              onChange={(field, value) => onWorkChange(index, field, value)}
            />
            <button
              className="deleteWork"
              type="button"
              onClick={() => onDeleteWork(index)}
            >
              remove
            </button>
          </li>
        ))}
      </ul>
      <button className="addWork" type="button" onClick={onAddWork}>
        Add Work
      </button>
    </section>
  );
}
