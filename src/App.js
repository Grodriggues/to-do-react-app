import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import InputTask from "./Layout/Input";

import Collapisble from "./Layout/Collapisble";

function App() {
  const [state, setState] = React.useState([]);
  React.useEffect(() => {
    M.AutoInit();
  });

  React.useEffect(() => {
    setState(JSON.parse(localStorage.getItem("TODO_DATA_KEY")));
  }, []);

  React.useEffect(() => {
    localStorage.setItem("TODO_DATA_KEY", JSON.stringify(state));
  }, [state]);

  const addTask = (task) => {
    setState([
      ...state,
      {
        task,
        id: state.length,
        details: "",
        done: false,
        priority: "2",
        due: "TODAY",
      },
    ]);
  };

  const addDueDate = (date, id) => {
    const data = state.map((data) =>
      data.id === id ? { ...data, due: date } : data
    );
    setState(data);
  };

  const onChangeInfo = (name, info, id) => {
    const data = state.map((data) =>
      data.id === id ? { ...data, [name]: info } : data
    );
    setState(data);
    if (name === "priority") {
      const sorted = data.sort(
        (a, b) => Number(a.priority) - Number(b.priority)
      );
      console.log({ sorted });
      return setState(sorted);
    }
  };

  const toggleDone = (id) => {
    const data = state.map((data) =>
      data.id === id ? { ...data, done: !data.done } : data
    );
    setState(data);
  };

  const deleteTodo = (id) => {
    setState(state.filter((element) => element.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <Collapisble
        items={state}
        fns={{ onChangeInfo, addDueDate, deleteTodo, toggleDone }}
      />
      <InputTask addTask={addTask} />
    </div>
  );
}

export default App;
