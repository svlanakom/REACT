import React from "react";

const UserForm = ({ userData, handleChange }) => {
    return (
         <form className="user-form">
            <input
                type="text"
                name="firstname"
                className="user-form-input"
                value={userData.firstname}
                onChange={handleChange}
            />
            <input
                type="text"
                name="lastname"
                className="user-form-input"
                value={userData.lastname}
                onChange={handleChange}
            />
        </form>
    )
   
       
    
}
  


export default UserForm;
