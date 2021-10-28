import React from "react";

const Postitem = (props) => {
  return (
    <div>
      <div>
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btn">
        <button>удалить</button>
      </div>
    </div>
  );
};

export default Postitem;
