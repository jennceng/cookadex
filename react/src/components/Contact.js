import React from 'react';

const User = ({ firstName, phoneNumber }) => {
  return(
    <div>
      <li>
        First Name: {firstName}, Phone Number: {phoneNumber}
      </li>
    </div>
  )
}

export default User;
