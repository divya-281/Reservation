function validateFirstName()
{
	var fName=document.getElementById("firstName").value;
	var re1=/^[a-zA-Z\s\'\-]{2,15}$/;
	if(re1.test(fName))
	{
		document.getElementById("firstNamePrompt").style.color="Green";
		document.getElementById("firstNamePrompt").innerHTML="<strong>valid</strong>";
		return true;
	}
	else{
		document.getElementById("firstNamePrompt").style.color="red";
		document.getElementById("firstNamePrompt").innerHTML="<strong>Enter 2 to 15 Characters</strong>";
		return false;
}}
function validateLastName()
{
	var lName=document.getElementById("lastName").value;
	var re2=/^[a-zA-Z\s\'\-']{2,25}$/;
	if(re2.test(lName))
	{
		document.getElementById("lastNamePrompt").style.color="green";
		document.getElementById("lastNamePrompt").innerHTML="<strong>valid</strong>";
		return true;
	}
	else{
		document.getElementById("lastNamePrompt").style.color="red";
		document.getElementById("lastNamePrompt").innerHTML="<strong>Enter 2 to 25 Characters</strong>";
		return false;
}}
function validatePhoneNumber()
{
	var phoneNumber=document.getElementById("phone").value;
	var re3=/^\d{3}-\d{3}-\d{4}$/;
	if(re3.test(phoneNumber)){
		document.getElementById("phonePrompt").style.color="green";
		document.getElementById("phonePrompt").innerHTML="<strong>valid</strong>";
		return (true);
	}
	else{
		document.getElementById("phonePrompt").style.color="red";
		document.getElementById("phonePrompt").innerHTML="<strong> Use xxx-xxx-xxxx Format </strong>";
		return (false);
	}
}
function validatefromDate()
{
	var valueDate = document.getElementById("fromdate").value;
	if(!Date.parse(valueDate))
	{
		document.getElementById("fromPrompt").style.color="red";
		document.getElementById("fromPrompt").innerHTML="<strong> Invalid </strong>";		
		return false;
	}	
	else
	{
		document.getElementById("fromPrompt").style.color="green";
		document.getElementById("fromPrompt").innerHTML="<strong>valid</strong>";
		return (true);
	}
}
function validatetoDate()
{
	var valueDate2 = document.getElementById("todate").value;
	if(!Date.parse(valueDate2))
	{
		document.getElementById("toPrompt").style.color="red";
		document.getElementById("toPrompt").innerHTML="<strong> Invalid </strong>";		
		return false;
	}
	else{document.getElementById("toPrompt").style.color="green";
		document.getElementById("toPrompt").innerHTML="<strong>valid </strong>";
		return (true);
		
	}
}
var radios;
function Radiobutton()
{
   var radio= document.getElementsByName("food");
   for(var i=0;i<radio.length;i++){
  if(radio[i].checked){
   radios=radio[i].value;}}
   return radios;
}
var addcharge=0;
function checkBox()
{
	var count=0;
   var add= document.getElementsByName("facility");
   for(var i=0;i<add.length;i++){
  if(add[i].checked){
   count++;}}
    addcharge=50*count;
}


function display()
{
	
	var firstName=document.getElementById("firstName").value;
	var lastName=document.getElementById("lastName").value;
	var userName=firstName +" "+lastName;
	var phone=document.getElementById("phone").value;
	var room=document.getElementById("room").value;
	var fdate=document.getElementById("fromdate").value;
	var tdate=document.getElementById("todate").value;	
	var startDate = Date.parse(fdate);
	var endDate = Date.parse(tdate);
	var timeDiff = endDate - startDate;
	var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
	var amount=room*daysDiff*100;
	document.getElementById("orderConfirm").innerHTML="<h2>Reservation for:</h2>";
	document.getElementById("orderConfirm").innerHTML+="<p1>"+ userName.toUpperCase()+"</br>"+phone+" </p1><br>";
	document.getElementById("orderConfirm").innerHTML+="<p1>Complimentary Meal: " +radios+"</p1><br>";
	document.getElementById("orderConfirm").innerHTML+="<p1>Number of Rooms: "+room+"<p1><br>";
	document.getElementById("orderConfirm").innerHTML+="<p1>From: "+fdate+"</p1><br>";
	document.getElementById("orderConfirm").innerHTML+="<p1>To: "+tdate+"</p1><br>";
	document.getElementById("orderConfirm").innerHTML+="<p1>Number of Days: "+daysDiff+"</p1><br>";
	document.getElementById("orderConfirm").innerHTML+="<p1>Facility Charges: Rs. "+addcharge+"<p1><br>";
	document.getElementById("orderConfirm").innerHTML+="<p1>Room Charges: Rs."+amount+"<p1><br>";
	document.getElementById("orderConfirm").innerHTML+="<p1>Total Charges: Rs."+(amount+addcharge)+"<p1><br>";
	}

	