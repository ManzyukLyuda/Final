'use strict';

import $ from 'jquery';
import storage from './storage';
// import newQwestion from'./testRender'
import main from './main';
import user from './usercheck';



storage.init();
let newEll = {}
let Testcount = {
        results: [],
        total: 0
    };
let totalСount = 0;
let questCount = 0;
let data = storage.getUsersList();
let dataTest = storage.getQuestionsList();
let currentQuestionArray = storage.getQuestionsList();




let controller = () =>{
    console.log(user.initData);
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


function putQuestion(){
    let max = currentQuestionArray.questions.length;
    let number = Math.floor(Math.random() * (max));
    let newQwestion = currentQuestionArray.questions[number];
      let answer = newQwestion.answer;
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

function createQuest(answer, questionText){
   
    let start = document.getElementById('ready');
        
        start.addEventListener('submit', function(e){
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
            user.id = storage.getUser();
            storage.addResult(user);
        });
}


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
            let userId = storage.getUser();
            console.log(userId);
            user.result = Testcount.total;
            user.id = userId.id;
            
            return Testcount;
}



function pageEach() {
    storage.init();
    // if (flag === 1) {
    //     main.renderPage('login');

    //     let logInForm = document.getElementById('logIn');
    //     logInForm.addEventListener('submit', resul.checkUser); 

    // } else if (flag === 2) {
    //     main.renderQuestion('signup', userData);
    //     addNewUser(data.users);
    // } else if (flag === 4) {
    //     main.renderPage('admin');
    //     var button = document.getElementById('tab');
    //    adminTab(flag, button);

    // } 
   if (flag === 6) {
        main.renderPage('questions');
        var button = document.getElementById('tab');
        adminTab(flag, button);
    }
    else {
        main.renderPage('profile', userData);
        let start = document.getElementById('ready');
        start.addEventListener('click', function(e){
            putQuestion();
            createQuest(answer, questionText);
        });
    }
    
}













// function addNewUser(data){
//   let signUp = document.getElementById('signUp');
//      signUp.addEventListener('submit', function(e){
//             e.preventDefault();
//             let pass1 = document.getElementById('passwordsignUp1').value;
//             let pass2 = document.getElementById('passwordsignUp2').value;
//             user.email = document.querySelector('input[type=email]').value;
//             user.result = 0;
//             if(validation.newUserVAlidation(pass1, pass2)){
//                 storage.addUser(user);
//                 storage.init();
//                 main.renderPage('signUpSucsess');
//                 logInNewUser();
//             }
  

// function logInNewUser(){
//     let logInNewUser = document.getElementById('logInNewUser');
//     logInNewUser.addEventListener('click', function(e){
//         e.preventDefault();
//         storage.init();
//         flag=1;
//         pageEach();
//     })
// } });
// }


function adminTab(flag, button){
    button.addEventListener('click', function(e){
        e.preventDefault();
        main.renderPage('questions', dataTest);
        flag = 6;
        var questButton = document.getElementById('tab');
        var addButton = document.getElementById('addQuestion');
        questTab(flag, questButton);
        // newQuestForm(addButton);
    });
}

function questTab(flag, button){
        button.addEventListener('click', function(e){
        flag = 4;     
        pageEach();
    });
}
function newQuestForm(button){
    button.addEventListener('click', function(e){
        e.preventDefault();    
        main.renderPage('questionForm', data);
        main.renderForm('single');
        let selectType = document.getElementById('questionType');
        selectType.addEventListener('change', function(e){
             main.renderForm(e.target.value);
        });
        let formQuest = document.getElementById('addQuestion');
         addnewQuestion(formQuest);
    })
}


function addnewQuestion(formQuest){
    formQuest.addEventListener('submit', function(e){
        e.preventDefault();
        let newQuest = {};
        newQuest.type = document.querySelector('select').value;
        newQuest.question = document.getElementById('questionText').value;
        newQuest.number = dataTest.questions.length + 1;
        if(newQuest.type === 'text'){
            newQuest.answer = document.getElementById('answerText').value;
        }
        else if(newQuest.type === 'single'){
            newQuest.answer = document.querySelector('input[type=radio]:checked + label>input[type=text]').value;
            newQuest.variantA = document.querySelector('input[type=radio]#variantA + label>input[type=text]').value;
            newQuest.variantB = document.querySelector('input[type=radio]#variantB + label>input[type=text]').value;
            newQuest.variantC = document.querySelector('input[type=radio]#variantC + label>input[type=text]').value;
        }
        else if(newQuest.type === 'multy'){
            newQuest.variantA = document.querySelector('input[type=checkbox]#variantA + label>input[type=text]').value;
            newQuest.variantB = document.querySelector('input[type=checkbox]#variantB + label>input[type=text]').value;
            newQuest.variantC = document.querySelector('input[type=checkbox]#variantC + label>input[type=text]').value;
            let newAns = $( 'input:checked + label > input[type=text]');
            let answers='';
            for(let n = 0; n<newAns.length; n++){
                answers += newAns[n].value;
            }
            newQuest.answer = answers;
        }
        
        storage.addQuestion(newQuest);
       // flag=6;
        //pageEach();
         main.renderPage('questions');
        var questButton = document.getElementById('tab');
        let addButton = document.getElementById('addQuestion');
        questTab(flag, questButton);
        newQuestForm(addButton);
    })
}
