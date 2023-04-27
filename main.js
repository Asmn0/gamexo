let btn = document.getElementById('btn')
let titl = document.querySelector('.gee')
let turn = 'x';
let spery =[];


 
 btn.onclick = function(){
 
 setInterval(function(){btn.innerHTML = 'جاري تحميل'},1000);  
   
   setTimeout(function(){location.reload()},2000);
 }
 
 function end(num1,num2,num3){
titl.innerHTML =  `${spery[1]}لقد فاز`

document.getElementById('item' + num1).style.background = '#0D00FF'
  
  
  document.getElementById('item' + num2).style.background = '#0D00FF'
   
   
   document.getElementById('item' + num3).style.background = '#0D00FF'
  
  
  setInterval(function(){titl.innerHTML += '.'},1000);
  
  setTimeout(function(){location.reload()},2000);
  
  
  
  
    
 }
 
 
 
function wein()
{
  for(let i = 1;i<10;i++){
   spery[i] = document.getElementById('item' + i).innerHTML;
  }
  if (spery[1] == spery[2] && spery[2] == spery[3] && spery[1] != '') {
    end(1,2,3)
  }
  
  else if (spery[4] == spery[5] && spery[5] == spery[6] && spery[4] != '') {
     end(4,5,6)
  }
  
  
  
  else if (spery[7] == spery[8] && spery[8] == spery[9] && spery[7] != '') {
    end(7,8,9)
  }
  
 else if (spery[1] == spery[5] && spery[5] == spery[9] && spery[1] != '') {
     end(1,5,9)
  } 
  
  
  
  
  
else if (spery[1] == spery[4] && spery[4] == spery[7] && spery[7] != '') {
     end(1,4,7)
  }  
  
  
else if (spery[2] == spery[5] && spery[5] == spery[8] && spery[8] != '') {
     end(2,5,8)
  }  
  
  
else if (spery[3] == spery[6] && spery[6] == spery[9] && spery[6] != '') {
     end(3,6,9)
  }



else if (spery[3] == spery[5] && spery[5] == spery[7] && spery[7] != '') {
     end(3,5,7)
  }

  
  
  
  
}

 
function gems(id)
{
  let element = document.getElementById(id)
  if (turn === 'x' && element.innerHTML == '') 
  {
   element.innerHTML = 'x'
   turn = 'O';
   titl.innerHTML = 'O';
  }
  else if (turn === 'O' && element.innerHTML == ''){
    element.innerHTML = 'O'
    turn = 'x';
   titl.innerHTML = 'x';
  }
  
  wein()
  
}
