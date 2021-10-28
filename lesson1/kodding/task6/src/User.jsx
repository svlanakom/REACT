import React from "react";

import { useParams } from "react-router-dom";

class User extends React.Component {
  state = {
    avatarUrl: null,
    userName: null,
    userLocation: null,
  };

  componentDidMount() {
    // console.log('componentDidMount was called');
    const userId = this.props.match.params.userId;
    this.updateUserData(userId);
  }

  componentDidUpdate(prevProps) {
    // console.log('componentDidUpdate was called');

    // console.log(prevProps);
    // console.log(prevState);

    const currentUserId = this.props.match.params.userId;
    if (currentUserId !== prevProps.match.params.userId) {
      this.updateUserData(currentUserId);
    }
  }

  updateUserData = (userId) => {
    fetch(`https://api.github.com/users/${userId}`)
      .then((res) => res.json())
      .then((userData) => {
        // console.log(userData);
        this.setState({
          avatarUrl: userData.avatar_url,
          userName: userData.name,
          userLocation: userData.location,
        });
      });
  };

  render() {
    // console.log('render was called');

    const { avatarUrl, userName, userLocation } = this.state;

    if (!avatarUrl || !userName || !userLocation) {
      return null;
    }

    return (
      <div className="user">
        <img alt="User Avatar" src={avatarUrl} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{userName}</span>
          <span className="user__location">{userLocation}</span>
        </div>
      </div>
    );
  }
}

export default User;
