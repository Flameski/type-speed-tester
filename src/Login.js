// import React from 'react';
// import { signInWithGoogle } from './firebase';
// export default function Login() {
//   return (
//     <div className="login-buttons">
//       <button className="login-provider-button" onClick={signInWithGoogle}>
//         <img
//           src="https://img.icons8.com/ios-filled/50/000000/google-logo.png"
//           alt="google icon"
//         />
//         <span> Continue with Google</span>
//       </button>
//     </div>
//   );
// }

// import React from 'react';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import { Redirect } from 'react-router-dom';

// const Login = () => {
//   const provider = new firebase.auth.GoogleAuthProvider();
//   firebase.auth().signInWithRedirect(provider);

//   var user = firebase.auth().currentUser;

//   if (user) {
//     <Redirect from="/login" to="/" />;
//   } else {
//     // No user is signed in.
//   }
//   return <div></div>;
// };

// export default Login;

import React, { useEffect, useState } from 'react';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from './firebase';
import Home from './Home';

const Login = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const authObserver = firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    });
    return authObserver;
  });
  const uiConfig = {
    signInFlow: 'redirect',
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };
  if (user) {
    console.log(user);
    return <Home />;
  } else {
    return (
      <div>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    );
  }
};

export default Login;
