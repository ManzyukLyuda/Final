'use strict';
import validation from './pages/validation';
import storage from './storage';
import router from './main';


storage.init();
data: storage.getUsersList();
let controller = () =>{
 	let logInNewUser = document.getElementById('logInNewUser');
  	logInUser(logInNewUser);

};


let initData = () => {
 storage.init();
    return {
        data: storage.getUsersList(),
        dataTest: storage.getQuestionsList()
    };
};


export default {initData, controller};



function logInUser(logInNewUser){
    	logInNewUser.addEventListener('click', function(e){
        e.preventDefault();
        storage.init();
		storage.getUsersList();
        router.renderPage('login');
        
    })
}