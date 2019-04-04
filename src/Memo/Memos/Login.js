import React from 'react';

const Login = (props) => {
    console.log(props)
    return (
        <React.Fragment>
            <button onClick={props.onLogIn}>Login</button>
            <button onClick={props.onLogOut}>Logout</button>
        </React.Fragment>
    );
}
export default React.memo(Login);