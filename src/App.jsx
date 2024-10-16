import { useState } from "react";
import ResumeDisplay from "./components/ResumeDisplay";
import ResumeEditor from "./components/ResumeEditor";
import initialData from "./initialData";
import "./App.css";

function App() {
  const [data, setData] = useState(initialData);
  const [isEditing, setIsEditing] = useState(false);

  function edit() {
    setIsEditing(true);
  }

  function onSubmit(data) {
    //change resume data
    setIsEditing(false);
    setData(data);
  }

  if (isEditing) {
    return <ResumeEditor data={data} onSubmit={onSubmit} />;
  } else {
    return (
      <div className="display">
        <ResumeDisplay data={data} />
        <button className="edit" onClick={edit}>
          Edit
        </button>
      </div>
    );
  }
}

export default App;
