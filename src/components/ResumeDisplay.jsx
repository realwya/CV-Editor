function BasicInfo({ name, email, intro }) {
  return (
    <div className="basicInfo">
      <p className="name">{name}</p>
      <p className="email">{email}</p>
      <p className="intro">{intro}</p>
    </div>
  );
}

function WorkItem({ work }) {
  return (
    <div className="work">
      <p className="company">
        {work.title} at {work.company}
      </p>
      <p className="time">
        {work.startTime}~{work.endTime}
      </p>
    </div>
  );
}

function EducationItem({ education }) {
  return (
    <div className="education">
      <p className="school">
        {education.degree} at {education.school}
      </p>
      <p className="time">
        {education.startTime}~{education.endTime}
      </p>
    </div>
  );
}

export default function ResumeDisplay({ data }) {
  const basicInfo = data.basicInfo;
  const work = data.work;
  const education = data.education;

  const workItems = work.map((work, index) => (
    <li key={index}>
      <WorkItem work={work} />
    </li>
  ));
  const educationItems = education.map((education, index) => (
    <li key={index}>
      <EducationItem education={education} />
    </li>
  ));
  return (
    <div className="resumeDisplay">
      <BasicInfo
        name={basicInfo.name}
        email={basicInfo.email}
        intro={basicInfo.intro}
      />
      <h1>Work</h1>
      <ul>{workItems}</ul>
      <h1>Education</h1>
      <ul>{educationItems}</ul>
    </div>
  );
}
