'use strict';
// Movement Animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');
//Items
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const descripttion = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

//Moving Animation Event
container.addEventListener('mousemove', (e)=>{
  let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  let yAxis = (window.innerHeight / 2 - e.pageY)/10;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animation In
container.addEventListener('mouseenter', e=>{
  card.style.transition = 'none';  
  //Popout
  title.style.transform = 'translateZ(120px)';
  sneaker.style.transform = 'translateZ(150px) rotateZ(35deg)';
  descripttion.style.transform = 'translateZ(100px)';
  sizes.style.transform = 'translateZ(80px)';
  purchase.style.transform = 'translateZ(80px)';
})



//Animate Out
container.addEventListener('mouseleave', e =>{
  card.style.transition = 'all 500ms ease';
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title.style.transform = 'translateZ(0px)';
  sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)';
  descripttion.style.transform = 'translateZ(0px)';
  sizes.style.transform = 'translateZ(0px)';
  purchase.style.transform = 'translateZ(0px)';
});