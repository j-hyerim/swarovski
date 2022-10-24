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

$(document).ready(function(){
    let src;
$('div.item').hover(function(){
    let n = $(this).index()+1;
    console.log(n);
    src = $(this).find('img').attr('src');
    src = src.split('.jpg');
    console.log(src[0]+"-1.jpg");
    $(this).find('img').attr('src',src[0]+"-1.jpg");
    },function(){
        $(this).find('img').attr('src',src[0]+".jpg");
  });
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
//header bottom bg
$('.h_bottom ul li').hover(function(){
  $('.mainbg').css({
      'display':'block'
      // 'opacity':'1'
  });
  },function(){
    $('.mainbg').css({
        'display':'none'
        // 'opacity':'0'
    });
  })


});