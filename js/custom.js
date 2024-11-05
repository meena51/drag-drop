function validateForm(event){
  "use strict";
  event.preventDefault();
  const form = document.getElementById("create-page");
  if(!form.checkValidity()){
    //form is not valid
    event.stopPropagation();
    form.classList.add("was-validated");
    return false;
  }
  return submitForm();
}
function submitForm(){
    console.log("Get form Content");
    const nameField = document.getElementById("name");
    const nameValue = nameField.value = "";
    console.log("nameValue : >>", nameValue);
    clearForm();
    return true;
}
function clearForm(){
    /** Get name feild and reset it's value */
    const nameField = document.getElementById("name");
    nameField.value = "";
    /** remove was-validated from the form */
    const form = document.getElementById("create-page");
    form.classList.remove("was-validated");
}