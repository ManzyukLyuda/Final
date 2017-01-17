'use strict';

import $ from 'jquery';
import storage from './storage';
let controller = () =>{
  let ready = document.getElementById('ready');
  console.log('ready');
  getResult(ready);
};


let initData = () => {
  return {

  };
};


export default {initData, controller};





let newEll = {}
let Testcount = {
    results: [],
    total: 0
};
let totalСount = 0;
let questCount = 0;
 function quwestionCheck(userAnswer, answer, questionText){
            if(userAnswer === answer){ 
                newEll = {
                    question: questionText,
                    correctAnswer: userAnswer,
                    icon: 'done'
                }
                Testcount.results.concat(newEll);
                totalСount += 10;    
            }
            else{
                newEll = {
                    question: questionText,
                    correctAnswer: '',
                    icon: 'clear'
                }
               
            }
            Testcount.results.splice(Testcount.results.length-1, 0, newEll);
            Testcount.total = totalСount; 
            user.result = Testcount.total;
            user.id = userId;

            return Testcount;
}




let getResult = (ready) => {
	ready.addEventListener('submit', function(e){
		e.preventDefault();
		let answerArray =$('#ready').serializeArray();
	   let userAnswer= '';
	   for(let i = 0; i<answerArray.length; i++){
	        userAnswer += answerArray[i].value;
	   }
	    quwestionCheck(userAnswer, answer, questionText);
	    if(questCount < 5){
	        putQuestion();
	    }
	    else{ 
	        main.renderQuestion('home', Testcount);
	        
	    }
	    storage.addResult(user);
	})
	
}