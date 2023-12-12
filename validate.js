function validate(){

    //inut the field
    let names = prompt('Enter your email address:');
        if (names || names == ''){

            // the regex for email
            let nameValidate = /[a-zA-Z0-9~!#$%^&*@]+@[a-zA-Z]+.[a-zA-Z]*/;
            let toget = nameValidate.exec(names);
            if (toget){
                alert('you have a valid email address');
                }else {
                    alert('an invalid email address');

                    // to rerun the code until the valid email
                    return validate();
                }
            }
          
}
// validate();

// module.exports = validate;

/*
>> inut an valid email tha has number, letter or both to return (a valid email)
>> inut an invalid email and return ( you do not hava a valid email address) then emty the inut field for another inut
*/