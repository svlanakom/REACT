import React from 'react'
import Filter from './Filter.jsx'
import User from './User.jsx'

class UsersList extends React.Component {
  state = {
    name: ''
  }

  onChange = event => {
    const { value } = event.target;

    this.setState({
      name: value
    });

  }

  render() {
    const { users } = this.props
    const usersList = users.slice().filter(user => user.name.toLowerCase().includes(this.state.name.toLowerCase()))

    return (
      <div>
        <Filter
          onChange={this.onChange}
          filterText={this.state.name}
          count={usersList.length}
        />
        <ul className="users">
          {usersList.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    )
  }
}
export default UsersList


