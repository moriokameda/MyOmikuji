'use strict';

{
  // const btn = document.getElementById('btn');
  const btn = $('#btn');
  
  // btn.addEventListener('click',() => {
  //   // const results = ['大吉', '中吉', '凶','末吉'];
  //   // const results = ['大吉', '大吉', '大吉','末吉'];

  //   const n = Math.random();
  //   if(n < 0.05) {
  //    btn.textContent ='大吉';
  //   } else if (n >= 0.05 && n < 0.2) {
  //     btn.textContent = '中吉';
  //   }else {
  //     btn.textContent = '凶';
  //   }
  //   // const n = Math.floor(Math.random() * results.length);
  //   // btn.textContent = results[n];
  //   btn.textContent = results[Math.floor(Math.random() * results.length)];
  //   // btn.textContent = n;

  //   // switch(n) {
  //   //   case 0:
  //   //     btn.textContent ='大吉';
  //   //     break;  
  //   //   case 1:
  //   //     btn.textContent ='中吉';
  //   //     break;
  //   //   case 2:
  //   //     btn.textContent ='小吉';
  //   //     break;

  //   // }
  // });
  btn.click(function() {
    const n = Math.random();
    if (n < 0.05) {
      btn.text('大吉') ;
    } else if (n >= 0.05 && n < 0.2) {
      btn.text('中吉') ;
    } else {
      btn.text('凶'); 
    }
    
    btn.text(results[Math.floor(Math.random() * results.length)]);
    
  });
}