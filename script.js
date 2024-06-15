//Login box function email and password validation//

function login(){
    var mail=document.getElementById("e-name")
    var password=document.getElementById("pass")
    var ivmsg=document.getElementById("email-invalid") //if else if for checking multiple email and password//
    
    if(mail.value=="alex.johnson@example.com"&&password.value=="password123"){
        
    }else if(mail.value=="bella.smith@example.com"&&password.value=="mypassword"){
    
    }else if(mail.value=="charlie.davis@example.com"&&password.value=="charlie123"){
    
    }else if(mail.value=="dana.lee@example.com"&&password.value=="dana2023"){
    
    }else if(mail.value=="evan.wright@example.com"&&password.value=="wright1234"){
        true;
    }
    else{
        ivmsg.style.display="block";
        return false;
        
    }
    }
    
    //Error page display if the email and password does not match to given data//
    
    
    function page(){
        document.getElementById("error.page").style.display="block";
        document.getElementById("login.page").style.display="none";
    }
    
    //function tha return to the signin page from reset password page//
    
    
    function returnsignin(){
        document.getElementById("error.page").style.display="none";
        document.getElementById("login.page").style.display="block";
    }
    
    //function that opens the side navbar based screen visibility//
    function sideiconfunc(){
        document.getElementById("sidei").style.display="block"
        document.getElementById("closebtn").style.display="block"
        document.getElementById("checkbox").style.display="none"
    }
    
    //function that closes the side navbar based screen visibility//
    
    
    function closefunc(){
        document.getElementById("sidei").style.display="none"
        document.getElementById("checkbox").style.display="block"
        document.getElementById("closebtn").style.display="none"
    }
    
    //the reset mail validate function//
    
    function resetsubmit(){
        var resetmail=document.getElementById("reset-mailid");
        var resetinvalid=document.getElementById("resetaddress")
    
        if(resetmail.value=="alex.johnson@example.com" ){
            
        }else if(resetmail.value=="bella.smith@example.com"){
            
        }else if(resetmail.value=="charlie.davis@example.com"){
            
        }else if(resetmail.value=="dana.lee@example.com"){
            
        }else if(resetmail.value=="evan.wright@example.com"){
            true;
        }
        else{
            resetinvalid.style.display="block"
          return false;
            
        }
    }