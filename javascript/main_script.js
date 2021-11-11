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
        calcualteBirth(username, birthdate, gender);
    }
}

var calcualteBirth = (name, birthdate, gender) => {
    getDayOfBirth(birthdate);
}

//This fun will give us the day of the week when the user was born based on the date given as an argument
var getDayOfBirth = (birthdate) => {
    /*
    // Day of the week (d) = (((CC/4) -2*CC-1) + ((5*YY/4)) + ((26*(MM+1)/10)) + DD ) mod 7
    CC = century eg 19, 18, 17, 20 etc (the first 2 digits of the yyyy)
    YY = year eg 01, 09, 90(the last 2 digit of the yyyy)
    MM = month
    DD = day
    */
    //We gon convert the string date to the required date format, we make it constant because we don't intend to change it
    const date = new Date(birthdate);
    const yyyy = date.getFullYear()
    const mm = date.getMonth()
    const dd = date.getDay()

    //We gon slice the yyyy for us to get the cc and yy
    const cc = parseInt(yyyy.toString().slice(0,1));
    const yy = parseInt(yyyy.toString().slice(2,3));

    let day = (((cc/4) -2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd) % 7;
    alert("This user was born on the " + day + " day.")
    
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