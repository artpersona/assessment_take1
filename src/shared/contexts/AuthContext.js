import React, { createContext, useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { useFirebaseContext } from "./FirebaseContext";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const { auth, firestore } = useFirebaseContext();

  const [loggedUser, setLoggedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  console.log("loggedUser", loggedUser);

  function onAuthStateChanged(user) {
    if (initializing) {
      if (user) {
        getUserProfile(user.email);
      }
      setTimeout(function () {
        setInitializing(false);
      }, 2000);
    }
  }

  const getUserProfile = (email) => {
    return new Promise((resolve, reject) => {
      firestore
        .collection("Users")
        .where("email", "==", email)
        .onSnapshot((doc) => {
          if (doc?.docs.length > 0) {
            setLoggedUser(doc.docs[0].data());
            if (doc.docs[0].data().role === "admin") {
              navigate("/dashboard");
            } else {
              navigate("/home");
            }
          } else {
            reject("Invalid Credentials");
          }
        });
    });
  };

  const loginWithEmail = (email, password) => {
    return new Promise((resolve, reject) => {
      auth
        .signInWithEmailAndPassword(email.trim(), password)
        .then((userCredential) => {
          const user = userCredential.user;
          getUserProfile(email.trim())
            .then(() => resolve(user))
            .catch((err) => {
              console.log("reject 1");
              reject(err);
            });
        })
        .catch((err) => {
          console.log("reject 2");
          reject(err);
        });
    });
  };

  const logoutUser = () => {
    auth.signOut().then(() => {
      setLoggedUser(null);
    });
  };

  const registerUser = (data) => {
    const { email, password, contact_num, firstName, lastName, username } =
      data;

    console.log("data is: ", data);
    console.log("email is: ", email);
    return new Promise((resolve, reject) => {
      auth
        .createUserWithEmailAndPassword(email.trim(), password)
        .then((user) => {
          createProfile(email, contact_num, firstName, lastName, username)
            .then(() => {
              resolve(user);
            })
            .catch((err) => reject(err));
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const createProfile = (email, firstName, lastName, username) => {
    return new Promise((resolve, reject) => {
      firestore
        .collection("Users")
        .doc(email.trim())
        .set({
          email: email.trim(),
          firstName,
          lastName,
          username,
        })
        .then(() => {
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  // UseEffects

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const payload = { loggedUser, registerUser, logoutUser, loginWithEmail };
  return (
    <AuthContext.Provider value={payload}>{children}</AuthContext.Provider>
  );
};

AuthProvider.defaultProps = {};

AuthProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default AuthProvider;

export const useAuthContext = () => useContext(AuthContext);
