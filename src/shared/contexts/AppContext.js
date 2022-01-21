import React, { createContext, useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { useFirebaseContext } from "./FirebaseContext";
import { useAuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import moment from "moment";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const navigate = useNavigate();

  const { auth, firestore } = useFirebaseContext();
  const [applicants, setApplicants] = useState([]);
  const { loggedUser } = useAuthContext();
  console.log("logged user is: ", loggedUser);
  const submitApplicationForm = (data) => {
    data.birth_date = moment(data.birth_date).format("L");
    data.expiry_date = moment(data.expiry_date).format("L");
    data.issue_date = moment(data.issue_date).format("L");
    return new Promise((resolve, reject) => {
      firestore
        .collection("Applications")
        .doc(loggedUser.email.trim())
        .set(data)
        .then(() => {
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const fetchApplicants = () => {
    firestore.collection("Applications").onSnapshot((snapshot) => {
      let data = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      setApplicants(data);
    });
  };

  const handleApplicantRequest = (data, status) => {
    return new Promise((resolve, reject) => {
      firestore
        .collection("Applications")
        .doc(data.id)
        .update({ status })
        .then(() => {
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  useEffect(() => {
    fetchApplicants();
  });
  const payload = { submitApplicationForm, applicants, handleApplicantRequest };
  return <AppContext.Provider value={payload}>{children}</AppContext.Provider>;
};

AppProvider.defaultProps = {};

AppProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default AppProvider;

export const useAppContext = () => useContext(AppContext);
