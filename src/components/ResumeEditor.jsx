import { useState } from "react";

function BasicInfoInput({ basicInfo, onChange }) {
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

function WorkInputItem({ work, onChange }) {
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

function EducationInputItem({ education, onChange }) {
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

export default function ResumeEditor({ data, onSubmit }) {
  const [formData, setData] = useState(data);

  const basicInfo = formData.basicInfo;
  const work = formData.work;
  const education = formData.education;

  const handleBasicInfoChange = (field, value) => {
    setData((prev) => ({
      ...prev,
      basicInfo: { ...prev.basicInfo, [field]: value },
    }));
  };

  const handleWorkChange = (index, field, value) => {
    setData((prev) => ({
      ...prev,
      work: prev.work.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      ),
    }));
  };

  const handleEducationChange = (index, field, value) => {
    setData((prev) => ({
      ...prev,
      education: prev.education.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      ),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const addWork = () => {
    setData((prev) => ({
      ...prev,
      work: prev.work.concat({
        company: "",
        title: "",
        startTime: "",
        endTime: "",
      }),
    }));
  };

  const deleteWork = (i) => {
    setData((prev) => ({
      ...prev,
      work: prev.work.toSpliced(i, 1),
    }));
  };

  const addEducation = () => {
    setData((prev) => ({
      ...prev,
      education: prev.education.concat({
        school: "",
        degree: "",
        startTime: "",
        endTime: "",
      }),
    }));
  };

  const deleteEducation = (i) => {
    setData((prev) => ({
      ...prev,
      education: prev.education.toSpliced(i, 1),
    }));
  };

  const workInputItems = work.map((work, index) => (
    <li key={index}>
      <WorkInputItem
        work={work}
        onChange={(field, value) => handleWorkChange(index, field, value)}
      />
      <button
        className="deleteWork"
        type="button"
        onClick={() => deleteWork(index)}
      >
        Remove
      </button>
    </li>
  ));
  const educationInputItems = education.map((education, index) => (
    <li key={index}>
      <EducationInputItem
        education={education}
        onChange={(field, value) => handleEducationChange(index, field, value)}
      />
      <button
        className="deleteEducation"
        type="button"
        onClick={() => deleteEducation(index)}
      >
        Remove
      </button>
    </li>
  ));

  return (
    <form onSubmit={handleSubmit} className="resumeEditor">
      <section>
        <BasicInfoInput
          basicInfo={basicInfo}
          onChange={handleBasicInfoChange}
        />
      </section>
      <section>
        <h1>Work</h1>
        <ul>{workInputItems}</ul>
        <button className="addWork" type="button" onClick={addWork}>
          Add
        </button>
      </section>
      <section>
        <h1>Education</h1>
        <ul>{educationInputItems}</ul>
        <button className="addEducation" type="button" onClick={addEducation}>
          Add
        </button>
      </section>
      <button type="submit">Save</button>
    </form>
  );
}
