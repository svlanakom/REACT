import React from "react";

const App = () => {
  const [noteTitle, setNoteTitle] = React.useState("");
  const [noteValue, setNoteValue] = React.useState("");
  const handleTitleChange = (e) => {
    setNoteTitle(e.target.value);
  };
  const handleAreaChange = (e) => {
    setNoteValue(e.target.value);
  };

  const handleCreateTask = () => {};

  return (
    <div className="notes">
      <form className="card__form">
        <div className="card">
          <input
            className="card__title"
            type="text"
            name="noteTitle"
            value={noteTitle}
            placeholder="Note Title"
            onChange={handleTitleChange}
          />
          <textarea
            className="card__value"
            name="noteValue"
            rows="10"
            cols="45"
            placeholder="Note Value"
            value={noteValue}
            onChange={handleAreaChange}
          >
            fdfdftfhtghfgt
          </textarea>
        </div>
      </form>
      <button className="create-btn" type="submit" onclick={handleCreateTask}>
        +
      </button>
      <ul className="card__list">
        <li className="card">
          <h4 className="card__title">Title</h4>
          <p className="card__content">Some content</p>
          <button className="delete-btn">Delete</button>
        </li>
        <li className="card">
          <h4 className="card__title">Title</h4>
          <p className="card__content">Some content</p>
          <button className="delete-btn">Delete</button>
        </li>
      </ul>
    </div>
  );
};

export default App;
