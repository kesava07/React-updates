import React from 'react';

const Profile = (props) => (
    <React.Fragment>
        {
            props.authenticated ? "you are logged in" : "you are logged out"
        }
    </React.Fragment>
);
export default Profile;