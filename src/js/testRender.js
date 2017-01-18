'use strict';
import storage from './storage';
import router from './main';
import user from './usercheck'


//storage.init();

let userId = user.initData().userId;


let controller = () =>{
    let currentQuestionArray = storage.getQuestionsList();
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


function createQuest(answer, questionText){
    var answer = answer;
    var questionText = questionText;
    storage.init();
    var start = document.getElementById('ready');
        
        start.addEventListener("submit", function(e){
            e.preventDefault();
           var answerArray =$('#ready').serializeArray();
           var userAnswer= "";
           for(var i = 0; i<answerArray.length; i++){
                userAnswer += answerArray[i].value;
           }
            quwestionCheck(userAnswer, answer, questionText);
            if(questCount < 5){
                putQuestion();
            }
            else{ 
                main.renderPage('home', Testcount);
                
            }
            storage.addResult(user);
        });
}