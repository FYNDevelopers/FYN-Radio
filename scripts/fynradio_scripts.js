
 


//Send message
function reachUs(){

var Name = document.getElementById("Name").value
var email = document.getElementById("email").value
var Subject = document.getElementById("Subject").value
var Message = document.getElementById("Message").value
 
    if (
      Name.length<3 || 
      Subject.length<3 ||
      Message.length<3
      ) {

      	alert('Please fill in all details')
  		return false
    }

	var emailID = email
	atpos = emailID.indexOf("@")
	dotpos = emailID.lastIndexOf(".")
		if (atpos < 1 || ( dotpos - atpos < 2 ))
		{
		    alert("Please enter correct email")
		    return false
		}






  else {
    const scriptReacFYNradio = 'https://script.google.com/macros/s/AKfycbwmhtaz7kLsT4bciXuh8-MFABPLWyu1w3r0_xg0Ov1_VATOpLc/exec?action=message'
    var userMessageString = scriptReacFYNradio+
                              '&Name='+Name+
                              '&email='+email+
                              '&Subject='+Subject+
                              '&Message='+Message


    var xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = function() { 
          if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
              var res = JSON.parse(this.responseText)

            if (res == 'Message Received') {
              sessionStorage.setItem("ApplicantName", Name)
              alert(
              	'Dear ' + Name + ', \n Your message has been sent. We will use your email to contact you' 

              	)
          }
          
      }
      xmlHttp.open("GET", userMessageString, true); // true for asynchronous 
      xmlHttp.send();
    
  }



}


