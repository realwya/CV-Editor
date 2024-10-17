import { useState } from "react";
import BasicInfoInput from "./BasicInfoInput";
import WorkSection from "./WorkSection";
import EducationSection from "./EducationSection";

export default function ResumeEditor({ data, onSubmit }) {
  const [formData, setData] = useState(data);

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

  return (
    <form onSubmit={handleSubmit} className="resumeEditor">
      <BasicInfoInput
        basicInfo={formData.basicInfo}
        onChange={handleBasicInfoChange}
      />
      <WorkSection
        work={formData.work}
        onWorkChange={handleWorkChange}
        onAddWork={addWork}
        onDeleteWork={deleteWork}
      />
      <EducationSection
        education={formData.education}
        onEducationChange={handleEducationChange}
        onAddEducation={addEducation}
        onDeleteEducation={deleteEducation}
      />
      <button type="submit">Save</button>
    </form>
  );
}
