
 


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







 


//free trial request
function freeTrial(){

var ft_Name = document.getElementById("ft_Name").value
var ft_email = document.getElementById("ft_email").value
var ft_Server = document.getElementById("ft_Server").value
var ft_Station_Name = document.getElementById("ft_Station_Name").value
var ft_Station_description = document.getElementById("ft_Station_description").value
 
    if (
      ft_Name.length<3 || 
      ft_Station_Name.length<3 ||
      ft_Station_description.length<3
      ) {

        alert('Please fill in all details')
      return false
    }

  var emailID = ft_email
  atpos = emailID.indexOf("@")
  dotpos = emailID.lastIndexOf(".")
    if (atpos < 1 || ( dotpos - atpos < 2 ))
    {
        alert("Please enter correct email")
        return false
    }






  else {

    const scriptTrialFYNradio = 'https://script.google.com/macros/s/AKfycbwL-8bwYl58YefAp9-9baOGTYQWHlhUbuqVVbj_dchQ-JMP8-RW/exec?action=trial'
    var userRequestString = scriptTrialFYNradio+
                              '&ft_Name='+ft_Name+
                              '&ft_email='+ft_email+
                              '&ft_Server='+ft_Server+
                              '&ft_Station_Name='+ft_Station_Name+
                              '&ft_Station_description='+ft_Station_description


    var xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = function() { 
          if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
              var res = JSON.parse(this.responseText)

            if (res == 'Application Received') {
              sessionStorage.setItem("ApplicantName", ft_Name)
              alert(
                'Dear ' + ft_Name + ', \n Your requst has been sent. We will use your email to contact you' 

                )
          }
          
      }
      xmlHttp.open("GET", userRequestString, true); // true for asynchronous 
      xmlHttp.send();
    
  }



}








//submit station

function submitStation(){


var sb_Name = document.getElementById("sb_Name").value
var sb_email = document.getElementById("sb_email").value
var sb_role = document.getElementById("sb_role").value
var sb_station_name = document.getElementById("sb_station_name").value
var sb_logo = document.getElementById("sb_logo").value
var sb_website = document.getElementById("sb_website").value
var sb_fb = document.getElementById("sb_tw").value
var sb_tw = document.getElementById("sb_tw").value
var sb_stream_link = document.getElementById("sb_stream_link").value
var sb_station_description = document.getElementById("sb_station_description").value

    if (
      sb_Name.length<3 || 
      sb_station_name.length<3 ||
      sb_logo.length<3 ||
      sb_website.length<3 ||
      sb_fb.length<3 ||
      sb_tw.length<3 ||
      sb_stream_link.length<3 ||
      sb_station_description.length<3
      ) {

        alert('Please fill in all details')
      return false
    }

  var emailID = sb_email
  atpos = emailID.indexOf("@")
  dotpos = emailID.lastIndexOf(".")
    if (atpos < 1 || ( dotpos - atpos < 2 ))
    {
        alert("Please enter correct email")
        return false
    }






  else {

    const scriptSubmitStation = 'https://script.google.com/macros/s/AKfycbwL-8bwYl58YefAp9-9baOGTYQWHlhUbuqVVbj_dchQ-JMP8-RW/exec?action=submit_station'
    var sendUserRequest = scriptSubmitStation+
                              '&sb_Name='+sb_Name+
                              '&sb_email='+sb_email+
                              '&sb_role='+sb_role+
                              '&sb_station_name='+sb_station_name+
                              '&sb_logo='+sb_logo+
                              '&sb_website='+sb_website+
                              '&sb_fb='+sb_fb+
                              '&sb_tw='+sb_tw+
                              '&sb_stream_link='+sb_stream_link+
                              '&sb_station_description='+sb_station_description


    var xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = function() { 
          if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
              var res = JSON.parse(this.responseText)

            if (res == 'Submission Received') {
              sessionStorage.setItem("ApplicantName", sb_Name)
              alert(
                'Dear ' + sb_Name + ', \n Your submission has been sent. The information you provided will be verified before being posted on our site' 

                )
          }
          
      }
      xmlHttp.open("GET", sendUserRequest, true); // true for asynchronous 
      xmlHttp.send();
    
  }



}
