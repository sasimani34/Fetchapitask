 /*................signup form.....................*/
 const form = document.querySelector('#form')
 const username = document.querySelector('#username');
 const email = document.querySelector('#email');
 const password = document.querySelector('#password');
 const cpassword = document.querySelector('#cpassword');
 
 form.addEventListener('submit',(event)=>{
     
     
         event.preventDefault()
         validateInputs()
         
     
 })
 
 function validateInputs(){
     const usernameVal = username.value.trim()
     const emailVal = email.value.trim()
     const passwordVal = password.value.trim()
     const cpasswordVal = cpassword.value.trim()
     let success = true
 
     if(usernameVal===''){
         success=false;
         setError(username,'Username is required')
     }
     else{
         localStorage.setItem("username", usernameVal);
         setSuccess(username)
     }
 
     if(emailVal===''){
         success = false;
         setError(email,'Email is required')
     }
     else if(!validateEmail(emailVal)){
         success = false;
         setError(email,'Please enter a valid email')
     }
     else{
         setSuccess(email)
     }
 
     if(passwordVal === ''){
         success= false;
         setError(password,'Password is required')
     }
     else if(passwordVal.length<8){
         success = false;
         setError(password,'Password must be atleast 8 characters long')
     }
     else{
         
         setSuccess(password)
     }
 
     if(cpasswordVal === ''){
         success = false;
         setError(cpassword,'Confirm password is required')
     }
     else if(cpasswordVal!==passwordVal){
         success = false;
         setError(cpassword,'Password does not match')
     }
     else{
         localStorage.setItem("password", cpasswordVal);
         setSuccess(cpassword)
         alert("Registered Successfully!");
         window.location.href = "../Login/login.html";
     }
 
     return success;
 
 }
 
 function setError(element,message){
     const inputGroup = element.parentElement;
     const errorElement = inputGroup.querySelector('.error')
     console.log(errorElement)
     errorElement.innerText = message;
     inputGroup.classList.add('error')
     inputGroup.classList.remove('success')
 }
 
 function setSuccess(element){
     const inputGroup = element.parentElement;
     const errorElement = inputGroup.querySelector('.error')
 
     errorElement.innerText = '';
     inputGroup.classList.add('success')
     inputGroup.classList.remove('error')
 }
 
 const validateEmail = (email) => {
     return String(email)
       .toLowerCase()
       .match(
         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
       );
   };
 