const pics =[...document.querySelectorAll('[class^="card"]')]; 
var choose;
var link = "images/flowers-"+choose+"-large.jpg";
var i;
let key=0;// to be able to use arrows----each flowerpicture has a key number and we can understand which picture is showing up

//Egecan Kahyaoglu 200406015

/* 
for(i=0; i<pics.length; i++){
    
    pics[i].addEventListener('click', function(e){ console.log(`resim ${i}`) })

} */


//big picture to show
var bigPic=document.getElementById('bigPic');
var body=document.querySelector('body');
bigPic.src ="images/flowers-pink-large.jpg";

pics[0].addEventListener('click', function(e){
    bigPic.src ="images/flowers-pink-large.jpg";
    document.getElementById('figcaption').innerHTML="PINK FLOWERS";
    key=0;
    
})
pics[1].addEventListener('click', function(e){
    bigPic.src ="images/flowers-purple-large.jpg";
    document.getElementById('figcaption').innerHTML="PURPLE lAVANTA";
    key=1;
})
pics[2].addEventListener('click', function(e){
    bigPic.src ="images/flowers-red-large.jpg";
    document.getElementById('figcaption').innerHTML="RED FLAMUSKAS";
    key=2;
})
pics[3].addEventListener('click', function(e){
    bigPic.src ="images/flowers-white-large.jpg";
    document.getElementById('figcaption').innerHTML="SNOW WHITE DAISY";
    key=3;
})
pics[4].addEventListener('click', function(e){
    bigPic.src ="images/flowers-yellow-large.jpg";
    document.getElementById('figcaption').innerHTML="SUN FLOWERS";
    key=4;
})



var arrowL=document.getElementById('arrowL');
var arrowR=document.getElementById('arrowR');

arrowL.addEventListener('click',left)
arrowR.addEventListener('click',right)
function left(){

    switch (key) {
       
        case 0:
            bigPic.src ="images/flowers-purple-large.jpg";
            key=1;
          break;
        case 1:
            bigPic.src ="images/flowers-red-large.jpg";
            key=2;
          break;
        case 2:
            bigPic.src ="images/flowers-white-large.jpg";
            key=3;
          break;
        case 3:
            bigPic.src ="images/flowers-yellow-large.jpg";
            key=4;
          break;
        case 4:
            bigPic.src ="images/flowers-pink-large.jpg";
            key=0;
          break;
       
      }



    }


    function right(){

        switch (key) {
           
            case 0:
                bigPic.src ="images/flowers-purple-large.jpg";
                key=4;
              break;
            case 1:
                bigPic.src ="images/flowers-red-large.jpg";
                key=0;
              break;
            case 2:
                bigPic.src ="images/flowers-white-large.jpg";
                key=1;
              break;
            case 3:
                bigPic.src ="images/flowers-yellow-large.jpg";
                key=2;
              break;
            case 4:
                bigPic.src ="images/flowers-pink-large.jpg";
                key=3;
              break;
           
            }

        }
