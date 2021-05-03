import { useState } from "react";
import serverInstance from "../../server"

const PostContactForm = async (
  values, successCallback, errorCallback
) => {
  const url = 'api/create/'
  const response = await serverInstance.post(url, values).then(res => {
    return true
  }).catch(err => {
    return err
  })
  
  // do stuff
  // if successful
  if (response) successCallback();
  else errorCallback();
};

const initialFormValues = {
  fullname: "",
  email: "",
  message: "",
  formSubmitted: false,
  success: false
};

export const useFormControls = () => {
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ("fullname" in fieldValues)
      temp.fullname = fieldValues.fullname ? "" : "This field is required.";

    if ("email" in fieldValues) {
      temp.email = fieldValues.email ? "" : "This field is required.";
      if (fieldValues.email)
        temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
          ? ""
          : "Email is not valid.";
    }

    if ("message" in fieldValues)
      temp.message =
        fieldValues.message.length !== 0 ? "" : "This field is required.";

    setErrors({
      ...temp
    });
  };

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    validate({ [name]: value });
  };

  const handleSuccess = (e) => {
    console.log("Success Call")
    setValues({
      ...initialFormValues,
      formSubmitted: true,
      success: true
    });
    setShowAlert(true);
    e.target.reset();
  };

  const handleError = () => {
    setValues({
      ...initialFormValues,
      formSubmitted: true,
      success: false
    });
  };

  const formIsValid = (fieldValues = values) => {
    const isValid =
      fieldValues.fullname &&
      fieldValues.email &&
      fieldValues.message &&
      Object.values(errors).every((x) => x === "");

    return isValid;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const isValid =
      Object.values(errors).every((x) => x === "") && formIsValid();
    if (isValid) {
      await PostContactForm(values, handleSuccess, handleError);
    }
  };

  return {
    values,
    errors,
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    showAlert,
    setShowAlert
  };
};
