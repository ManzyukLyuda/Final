'use strict';
import validation from './validation';
import storage from './storage';
import router from './main';

let controller = () => {
    let logInForm = document.getElementById('logIn');
    logInForm.addEventListener('submit', checkUser);

}
let initData = () => {
    return {
        data: storage.getUsersList(),
        dataTest: storage.getQuestionsList(), 
        user: getId(),
    };
};



let user = {};
let userId;
let pickedUsre;
let flag;

let checkUser = (e) => {
    e.preventDefault();
    user.name = document.querySelector('input[type=text]').value;
    user.pass = document.querySelector('input[type=password]').value;
    if (userCheck(user) === null) { 
    	router.renderQuestion('signup', user); 
    }
    getId();
    return userId

}

let getId = ()=>{
    storage.setUser(userId);
};



let  userCheck = (newUser) => {
    userId = null;
    storage.init();
    let data = storage.getUsersList();
    if (newUser.name === 'admin' && newUser.pass === 'admin') {
        router.renderPage('admin');
        userId = 0;
    } else if (newUser.name === 'admin' && newUser.pass !== 'admin') {
        validation.validationResult();
        return false;
    } else {
        for (var i = 0; i < data.users.length; i++) {
            if (data.users[i].name === newUser.name) {
                pickedUsre = data.users[i];
                if (pickedUsre.pass === newUser.pass) {
                    userId = i;
                    router.renderQuestion('profile', newUser);
                    break;
                    user = pickedUsre;
                    return user;
                }
                validation.validationResult();
                return false;
            } else {
            }
        }
    }

    return userId;
}

export default {initData, controller};
