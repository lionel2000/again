$(
     $('#toggle_messages').click(function(){
    	 var value = $(this).attr("value");
    	 $('#message').toggle('fast');
    	 if (value == '隐藏'){
    		 $(this).attr('value','显示');
    	 }else{
    		 $(this).attr('value','隐藏');
    	 }
     })	
);