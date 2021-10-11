import React from "react";
import User from "./User.jsx";

class UsersList extends React.Component {
  state = {
    sorting: null,
  };

  togglesSorting = () => {
    const newSorting = this.state.sorting === "asc" ? "desc" : "asc";
    this.setState({
      sorting: newSorting,
    });
  };

    render() {
        let usersList;
    if (this.state.sorting) {
       usersList = this.props.users.slice().sort((a, b) =>
        this.state.sorting === "asc" ? a.age - b.age : b.age - a.age
      );
    } else {
        usersList = this.props.users;
    }

    return (
      <div>
        <button className="btn" onClick={this.togglesSorting}>
          {this.state.sorting || "-"}
        </button>

        <ul className="users">
          {usersList.map((user) => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
