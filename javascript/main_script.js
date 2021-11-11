var submitDetails = () => {
    // let username = document.getElementById("username_edt").value;
    let username = getValue("username_edt");
    let dateOfBirth = getValue("user_birth_date");
    let gender = getValue("genders_list");
    if(username == ""){
        alert("The name field is empty.")
    }else if(dateOfBirth == ""){
        alert("The birthdate field is empty.")
    }else if(gender == ""){
        alert("The gender field is empty.")
    }else{

    }
}

var calcualteBirth = (name, birthdate, gender) => {

}

// This is the method that we'll use to get all the details from the form
var getValue = (element_id) => {
    let the_value = document.getElementById(element_id).value;
    return the_value.toString().trim();
}

var clearForm = () => {
    clearField("user_birth_date");
    clearField("username_edt");
}

// This is the fun that will clear a field that's been specified
var clearField = (element_id) => {
    let input_filed = document.getElementById(element_id);
  
    //erase the input value
    input_filed.value = '';
  
    //prevent error on older browsers (aka IE8)
    if (input_filed.type === 'date') {
      //update the input content (visually)
      input_filed.type = 'date';
    }
    else if(date_input.type === 'text'){
        input_filed.type = 'text';
    }
}