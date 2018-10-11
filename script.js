function step1(){
  if(password.value == confirmPassword.value){
    password.style.border = 'solid green'
    confirmPassword.style.border = 'solid green'
  }else{
    password.style.border = 'solid red'
    confirmPassword.style.border = 'solid red'
  }
}
