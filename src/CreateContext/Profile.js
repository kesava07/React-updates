import React, { useContext } from 'react';
import AuthContext from './CreateContext/AuthContext';



//********   BY USING Hook called useContext  ***********//

const Profile = () => {
    const authContext = useContext(AuthContext);
    return (
        <div>
            {authContext.isAuth ? "You are logged in" : "You are logged out"}
        </div>
    )
};
export default Profile;


//********   BY USING contextType   ***********//

// export default class Profile extends React.Component {
//     static contextType = AuthContext;

//     // componentDidMount() {
//     //     console.log(this.context)
//     // };

//     render() {
//         return (
//             <div>
//                 {this.context.isAuth ? "You are logged in" : "You are logged out"}
//             </div>
//         )
//     };
// };

//********   BY USING Regular method by consumer  ***********//

// const Profile = () => (
//     <AuthContext.Consumer>
//         {authConsumer => {
//             return (
//                 <div>
//                     {authConsumer.isAuth ? "You are logged in" : "You are logged out"}
//                 </div>
//             )
//         }}
//     </AuthContext.Consumer>
// );
// export default Profile;
