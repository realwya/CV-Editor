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
        Intro:{" "}
        <input
          name="intro"
          value={basicInfo.intro}
          onChange={(e) => onChange("intro", e.target.value)}
          required
        />
      </label>
    </div>
  );
}
