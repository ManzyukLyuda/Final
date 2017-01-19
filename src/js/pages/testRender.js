'use strict';
import storage from './storage';
import router from './main';
import user from './usercheck';

let userId = user.initData().userId;


let controller = () =>{
    let currentQuestionArray = storage.getQuestionsList();
    console.log(currentQuestionArray.length);
    let max = currentQuestionArray.questions.length;
    let number = Math.floor(Math.random() * (max));
    let newQwestion = currentQuestionArray.questions[number];
    putQuestion();
    
};

let initData = () => {

  return newQwestion;
};


export default {initData, controller};


let putQuestion = () =>{
     
        if(newQwestion.type === "single"){
            main.renderPage('testRadio', newQwestion);
            createQuest(answer, questionText)
        }
        else if (newQwestion.type === "multy") {
             main.renderPage('testCheckBox', newQwestion);
             createQuest(answer, questionText)
        }
        else{
            main.renderPage('testTextArea', newQwestion);
             createQuest(answer, questionText);
         }
        questCount+=1;  
        currentQuestionArray.splice(number, 1);
        return questCount;
}


let createQuest = (answer, questionText) => {
    let start = document.getElementById('ready');
        
        start.addEventListener("submit", function(e){
            e.preventDefault();
           let answerArray =$('#ready').serializeArray();
           let userAnswer= "";
           for(let i = 0; i<answerArray.length; i++){
                userAnswer += answerArray[i].value;
           }
            quwestionCheck(userAnswer, answer, questionText);
            if(questCount < 5){
                putQuestion();
            }
            else{ 
                currentQuestionArray = storage.getQuestionsList();
                main.renderPage('home', Testcount);
                
            }
            storage.addResult(user);
        });
}