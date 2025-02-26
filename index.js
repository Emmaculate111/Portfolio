function progressWorking(){
// ----------THIS IS FOR THE PROGRESS BAR---------//

// -------- THIS IS FOR THE HTML ---------- //

var progressHtml = new ProgressBar.Line('.html', {
    strokeWidth : 3.5,
    trailWidth : 3.5,
    color: "#B9D6F2",
    trailColor:  "#061A40",
    duration: 2000,
    easing: "easeInOut",
    text: {
        value: '',
        alignToBottom: false,
        className: 'nothing'
    },
    svgStyle: {
        width: '100%',
        display: 'block',
        'border-radius' : '10px'
    },
    step: (state, bar) => {
        const percentage = Math.round(bar.value() * 100);
        bar.setText(percentage + '%');
        document.querySelector('.htmlPercentage').innerHTML = percentage + '%'
    }

})
progressHtml.animate(0.95)

// -------- THIS IS FOR THE CSS ----------------//
var progressCss = new ProgressBar.Line('.css', {
    strokeWidth : 3.5,
    trailWidth : 3.5,
    color: "#B9D6F2",
    trailColor:  "#061A40",
    duration: 2000,
    easing: "easeInOut",
    text: {
        value: '',
        alignToBottom: false,
        className: 'nothing'
    },
    svgStyle: {
        width: '100%',
        display: 'block',
        'border-radius' : '10px'
    },
    step: (state, bar) => {
        const percentage = Math.round(bar.value() * 100);
        bar.setText(percentage + '%');
        document.querySelector('.cssPercentage').innerHTML = percentage + '%'
    }

})
progressCss.animate(0.80)

// -------- THIS IS FOR THE JAVASCRIPT -------- //
var progressJavascript = new ProgressBar.Line('.Javascript', {
    strokeWidth : 3.5,
    trailWidth : 3.5,
    color: "#B9D6F2",
    trailColor:  "#061A40",
    duration: 2000,
    easing: "easeInOut",
    text: {
        value: '',
        alignToBottom: false,
        className: 'nothing'

    },
    svgStyle: {
        width: '100%',
        display: 'block',
        'border-radius' : '10px'
    },
    step: (state, bar) => {
        const percentage = Math.round(bar.value() * 100);
        bar.setText(percentage + '%');
        document.querySelector('.javascriptPercentage').innerHTML = percentage + '%'
    }

})
progressJavascript.animate(0.70)


// -------- THIS IS FOR THE NODE.JS --------------//
var progressNodeJs = new ProgressBar.Line('.nodeJs', {
    strokeWidth : 3.5,
    trailWidth : 3.5,
    color: "#B9D6F2",
    trailColor:  "#061A40",
    duration: 2000,
    easing: "easeInOut",
    text: {
        value: '',
        alignToBottom: false,
        className: 'nothing'

    },
    svgStyle: {
        width: '100%',
        display: 'block',
        'border-radius' : '10px'
    },
    step: (state, bar) => {
        const percentage = Math.round(bar.value() * 100);
        bar.setText(percentage + '%');
        document.querySelector('.nodeJsPercentage').innerHTML = percentage + '%'
    }

})
progressNodeJs.animate(0.67)

  
}




  
  
$(document).ready(function(){
 
  
    //------- SCROLL ANIMATION------//
    var progressStarted = false; // Flag to check if progress bar has started

    $(window).on('scroll', function(){
        if ($(this).scrollTop() > 450 && !progressStarted) {
            progressWorking();
            progressStarted = true;
       }
       if ($(this).scrollTop() > 450) {
         $('.scrolltop').css({
           visibility: 'visible'
         })
         
       }else{
         $('.scrolltop').css({
           visibility : 'hidden'
         })
       }
});

       $('.scrolltop').on('click', function(){
         $('html, body').animate({
           scrollTop : 0
         }, 1000)
       })
  

    // ----------THIS IS FOR THE ANIMATION---------//
    
        $('.menu-bar').click(function() {
        $(this).find('i').toggleClass('fa-times fa-bars'); // Toggle between bars and X icon
        if ($('.menu-bar').hasClass('fa-times')){
          $('.menu-bar-down').css({
            display: 'block'
          })
        }
        $('.menu-bar-down').slideToggle('slow'); // Toggle the dropdown menu
        $('ul.drop-menu > li').on('click', function(){
          $('.menu-bar-down').css({
            display : 'none'
          })
        })
    });
    

// ----------- TYPEWRITE ANIMATION -------------------  //
 var mann = document.querySelector('.Outro');

 var tying = 'I build responsive, user-freindly websites with modern technologies...';

 var count = 0;

console.log(tying.length);
 function typingWord(){
   

    if ( count < tying.length ){
      
      mann.innerHTML += tying.charAt(count);
      
      count++;
      
      setTimeout(typingWord, 50);

    }


 }window.onload = typingWord

 

  
 });

 
