export default function BasicInfoInput({ basicInfo, onChange }) {
  return (
    <div className="basicInfoInput">
      <label>
        Name:{" "}
        <input
          name="name"
          value={basicInfo.name}
          onChange={(e) => onChange("name", e.target.value)}
          required
        />
      </label>
      <label>
        E-mail:{" "}
        <input
          name="email"
          value={basicInfo.email}
          onChange={(e) => onChange("email", e.target.value)}
          required
        />
      </label>
      <label>
        About:{" "}
        <input
          name="about"
          value={basicInfo.about}
          onChange={(e) => onChange("about", e.target.value)}
          required
        />
      </label>
    </div>
  );
}
