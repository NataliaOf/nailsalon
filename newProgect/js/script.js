// const { name } = require("browser-sync");

function testWebP(callback) {
   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
   if (support == true) {
      document.querySelector('html').classList.add('_webp');
   } else {
      document.querySelector('html').classList.add('_no-webp');
   }
});

//фильтр вывода инфыc
const filterBox = document.querySelectorAll('.box');
const filterLi = document.querySelectorAll('.autor');


document.querySelector('.filterNav').addEventListener('click', event => {
   if (event.target.tagName !== 'LI') return false;

   let filterClass = event.target.dataset['f'];
   let filterTarget = event.target;


   filterLi.forEach(el => {
      el.classList.remove('_active');
   });

   filterTarget.classList.add('_active');

   filterBox.forEach(elem => {
      elem.classList.remove('hide');
      if (!elem.classList.contains(filterClass) && filterClass != 'all') {
         elem.classList.add('hide');
      }
   });

});

// ***********pupap**********

let pupapMenu = document.querySelector('.menu__up');
let pupap = document.querySelector('.pupap');
let close = document.querySelector('.close');
let pupapBtn = document.querySelector('.pupapBtn');
let form = document.querySelector('.singUp');


pupapMenu.addEventListener('click', function () {
   pupap.style.display = "block";

});

close.addEventListener('click', function () {
   pupap.style.display = "none";
});

pupapBtn.addEventListener('click', function () {
   pupap.style.display = "block";
})


// ***************pupap video***************
let videoPupap = document.querySelector('.header__video');
let video = document.querySelector('.videos');
let nonScroll = document.querySelector('body');
videoPupap.addEventListener('click', function () {
   video.style.display = "block";
   nonScroll.style.overflow = "hidden";
})

let videoClose = document.querySelector('.videos');


videoClose.addEventListener('click', function () {
  
   video.style.display = "none";
   nonScroll.style.overflow = "scroll";
   
});

// *************Плавный скрол якорных ссылок***********
const anchors = document.querySelectorAll('a[href*="#"]');
const links = document.querySelectorAll('.menu__link');


for (let anchor of anchors) {
   anchor.addEventListener('click', function (event) {
      event.preventDefault();// отмена стандартного действия

      //Удаление активного класса у ссылки
      for (let link of links) {
         if (link.classList.contains('active')) {
            link.classList.remove('active');

         };
      };

      const blockId = anchor.getAttribute('href');
      
      document.querySelector('' + blockId).scrollIntoView({
         behavior: "smooth",
         block: "start"
      });


      //Добавление активного класса к ссылке
      anchor.classList.add('active');

   });
};


//***************masters*********************

const masters = document.querySelectorAll('.our-masters__foto');

let masterBox = document.querySelector('.our-masters__foto-box');
let imgMaster = document.querySelector('.one-master');
let faceb = document.querySelector('.faceb');
let instag = document.querySelector('.instag');
let info = document.querySelector('.our-masters__text');

masterBox.addEventListener('click', function (e) {
   if (e.target.tagName !== 'IMG') {
      return;
   }
   let master = e.target.getAttribute('src');

   let nameMacter = e.target.getAttribute('alt');
   let nameTitle = document.querySelector('.our-masters__title');
   let perent = e.target.closest('div');
   let infoMaster = perent.dataset['infoMaster'];
   let facebookLink = perent.dataset['fac'];
   let instagramLink = perent.dataset['ins'];
  




   imgMaster.innerHTML = `<img src="${master}" alt="${nameMacter}" class="one-master__img"></img>`;
   nameTitle.innerHTML = `<h3 class="our-masters__title">${nameMacter}</h3>`;
   info.innerHTML = infoMaster;
   faceb.innerHTML = ` <a href="https://www.facebook.com/${facebookLink}" class="our-masters__link faceb">Fasebook</a>`;
   instag.innerHTML = `<a href="https://www.instagram.com/${instagramLink}" class="our-masters__link instag">Instagram</a>`;
});


// *********************menu burger**************
let menuLinks = document.querySelectorAll('.menu__link');
let menuIcon = document.querySelector('.menu__icon');
let menuBody = document.querySelector('.menu__header');


menuIcon.addEventListener("click", function(){

menuIcon.classList.toggle('_active');
menuBody.classList.toggle('_active');

})
for (let index = 0; index < menuLinks.length; index++) {
   let menuLink = menuLinks[index];
   menuLink.addEventListener("click", function(){
      menuBody.classList.remove('_active');
      menuIcon.classList.remove('_active');
     
      
   })
  
}

// **************************Валидация формы********************




let singUpTel = document.querySelector('.singUp__tel');
let singUpBtn = document.querySelector('.singUp__btn');
let singUpName = document.querySelector('.singUp__name');

// let phon = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/,
let phon = /^\d{10}$/ ;
nameUs = /^[а-яёa-z]+$/i,
email = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;



singUpTel.addEventListener('input', function(){
   let telVal =singUpTel.value;
  
   
   singUpTel.classList.remove('noValid');
   if(phon.test(telVal)){
      singUpTel.classList.remove('noValid');
      document.querySelector('.singUp__tel_value').innerHTML = '';
     
      
   }else{
      singUpTel.classList.add('noValid');
      document.querySelector('.singUp__tel_value').innerHTML = 'Введите коректный номер телефона начиная с "0"';
      
   }
})


singUpName.addEventListener('input', function(){
   
   let nameVal = singUpName.value;
   singUpName.classList.remove('noValid');
   if(nameUs.test(nameVal) && nameVal.length>=3){
      
      singUpName.classList.remove('noValid');
      document.querySelector('.singUp__name_value').innerHTML = '';
   }else{
      singUpName.classList.add('noValid');
      
      document.querySelector('.singUp__name_value').innerHTML= 'Введите только буквы';
   }
});

singUpBtn.addEventListener('click', function(event){
console.log(singUpTel.value);

if(singUpTel.value.length<=0 && singUpTel.value.length<=0){ event.preventDefault() };

if( singUpName.classList.contains('noValid') || singUpTel.classList.contains('noValid')){
   event.preventDefault();
}else{
   return ;
}

   });
   



// *********************footer-form spend ************

let formFooter = document.querySelector('.form');
let nameFooter = document.querySelector('.form__name');
let emailFooter = document.querySelector('.form__email');
let messegeFooter = document.querySelector('.form__messege');
let btnFooter = document.querySelector('.form__btn');


nameFooter.addEventListener('input', function(){
   let nameFooterVal = nameFooter.value;
    nameFooter.classList.remove('noValid');
   if(nameUs.test(nameFooterVal) && nameFooterVal.length>3){
      nameFooter.classList.remove('noValid');
   }else{
      nameFooter.classList.add('noValid');
   }
});
   

emailFooter.addEventListener('input', function(){
   let  emailFooterVal = emailFooter.value;
   emailFooter.classList.remove('noValid');
if(email.test(emailFooterVal)){
   emailFooter.classList.remove('noValid');
}else{
   emailFooter.classList.add('noValid');
}
})


messegeFooter.addEventListener('input', function(){
   let massegeVal = messegeFooter.value;
   messegeFooter.classList.remove('noValid');
   
   if( massegeVal.length<10){
   
      messegeFooter.classList.add('noValid');
      
   }
   
})


btnFooter.addEventListener('click', function(event){
   
    if(emailFooter.value.length <= 0 && nameFooter.value.length <=0 ){
      event.preventDefault(); 

   }
   if( emailFooter.classList.contains('noValid') || nameFooter.classList.contains('noValid')){
      event.preventDefault();
   }else{

      return;
   }
})