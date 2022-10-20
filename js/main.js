/* 292 */
 const badgeEl = document.querySelector('.badges');
const topEl = document.querySelector('.top_btn');

// topEl.addEventListener('click',function(){
//   gsap.to(window, 0.6,{ //window를 선택하여 0.6초만에
//     scrollTo:0, //스크롤 0까지 올라간다.
//   })
// });

window.addEventListener('scroll', function(){
  console.log(window.scrollY); //스크롤값 확인하기
  if(200>window.scrollY){
    gsap.to(badgeEl, 0.6, {
      opacity:0,
      display:'none'
    }),
    gsap.to(topEl,0.6, {
      opacity:0,
      display:'none'
    })
  }else if(760<window.scrollY){
    gsap.to(topEl,0.6, {
      opacity:1,
      display:'block'
    })
  }else{
    gsap.to(badgeEl, 0.6, {
      opacity:1,
      display:'block'
    }),
    gsap.to(topEl,0.6, {
      opacity:0,
      display:'none'
    })
  }
});


//header off SCROLL 200<이면 HEADER_TOP 없애기
window.addEventListener('scroll', function(){

  const hEl= document.querySelector('.h_top');
  const hbEl= document.querySelector('.h_bottom');

  if(250<window.scrollY){
    gsap.to(hEl, 0.6, {
      opacity:0,
      display:'none'
    }),
    gsap.to(hbEl, 0.6, {
      opacity:1,
      display:'block'
    })
  }else{
    gsap.to(hEl, 0.6, {
      opacity:1,
      display:'block'
    }),
    gsap.to(hbEl, 0.6, {
      opacity:0,
      display:'none'
    })
  }
}); 

/* gsap.to(요소, 시간, 속성) */
// const fadeEl = document.querySelectorAll('.fadeIn');

// fadeEl.forEach(function(fadeEl,index){
//   gsap.to(fadeEl,1,{
//     delay:(index+1)*0.7,  //0.7초씩 느리게 시간을 추가
//     opacity:1
//   });
// });

//이미지 선택하면 관련 상품 표현하기
const promotionEl1 = document.querySelector('section.promotion1');
const promotionEl2 = document.querySelector('section.promotion2');
const promotionEl3 = document.querySelector('section.promotion3');
const toggleBtnEl1 = document.querySelector('.toggle_btn1');
const toggleBtnEl2 = document.querySelector('.toggle_btn2');
const toggleBtnEl3 = document.querySelector('.toggle_btn3');

toggleBtnEl1.addEventListener('click',function(){
  if(promotionEl1.classList.contains('hide')){
    promotionEl1.classList.remove('hide');
  }else{
    promotionEl1.classList.add('hide');
  }
});
toggleBtnEl2.addEventListener('click',function(){
  if(promotionEl2.classList.contains('hide')){
    promotionEl2.classList.remove('hide');
  }else{
    promotionEl2.classList.add('hide');
  }
});
toggleBtnEl3.addEventListener('click',function(){
  if(promotionEl3.classList.contains('hide')){
    promotionEl3.classList.remove('hide');
  }else{
    promotionEl3.classList.add('hide');
  }
});

//content가 화면에 80% 지점일 때 동작하는 스크립트
const spyEl = document.querySelectorAll('section.scroll-spy');

spyEl.forEach(function(spyEl){
  new ScrollMagic.Scene({
    triggerElement:spyEl,
    triggerHook:0.8,
  })
  .setClassToggle(spyEl,'show')
  .addTo(new ScrollMagic.Controller());
});

$(document).ready(function(){
        
  $('.h_top').hover(function(){
      $(this).css({
          'background':'#F0EEE4',
          'height':'310px',
          'transition':'0.8s'
      }),
      $('#logo2').css({
          'opacity':'1'
      }),
      $('.h_top *').css({
          'color':'#000'
      });
  },function(){
      $(this).css({
          'background':'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%,rgba(0,0,0,0) 100%)'
      }),
      $('#logo2').css({
          'opacity':'0'
      }),
      $('.h_top *').css({
          'color':'#fff'
      });
  })
  $(document).snowfall({
      image :"img/flake.png", 
      minSize: 3, 
      maxSize:10, 
      flakeCount : 10
   });
  $('.badges').mouseover(function(){
      $(document).snowfall({
      image :"img/flake.png", 
      minSize: 5, 
      maxSize:20, 
      flakeCount : 120
      })
  });
  $('.badges').mouseout(function(){
      $(document).snowfall({
      image :"img/flake.png", 
      minSize: 1, 
      maxSize:5, 
      flakeCount : 10
      })
  });
});
