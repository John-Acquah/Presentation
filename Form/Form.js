

  function FNameValidation(){
  	var Fname= document.getElementById("fname")
  	   var NT = /^[a-zA-Z\s\'\-]{2,15}$/;
  	if(NT.test(Fname.value)){
  		
   		document.getElementById("fnerror").innerHTML="<b>Valid</b>"
		 document.getElementById("fnerror").style.color="white"
 	 	fname.style.border ="0px"
 	 	document.getElementById("fnerror")
 	 	.style.visibility =("visible")
		  		return true;
	}
	else{
		 document.getElementById("fnerror").innerHTML="<b>Invalid</b>"
 	 	document.getElementById("fnerror").style.color="red"
 		fname.style.border ="solid 2px red";
 	 	document.getElementById("fnerror")
 		.style.visibility =("visible")
		return false;
	}
}

	function MiddleName(){
		var MN=/^[a-zA-Z]$/
		var Mid= document.getElementById("mname")

		if(!MN.test(Mid.value)){
			
			mname.style.border ="solid 2px red";
			return false
		}
		else{
			
			return true

		}




	}
  

  

   function LNameValidation(){
  	var Lname= document.getElementById("lname")
  	   var NT = /^[a-zA-Z\s\'\-]{2,15}$/;
  	if(NT.test(Lname.value)){
  		
   		document.getElementById("lnerror").innerHTML="<b>Valid</b>"
		 document.getElementById("lnerror").style.color="white"
 	 	lname.style.border ="0px"
 	 	document.getElementById("lnerror")
 	 	.style.visibility =("visible")
		  		return true;
	}
	else{
		document.getElementById("lnerror").innerHTML="<b>Invalid</b>"
 	 	document.getElementById("lnerror").style.color="red"
 		lname.style.border ="solid 2px red";
 	 	document.getElementById("lnerror")
 	   .style.visibility =("visible")
		return false;
	}
  

  }
   

  

    function Emailchk(){
    	 var emailck =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    	 var Email= document.getElementById("email1")

    	 if(!emailck.test(Email.value)){
    	 	
document.getElementById("emerror").innerHTML="<b>Invalid</b>"
 	  	document.getElementById("emerror").style.color="red"
 	 	email1.style.border ="solid 2px red";
 	  	document.getElementById("emerror")
 	    .style.visibility =("visible")
		 return false;

    	 }
    	 else{
     	 	
		

     	 	document.getElementById("emerror").innerHTML="<b>Valid</b>"
		  document.getElementById("emerror").style.color="white"
 	  	email1.style.border ="0px"
 	  	document.getElementById("emerror")
 	  	.style.visibility =("visible")
		   		return true;


    	 }




    }

     		function ConValidation(){

     			 var phoneno = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;
     			 var Num= document.getElementById("phonenumber")
     			 if(!phoneno.test(Num.value)){
     			 	document.getElementById("cnerror").innerHTML="Format<br> xxx-xxx-xxxx"
     			 	document.getElementById("cnerror").style.color="red"
 	 				phonenumber.style.border ="solid 2px red";
 	  				document.getElementById("cnerror")
 	   				 .style.visibility =("visible")
		 				return false;


     			 }
     			 else{

     	 		document.getElementById("cnerror").innerHTML="<b>Valid</b>"
		 		 document.getElementById("cnerror").style.color="white"
 	  			phonenumber.style.border ="0px"
 	  			document.getElementById("cnerror")
 	  			.style.visibility =("visible")
		   		return true;



     			 }
     		}






// function validateFN(){
// 	var fname= document.getElementById("fname")
	
// 	if(fname.value.trim()!="") {
// 		document.getElementById("fnerror").innerHTML="<b>Valid</b>"
// 		document.getElementById("fnerror").style.color="white"
// 		fname.style.border ="0px"
// 		document.getElementById("fnerror")
// 		.style.visibility =("visible")
		
// 		return true;
// 	}
// 	else{
// 		document.getElementById("fnerror").innerHTML="<b>Invalid</b>"
// 		document.getElementById("fnerror").style.color="red"
// 		fname.style.border ="solid 2px red";
// 		document.getElementById("fnerror")
// 		.style.visibility =("visible")
// 		return false;

// 	}

//     }
// function validateLN(){
// 	var lname= document.getElementById("lname")
// 	if(lname.value.trim()!="") {
// 		document.getElementById("lnerror").innerHTML="<b>Valid</b>"
// 		document.getElementById("lnerror").style.color="white"
// 		fname.style.border ="0px"
// 		document.getElementById("fnerror")
// 		.style.visibility =("visible")
		
// 		return true;
// 	}
// 	else{
// 		document.getElementById("lnerror").innerHTML="<b>Invalid</b>"
// 		document.getElementById("lnerror").style.color="red"
// 		fname.style.border ="solid 2px red";
// 		document.getElementById("lnerror")
// 		.style.visibility =("visible")
// 		return false;

// 	}

// }
		
//    