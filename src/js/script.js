'use strict';

import main from './pages/main';
import storage from './pages/storage';


storage.init();
main.init();


window.addEventListener('popstate', function(){
	let pseudolink =  document.getElementsByClassName('pseudolink');
	if(pseudolink){
		for(let i=0; i<pseudolink.length; i++){
				pseudolink[i].addEventListener('click', function(e){
				main.renderPage(this.dataset.link);
			});
		}
		
	}
});


