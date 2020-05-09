import React from "react";

function CollapisbleItem({ info, fns }) {
  const { task, details, due, id, done, priority } = info;
  const { onChangeInfo, addDueDate, deleteTodo, toggleDone } = fns;
  const onChange = (e) => {
    onChangeInfo(e.target.name, e.target.value, id);
  };

  const onClick = (e) => {
    const choose = e.target.innerText || e.target.type;
    console.log(choose);

    switch (choose) {
      case "TODAY":
      case "TOMORROW":
        return addDueDate(choose, id);
      case "DELETE THIS TODO":
        return deleteTodo(id);
      case "checkbox":
        return toggleDone(id);
    }
  };

  return (
    <li>
      <div className="collapsible-header">
        <label className="mds">
          <input type="checkbox" checked={done} onClick={onClick} />
          <span></span>
        </label>
        <p>
          <span className={done && "done"}>{task}</span>
        </p>

        <span className="badge">{due}</span>
      </div>
      <div className="collapsible-body bg-white">
        <div className="flex-conteiner">
          <div>
            <p>Details</p>
            <textarea
              value={details}
              className="no-outline"
              cols="60"
              name="details"
              rows="60"
              onChange={onChange}
            ></textarea>
            <a className="waves-effect red btn mg-1" onClick={onClick}>
              Delete this todo
            </a>
          </div>
          <div>
            <div className="date-menu">
              <p className="mg-1">Due Date</p>
              <a
                className="waves-effect waves-light btn mgr-1"
                onClick={onClick}
              >
                Today
              </a>
              <a className="waves-effect waves-light btn" onClick={onClick}>
                Tomorrow
              </a>
              <input
                type="date"
                value={due}
                id="birthday"
                onChange={onChange}
                name="due"
              ></input>
            </div>
            <div className="priority">
              <p>Priority</p>
              <select name="priority" value={priority} onChange={onChange}>
                
                <option value="0">High</option>
                <option value="1">Medium</option>
                <option value="2">Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CollapisbleItem;
