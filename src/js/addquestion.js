'use strict';
import $ from 'jquery';
import validation from './pages/validation';
import storage from './storage';
import router from './main';


let controller = () =>{
	// router.renderQuestion('questionForm');
	// console.log('hi');
 //  	 router.renderForm('single');
  //       let selectType = document.getElementById('questionType');
  //       selectType.addEventListener('change', function(e){
  //            router.renderForm(e.target.value);
  //       });
  //       let formQuest = document.getElementById('addQuestion');
  //        addnewQuestion(formQuest);

};


let initData = () => {
  		// let dataTest= storage.getQuestionsList();
  		// return dataTest;
};


export default {initData, controller};

// function addnewQuestion(formQuest){
//     formQuest.addEventListener('submit', function(e){
//         e.preventDefault();
//         let newQuest = {};
//         newQuest.type = document.querySelector('select').value;
//         newQuest.question = document.getElementById('questionText').value;
//         newQuest.number = dataTest.questions.length + 1;
//         if(newQuest.type === 'text'){
//             newQuest.answer = document.getElementById('answerText').value;
//         }
//         else if(newQuest.type === 'single'){
//             newQuest.answer = document.querySelector('input[type=radio]:checked + label>input[type=text]').value;
//             newQuest.variantA = document.querySelector('input[type=radio]#variantA + label>input[type=text]').value;
//             newQuest.variantB = document.querySelector('input[type=radio]#variantB + label>input[type=text]').value;
//             newQuest.variantC = document.querySelector('input[type=radio]#variantC + label>input[type=text]').value;
//         }
//         else if(newQuest.type === 'multy'){
//             newQuest.variantA = document.querySelector('input[type=checkbox]#variantA + label>input[type=text]').value;
//             newQuest.variantB = document.querySelector('input[type=checkbox]#variantB + label>input[type=text]').value;
//             newQuest.variantC = document.querySelector('input[type=checkbox]#variantC + label>input[type=text]').value;
//             let newAns = $( 'input:checked + label > input[type=text]');
//             let answers='';
//             for(let n = 0; n<newAns.length; n++){
//                 answers += newAns[n].value;
//             }
//             newQuest.answer = answers;
//         }
        
//         storage.addQuestion(newQuest);
//        // flag=6;
//         //pageEach();
//          router.renderPage('questions');
//         // var questButton = document.getElementById('tab');
//         // let addButton = document.getElementById('addQuestion');
//         // questTab(flag, questButton);
//         // newQuestForm(addButton);
//     })
// }

// function newQuestForm(button){
//     button.addEventListener('click', function(e){
//         e.preventDefault();    
//         router.renderPage('questionForm', data);
//         router.renderForm('single');
//         let selectType = document.getElementById('questionType');
//         console.log(selectType);
//         selectType.addEventListener('change', function(e){
//              router.renderForm(e.target.value);
//         });
//         let formQuest = document.getElementById('addQuestion');
//          addnewQuestion(formQuest);
//     })
// }


// let currentQuestionArray = storage.getQuestionsList();



// let setQuestion = (start) => {
// 	start.addEventListener('click', function(e){
//             e.preventDefault();
//             console.log("start");
//             putQuestion();
//            // let answerArray =$('#ready').serializeArray();
//            // let userAnswer= '';
//            // for(let i = 0; i<answerArray.length; i++){
//            //      userAnswer += answerArray[i].value;
//            // }
//            //  quwestionCheck(userAnswer, answer, questionText);
//            //  if(questCount < 5){
//            //      putQuestion();
//            //  }
//            //  else{ 
//            //      main.renderQuestion('home', Testcount);
                
//            //  }
//            //  storage.addResult(user);
//         });
// }

// let putQuestion = () =>{
//     let max = currentQuestionArray.questions.length;
//     let number = Math.floor(Math.random() * (max));
//     let newQwestion = currentQuestionArray.questions[number];
//       let answer = newQwestion.answer;
//       let questionText = newQwestion.question;
//         if(newQwestion.type === 'single'){
//             router.renderQuestion('testRadio', newQwestion);
//             auth.createQuest(answer, questionText)
//         }
//         else if (newQwestion.type === 'multy') {
//              router.renderQuestion('testCheckBox', newQwestion);
//              auth.createQuest(answer, questionText)
//         }
//         else{
//             router.renderQuestion('testTextArea', newQwestion);
//              auth.createQuest(answer, questionText);
//          }
//         auth.questCount+=1;  
//         currentQuestionArray.splice(number, 1);
//         return auth.questCount;
//  }
