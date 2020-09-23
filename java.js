function formsubmit(form) {
  var elem = document.getElementById("myBar");
  var width = 100;
  var time = 10;
  var id = setInterval(frame, 10);
  function frame(){
    if (width <= 0){
      clearInterval(id);
      form.submit();
      alert("Form Submitted successfully");
    }
    else{
      width-=.1;
      elem.style.width = (width) + "%";
      elem.innerHTML = parseInt(width/10)+ 's...';
    }
  }
    setTimeout(function() {

    }, 3000); // 3 seconds
    return false;
}
function validate(form){
  email = document.getElementById("Email").value;
  myPass = document.getElementById("pwd").value;

  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  valid_email = 1;
  valid_pass = 1;

  if(!email.match(mailformat)){
    document.getElementById('Email').value = '';
    document.getElementById('Email').placeholder='Enter valid email address';//check for valid email
    document.getElementById('Email').style.borderColor="red";
    valid_email = 0;
  }
  else{
    document.getElementById('Email').style.borderColor="green";
    valid_email = 1;
  }

  if(myPass.length<5||myPass ==""){
    document.getElementById('pwd').value = '';
    document.getElementById('pwd').placeholder='Password should have atleast 5 characters';// check for valid password
    document.getElementById('pwd').style.borderColor="red";
    valid_pass = 0;
  }
  else{
    document.getElementById('pwd').style.borderColor="green";
    valid_pass = 1;
  }

  if(valid_email&&valid_pass){
    document.getElementById("Submit").style.display = 'none';
    document.getElementById("myProgress").style.display = 'block';//if both condtion validates then wait 10s.
    formsubmit(form);
    return false;
  }
  else{
    return false;
  }
}
