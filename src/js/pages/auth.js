'use strict';

import $ from 'jquery';
import storage from './storage';
import main from './main';
import user from './usercheck';



storage.init();
let newEll = {}
let Testcount = storage.setTestCount();
let totalСount = 0;
let questCount = 0;
let data = storage.getUsersList();
let dataTest = storage.getQuestionsList();
let currentQuestionArray = storage.getQuestionsList();




let controller = () =>{
    var start = document.getElementById('start');
    testInit(start);
};

let initData = () => {

};
export default {initData, controller};



let testInit = (start) => {
    start.addEventListener('click', startTest);
}

let startTest = (e) => {
    e.preventDefault();
    putQuestion();
}


let putQuestion = () => {
    let max = currentQuestionArray.questions.length;
    let number = Math.floor(Math.random() * (max));
    let newQwestion = currentQuestionArray.questions[number];
      let answer = newQwestion.answer.toLowerCase();
      let questionText = newQwestion.question;
        if(newQwestion.type === 'single'){
            main.renderQuestion('testRadio', newQwestion);
            createQuest(answer, questionText)
        }
        else if (newQwestion.type === 'multy') {
             main.renderQuestion('testCheckBox', newQwestion);
             createQuest(answer, questionText)
        }
        else{
            main.renderQuestion('testTextArea', newQwestion);
             createQuest(answer, questionText);
         }
        questCount+=1;  
        currentQuestionArray.questions.splice(number, 1);
        return questCount;
}

let createQuest = (answer, questionText) => {
   
    let start = document.getElementById('ready');
        
        start.addEventListener('submit', function(e){
            e.preventDefault();
           let answerArray =$('#ready').serializeArray();
           let userAnswer= '';
           for(let i = 0; i<answerArray.length; i++){
                userAnswer += answerArray[i].value.toLowerCase();
           }
            quwestionCheck(userAnswer, answer, questionText);
            if(questCount < 5){
                putQuestion();
            }
            else{
                questCount = 0;
                main.renderQuestion('home', Testcount);
                Testcount = storage.setTestCount();
            }
            user.id = storage.getUser();
            storage.addResult(user);
        });
}


let quwestionCheck = (userAnswer, answer, questionText) => {
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
            let userId = storage.getUser();
            user.result = Testcount.total;
            user.id = userId.id; 
            return Testcount;
}

