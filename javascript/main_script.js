var getName = () => {
    // let username = document.getElementById("username_edt").value;
    let username = getValue("username_edt");
    let dateOfBirth = getValue("user_birth_date");
    let gender = getValue("genders_list");
    alert("The username is "+ username + " and the DOB is " +dateOfBirth + " and gender is " + gender);
}

// This is the method that we'll use to get all the details from the form
var getValue = (element_id) => {
    let the_value = document.getElementById(element_id).value;
    return the_value;
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