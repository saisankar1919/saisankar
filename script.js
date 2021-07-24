var username,phone,email,comment;


function nameValidate(){
	var namevalue=$('#name').val()
	var letters = /^[-a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/
	if(namevalue==""){
		$("#name-error").html("Field is required")
        $('#name').css({'border':'solid 1px red'})
		username= false
	}
	
     
        else if(namevalue.match(letters)){
            $('#name-error').html("")
            $('#name').css({'border':'solid 1px white'})
            username=true
        }
        
        }

function phoneValidate(){
	var namevalue=$('#phone').val()
	var letters = /^\d+$/;
	if(namevalue=="" || namevalue==" "){
		$('#phone-error').html("Field is required")
        $('#phone').css({'border':'solid 1px red'})
		phone= false
	}
	else if(namevalue.match(letters) && ( namevalue.length == 10))
	{
    console.log("jndf")
    	$("#phone-error").html("")
        $('#phone').css({'border':'solid 1px white'})
        phone= true
	}
  else if(namevalue.length<10)
        {
            if(namevalue.match(letters))
            {
              $("#phone-error").html("Invalid phone number!!")
              $('#phone').css({'border':'solid 1px white'})
              phone= false;

            }
            
         }
    else if(namevalue.length>10)
    {
        if(namevalue.match(letters))
        {
          $("#phone-error").html("Only ten numbers allowed")
          $('#phone').css({'border':'solid 1px red'})
          phone=false;
        }
        else
        {
          $("#phone-error").html("Use only numbers")
          $('#phone').css({'border':'solid 1px red'})
          phone= false;
        }
    
    }
    else{
      $("#phone-error").html("Invalid number")
      $('#phone').css({'border':'solid 1px red'})
      phone=false;
    }
  }

function emailValidate(){
    var emailvalue =$('#email').val()
    var letters = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    if(emailvalue==""){
        $('#email-error').html("Filed is required")
        $('#email').css({'border':'solid 1px red'})
        email=false;
    }
    else if(emailvalue==" "){
		$('#email-error').html("Do not enter space as first character")
        $('#email').css({'border':'solid 1px red'})
		username=false
	}
    else if(emailvalue.match(letters)){
        $('#email-error').html("")
        $('#email').css({'border':'solid 1px white'})
        email=true;
    }
    else{
        $('#email-error').html("Invalid Entry")
        $('#email').css({'border':'solid 1px red'})
        email=false;
    }

}

$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});


    $("#submit-form").submit((e)=>{
        e.preventDefault()
        if (username==true && email==true && phone==true) {
            
        
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbz_Sb73EpBqH_Rwe-cuS_VAkfOrcN_vrwaGgPlutl_uj1fgEFgs_RuvXaMalKQkpqgf7A/exec",
            data:$("#submit-form").serialize(),
            method:"post",
            success:function (response){
                swal({title:"Good job!", text:"Your message send successfully", icon:"success"},function(){
                    window.location.reload() 
                  });  
                //window.location.reload()
                //window.location.href="https://google.com"
            },
            error:function (err){
                alert("Something Error")

            }
        })
    }else{
      nameValidate()
      phoneValidate()
      emailValidate()
      commentValidate()

    }
    })
