/**
 * 
 */
$(document).ready(function() {

	$("#alertSuccess").hide();
	$("#alertError").hide();
});


function getLogin(){
	
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();

	// Form validation-------------------
	var status = validateItemForm();
	if (status != true) {
		$("#alertError").text(status);
		$("#alertError").show();
		return;
	}
	
	var username = $("#uName").val();
	var password = $("#password").val();
	
	jQuery.ajax({
		xhrFields: {
    	        withCredentials: true
    	    },
    	    beforeSend: function (xhr) {
    	        xhr.setRequestHeader('Authorization', 'Basic ' + btoa(username+":"+password));
    	    },
        url: "http://localhost:8080/StoreServices/rest/UserService",
        type: "GET",
        contentType: "application/json",  
        dataType:'json',
        success: function(data, textStatus, errorThrown) {
            //here is your json.
              // process it
				if(data.type == "seller"){
					
		        	 window.location.replace("AddItem.jsp");
				}
				else{
					window.location.replace("views/index.html");
				}

        },
        error : function(jqXHR, textStatus, errorThrown) {
        		$("#alertError").text("User not found");
				$("#alertError").show();
        },
        timeout: 120000,
    });
};

function validateItemForm() {

	if ($("#uName").val().trim() == "") {
		return "Enter User Name.";
	}

	if ($("#password").val().trim() == "") {
		return "Enter Password.";
	}

	return true;
}