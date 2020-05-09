import React from "react";

const InputTask = ({ addTask }) => {
  const [task, setTask] = React.useState("");

  const onChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <div className="input">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTask(task);
          setTask("");
        }}
      >
        <input
          id="email"
          value={task}
          onChange={onChange}
          type="text"
          className="validate left-flt"
          required
        ></input>
        <button className="btn-floating btn-large waves-effect waves-light inline " type="submit">+</button>
      </form>
    </div>
  );
};

export default InputTask;
