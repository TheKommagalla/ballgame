const element=  document.querySelector("#score");
let count=0;
setInterval(() => {
  
    ++count;
element.innerHTML='SCORE:'+count;
    
}, 100);
  
