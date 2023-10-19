const changeMode=document.querySelector('.iconLight');
const bodyColor=document.querySelector('.body');
const contactInfo=document.querySelector('.contactinfo');
const btn=document.querySelector('.submitBtn');
const message=document.querySelector('.sendMessage');
changeMode.addEventListener('click',()=>{
     bodyColor.classList.toggle('body-active');
     contactInfo.classList.toggle('contactinfo-active');
     btn.classList.toggle('submitBtn-active');
     message.classList.toggle('sendMessage-active');
})