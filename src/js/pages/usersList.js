'use strict';
import storage from './storage.js';
import router from './main.js';

storage.init();
let controller = () =>{
		var button = document.getElementById('tab');
        adminTab(button);    
};


let initData = () => {
  let data= storage.getUsersList();
  return data;
};


export default {initData, controller};

function adminTab(button){
    	button.addEventListener('click', function(e){
        e.preventDefault();
        router.renderPage('questions');
        var questButton = document.getElementById('tab');
        var addButton = document.getElementById('addQuestion');
        // questTab(questButton);
        newQuestForm(addButton);
    });
}

function questTab(flag, button){
        button.addEventListener('click', function(e){
        flag = 4;     
        router.renderPage('admin');
    });
}
function newQuestForm(button){
    button.addEventListener('click', function(e){
        e.preventDefault();    
        router.renderPage('questionForm');
        router.renderForm('single');
        let selectType = document.getElementById('questionType');
        selectType.addEventListener('change', function(e){
             router.renderForm(e.target.value);
        });
        let formQuest = document.getElementById('addQuestion');
         addnewQuestion(formQuest);
    })
}





function addnewQuestion(formQuest){
    formQuest.addEventListener('submit', function(e){
    	let dataTest = storage.getQuestionsList();
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
            let newAns = document.querySelector( 'input:checked + label > input[type=text]');
            let answers='';
            for(let n = 0; n<newAns.length; n++){
                answers += newAns[n].value;
            }
            newQuest.answer = answers;
        }
        
        storage.addQuestion(newQuest);
        router.renderPage('questions');
        let addButton = document.getElementById('addQuestion');
        newQuestForm(addButton);
    })
}
