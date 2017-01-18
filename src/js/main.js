'use strict';
// import auth from './auth';
import loginPage from '../tmpl/login-form.html';
import signupPage from '../tmpl/signup.html';
import userProfilePage from '../tmpl/profile.html';
import testRadio from '../tmpl/testradio.html';
import testCheckbox from '../tmpl/testcheckbox.html';
import testTextArea from '../tmpl/testtextarea.html';

import adminProfilePage from '../tmpl/admin.html';
import homePage from '../tmpl/home.html';
import Handlebars from 'handlebars';

import signUpSucsessPage from '../tmpl/sucsess.html';
import questionPage from '../tmpl/adminQuestion.html';
import questionForm from '../tmpl/questionForm.html';

import multyPage from '../tmpl/multy.html';
import singlePage from '../tmpl/single.html';
import textPage from '../tmpl/text.html';
import questionsList from './questionsList';
import usersList from './usersList';
import currentQuest from './testRender';

import userCheck from './usercheck'
import usersignup from './usersignup'
import confirm from './confirm'
import addquestion from './addquestion'
import storage from './storage.js'
import test from './auth'


const homeInitPage = 'login';

let config = {
  'login': {
    url: 'login',
    template: loginPage,
    initData: userCheck.initData,
    controller: userCheck.controller

  },
  'signup': {
    url: 'signup',
    template: signupPage,
    initData: usersignup.initData,
    controller: usersignup.controller
  },
  'signUpSucsess': {
    url: '',
    template: signUpSucsessPage,
    initData: confirm.initData,
    controller: confirm.controller
  },
  'profile': {
    url: 'profile',
    template: userProfilePage,
    initData: test.initData,
    controller: test.controller
  },
  'admin':{
    url: 'admin',
    template: adminProfilePage,
    controller: usersList.controller,
    initData: usersList.initData
  },
  'questions':{
     url: 'questions',
     template: questionPage,
     controller: questionsList.controller,
     initData: questionsList.initData
  },
  'questionForm':{
     url: '',
     template: questionForm,
     initData: addquestion.controller,
     controller: addquestion.initData
  },
  'home':{
     url: 'home',
     template: homePage,
     initData: function(){},
     controller:  storage.setTestCount
  },
  'testRadio':{
     url: '',
     template: testRadio,
      initData: function(){},
      controller: function(){}
  },
  'testCheckBox':{
     url: '',
     template: testCheckbox,
      initData: function(){},
      controller: function(){}
  },
  'testTextArea':{
     url: '',
     template: testTextArea,
      initData: function(){},
      controller: function(){}
  }
};

let configForm = {
  'multy':{
    template: multyPage
  },
  'single':{
    template: singlePage
  },
  'text':{
    template: textPage
  }
};

let findPageByHash = (currentHash) =>{

  for (let pageName in config) {
    let pageUrl = '#' + config[pageName].url;
    if (pageUrl === currentHash){
      return pageName;
    }
  }

  return null;
}; 


let initRouter = () =>{
  let currentHash = window.location.hash;
  let currentPage = findPageByHash(currentHash);

  if (currentPage) {
    renderPage(currentPage);
  } else {
    renderPage(homeInitPage);
  }

};


let setUrl = (url) => {
    window.location.hash = url;
};


function renderQuestion(page, newQuestin){
   let main = document.getElementById('page');
   let pageToRender = config[page].template;
   let template = Handlebars.compile(pageToRender);
   main.innerHTML = template(newQuestin);
   config[page].controller();
   setUrl(config[page].url);
}


let renderPage = (page) => {
   let main = document.getElementById('page');
   let pageToRender = config[page].template;
   let template = Handlebars.compile(pageToRender);
   // if(config[page].initData){
   let dataBase = config[page].initData();
   // }
   main.innerHTML = template(dataBase);
   config[page].controller();
   setUrl(config[page].url);

}

function renderForm(form){
   let mainForm = document.getElementById('content');
   let formToRender = configForm[form].template;

   let template = Handlebars.compile(formToRender);
   mainForm.innerHTML = formToRender;
}
export default {
  init: initRouter,
  renderPage: renderPage,
  renderForm: renderForm,
  renderQuestion: renderQuestion
};