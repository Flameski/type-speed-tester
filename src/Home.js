import React, { useState, useEffect } from 'react';
import Game from './components/Game';
import firebase from './firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const Home = () => {
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
    return (
      <div className="App">
        <Game user={user} />
        <button className="logoutBtn" onClick={() => firebase.auth().signOut()}>
          logout
        </button>
      </div>
    );
  } else {
    return (
      <div className="login-frame">
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    );
  }
};

export default Home;
