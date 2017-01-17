'use strict';

import main from './main';
// import auth from './auth';
import storage from './storage';

// let userData = auth.getUser();
storage.init();
main.init();


// let logInForm = document.getElementById('logIn');
// logInForm.addEventListener('submit', auth.checkUser);


window.addEventListener('popstate', function(){
	let pseudolink =  document.getElementsByClassName('pseudolink');
	if(pseudolink){
		for(let i=0; i<pseudolink.length; i++){
				pseudolink[i].addEventListener('click', function(e){
					console.log(e);
				main.renderPage(this.dataset.link);
			});
		}
		
	}
});


