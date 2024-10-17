export default function EducationInputItem({ education, onChange }) {
  return (
    <div className="educationInput">
      <label>
        School name:{" "}
        <input
          name="school"
          value={education.school}
          onChange={(e) => onChange("school", e.target.value)}
          required
        />
      </label>
      <label>
        Degree:{" "}
        <input
          name="degree"
          value={education.degree}
          onChange={(e) => onChange("degree", e.target.value)}
          required
        />
      </label>
      <label>
        Start time:{" "}
        <input
          name="startTime"
          value={education.startTime}
          onChange={(e) => onChange("startTime", e.target.value)}
          required
        />
      </label>
      <label>
        End time:{" "}
        <input
          name="endTime"
          value={education.endTime}
          onChange={(e) => onChange("endTime", e.target.value)}
          required
        />
      </label>
    </div>
  );
}
