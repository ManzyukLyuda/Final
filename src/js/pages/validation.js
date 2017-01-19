import storage from '../storage'


let invalid = document.createElement('span');
invalid.setAttribute('class', 'invalidMassage');
let invalidMassage = "Wrong password";
let validationResult = () => {
        var lastMasage = document.querySelector('span.invalidMassage');
        invalid.innerHTML = "Wrong password";
        document.querySelector('input[type="password"]').parentNode.appendChild(invalid);
        document.querySelector('input[type="password"]').setAttribute('class', "invalid");
    }

let newUserValidation = (pass1, pass2) => {
        if(pass1 === pass2){
            return true;
        }
        else{
            invalid.innerHTML = "Wrong password";
            document.getElementById('passwordsignUp2').parentNode.appendChild(invalid);
            document.getElementById('passwordsignUp2').setAttribute('class', "invalid");
            return false;
        }

    }


let newNameCheck = (name) => {
    let data = storage.getUsersList();
    let invalidName = false;
   
    for(let i = 0; i<data.users.length; i++){
        if (data.users[i].name === name){
            invalidName = name;
        }    
    }
    return invalidName;
}
let newEmaikCheck = (email) => {
    let data = storage.getUsersList();
    let invalidEmail = false;
   
    for(let i = 0; i<data.users.length; i++){
        if (data.users[i].email === email){
            invalidEmail = email;
        }    
    }
    return invalidEmail;
}
let newEmaikValidation = (email, name) => {
    if (newEmaikCheck(email)){
        invalidMassage = "Mail already exists";
        invalid.innerHTML = invalidMassage;
        document.querySelector('input[type="email"]').parentNode.appendChild(invalid);
        document.querySelector('input[type="email"]').setAttribute('class', "invalid");
        return false
    }
    else if(newNameCheck(name)){
        invalidMassage = "Name already exists";
        invalid.innerHTML = invalidMassage;
        document.querySelector('input[type="text"]').parentNode.appendChild(invalid);
        document.querySelector('input[type="text"]').setAttribute('class', "invalid");
        return false
    }
    else {
        return true;
    }
}


module.exports = {
	validationResult: validationResult,
	newUserValidation: newUserValidation,
    newEmaikValidation: newEmaikValidation
}
