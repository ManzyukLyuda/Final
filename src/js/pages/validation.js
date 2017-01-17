var invalid = document.createElement('span');
invalid.setAttribute('class', 'invalidMassage');
var invalidMassage = "Wrong password";
function validationResult() {
        var lastMasage = document.querySelector('span.invalidMassage');
        invalid.innerHTML = "Wrong password";
        document.querySelector('input[type="password"]').parentNode.appendChild(invalid);
        document.querySelector('input[type="password"]').setAttribute('class', "invalid");
    }

    function newUserVAlidation(pass1, pass2){
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
module.exports = {
	validationResult: validationResult,
	newUserVAlidation: newUserVAlidation
}
