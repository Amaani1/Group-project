function validation(){
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  var text;

  error_message.style.padding = "10px";

  if(email.indexOf("@")== -1 || email.length < 6){
    text = "Please Enter A Valid Email";
    error_message.innerHTML = text;
    return false;
  }

  if(message.length <= 75){
    text = "Please Enter More Than 75 Characters";
    error_message.innerHTML = text;
    return false;
  }
alert("Form Submitted Successfully!");
reset();
  return true;
}
