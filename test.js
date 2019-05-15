function oninputText() {
  let inputText = document.getElementById('make_wave').value;
  let outputStr = "";
  let nowPX = 0;
  let numberOf = 0;
  let whithoutSpace = inputText.replace(/\s/g, '').length - 1;
  
  for (let i = 0; i<inputText.length; i++){
    
    if(inputText[i] == " "){
      outputStr += `<span>${inputText[i]}</span>`;
      continue;
    }
   
    if(numberOf == 0) { 
      nowPX = 10; 
    }else if((numberOf-1) < (whithoutSpace / 2)){ 
   // Для более красивой волны, пропускаем увеличение текста если это нечет. 
    whithoutSpace % 2 !== 0 && numberOf == (Math.round(whithoutSpace / 2)) ?  nowPX +=0 : nowPX += 5;
    } else{ 
     nowPX -= 5;
    }
 numberOf++;
 outputStr += `<span style="font-size:${nowPX}px">${inputText[i]}</span>`;
  
  }
 console.log(outputStr);
 document.querySelector('.result').innerHTML = outputStr;
}
