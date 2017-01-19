'use strict';
import validation from './pages/validation';
import storage from './storage';
import router from './main';

storage.init();

let controller = () =>{
 	let signUp = document.getElementById('signUp');
	addNewUser(signUp);

};


let initData = () => {
    storage.init();
    return {
        data: storage.getUsersList(),
        dataTest: storage.getQuestionsList()
    };
};


export default {initData, controller};

function addNewUser(signUp){
	let user = {};
    signUp.addEventListener('submit', function(e){
            e.preventDefault();
            let pass1 = document.getElementById('passwordsignUp1').value;
            let pass2 = document.getElementById('passwordsignUp2').value;
            user.email = document.querySelector('input[type=email]').value;
            user.result = 0;
            user.name = document.getElementById('textsignUp').value;
            if(validation.newUserValidation(pass1, pass2) && validation.newEmaikValidation(user.email, user.name)){
            	user.pass = pass1;
            	storage.init();
                storage.addUser(user);
                router.renderPage('signUpSucsess');
            }
	});
  }