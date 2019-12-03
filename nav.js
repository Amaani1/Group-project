function validation() {

  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");

  var text;


  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Please Enter valid Email";
    error_message.style.padding = "10px";
    error_message.innerHTML = text;
    return false;
  }

  if (message.length <= 15) {
    text = "Please Enter More Than 15 Characters";
    error_message.style.padding = "10px";
    error_message.innerHTML = text;
    return false;
  }

  alert("Message Sent Successfully!");
  document.getElementById('myform').reset();
  error_message.style.padding = "0px";
  error_message.innerHTML = "";
  return true;
}
