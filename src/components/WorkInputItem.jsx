export default function WorkInputItem({ work, onChange }) {
  return (
    <div className="workInput">
      <label>
        Company name:{" "}
        <input
          name="company"
          value={work.company}
          onChange={(e) => onChange("company", e.target.value)}
          required
        />
      </label>
      <label>
        Title:{" "}
        <input
          name="title"
          value={work.title}
          onChange={(e) => onChange("title", e.target.value)}
          required
        />
      </label>
      <label>
        Start time:{" "}
        <input
          name="startTime"
          value={work.startTime}
          onChange={(e) => onChange("startTime", e.target.value)}
          required
        />
      </label>
      <label>
        End time:{" "}
        <input
          name="endTime"
          value={work.endTime}
          onChange={(e) => onChange("endTime", e.target.value)}
          required
        />
      </label>
    </div>
  );
}
