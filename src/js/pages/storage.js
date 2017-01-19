'use strict';

let data;
let dataTest;

let localdataTest = {
    questions: [{
        number: 1,
        type: 'single',
        question: 'Choose the best answer. "The witness told the court that he ___ the accused before."',
        variantA: 'had never seen',
        variantB: 'hasn`t seen',
        variantC: 'doesn`t see',
        answer:'had never seen'
        }, 
        {
        number: 2,
        type: 'single',
        question: 'Choose the synonym to the word "sincere"',
        variantA: 'frank',
        variantB: 'useful',
        variantC: 'obvious',
        answer:'frank'
        },{
        number: 3,
        type: 'single',
        question: 'Choose the best answer. "He was so tired that he ___ asleep in the chair."',
        variantA: 'went',
        variantB: 'fell',
        variantC: 'became',
        answer:'fell'
        },{
        number: 4,  
        type: 'multy',
        question: '____ that man in the red hat',
        variantA: 'Whose',
        variantB: 'Who’s',
        variantC: 'Who is',
        answer:'Who’sWho is'
        },{
        number: 5,
        type: 'text',
        question: 'Anna and Kate ____ to the cinema last Sunday. ',
        answer:'went '
        },{
        number: 6,
        type: 'text',
        question: '____ you help me with my project, please?',
        answer:'will'
        },{
        number: 7,  
        type: 'multy',
        question: 'Choose options to complete the sentence or conversation. "When can we meet again?"',
        variantA: 'When are you free?',
        variantB: 'Can you help me?',
        variantC: 'What about tomorrow?',
        answer:'When are you free?What about tomorrow?'
        },{
        number: 8,  
        type: 'multy',
        question: 'Choose options to complete the sentence or conversation. "Would you prefer lemonade or orange juice?"',
        variantA: 'Tom isn\'t here yet',
        variantB: 'Have you got anything else?',
        variantC: 'If you like.',
        answer:'Have you got anything else?If you like.'
        },{
        number: 9,
        type: 'text',
        question: 'How _____ money do you have?',
        answer:'much'
        }]
    };

let localdata = {
    users: [{
        name: 'admin',
        pass: 'admin',
        email: 'admin@ukr.net',
        result: 0
    },{
        name: 'user',
        pass: 'user',
        email: 'user@gmail.com',
        result: 0
    },{
        name: 'someone',
        pass: '000',
        email: 'somemail@gmail.com',
        result: 0
    },{
        name: 'Victor',
        pass: '555',
        email: '555@gmail.com',
        result: 0
    },{
        name: 'visiter',
        pass: 'visiter',
        email: 'visiter@rumbler.ru',
        result: 0
    }]

}
let syncWithStorage = ()=>{
  let listUsers = JSON.stringify(data);
  let listTest = JSON.stringify(dataTest);
  localStorage.setItem('data', listUsers);
  localStorage.setItem('dataTest', listTest);
};
let userId;

export default {
    setTestCount: () => {
        let Testcount = {
            results: [],
            total: 0
        };
        return Testcount;
    },
    getUser: () => {
        return userId;
    },
    setUser: (newUser) => {
        userId = newUser
    },
    getUsersList: () => {
        return data;
    },
    getQuestionsList: () => {
        return dataTest;
    },
    addUser: (user) => {
        data.users.push(user);
        syncWithStorage();
    },
    addQuestion: (newQuestion) => {
        dataTest.questions.push(newQuestion);
        syncWithStorage();
    },
    addResult: (newResult) => {
        data.users[newResult.id].result = newResult.result;
        syncWithStorage();
    },
    init: () =>{
      let storagedata = localStorage.getItem('data');

     if (storagedata) {
         data = JSON.parse(storagedata);
       } else {
         data = localdata;
       }
      let storagedataTest = localStorage.getItem('dataTest');

       if (storagedataTest) {
         dataTest = JSON.parse(storagedataTest);
       } else {
       dataTest = localdataTest;
       }
    }
};
