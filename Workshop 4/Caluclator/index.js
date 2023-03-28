let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (hi)=>{
    if(hi.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(hi.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else{ 
    console.log(hi.target)
    string = string + hi.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})