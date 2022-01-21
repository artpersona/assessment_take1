import React, { createContext, useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
import firebaseConfig from "../configs/firebase";
firebase.initializeApp(firebaseConfig);
const FirebaseContext = createContext();

const FirebaseProvider = ({ children }) => {
  const auth = firebase.auth();
  const firestore = firebase.firestore();
  const storage = firebase.storage();

  const payload = { firestore, auth, firebase, storage };
  return (
    <FirebaseContext.Provider value={payload}>
      {children}
    </FirebaseContext.Provider>
  );
};

FirebaseProvider.defaultProps = {};

FirebaseProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default FirebaseProvider;

export const useFirebaseContext = () => useContext(FirebaseContext);
