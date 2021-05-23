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
					
		        	 window.location.replace("http://www.w3schools.com");
				}
				else{
					window.location.replace("http://www.w3schools.com");
				}

        },
        error : function(jqXHR, textStatus, errorThrown) {
        		$("#alertError").text("User not found");
				$("#alertError").show();
        },
        timeout: 120000,
    });
};

function deleteBook(id){
	jQuery.ajax({
		url: "http://localhost:8080/book_service/rest/books/" + id,
		type: "DELETE",
		contentType: "application/json",  
        dataType:'json',
		success: function(data, textStatus, errorThrown){
			 $("#title").text("Deleted");
			 $("#price").text("");
		alert("Book deleted")
				loadTable();
		},
		error : function(jqXHR, textStatus, errorThrown) {
        		$("#title").text("Sorry! Book not found!");
        		$("#price").text("");
        },
	});
};

function addBook(){
	var id = $("#uID").val();
	
	if(id == ""){
		var book = new Object();
		book.title = $("#uTitle").val();
		book.price = $("#uPrice").val();
		
		var obj = JSON.stringify(book);
		jQuery.ajax({
			url: "http://localhost:8080/book_service/rest/books/",
			type: "POST",
			contentType: "application/json",  
	        dataType:'json',
			data: obj,
			success: function(data, textStatus, errorThrown){
				 $("#title").text("Book added");
				 $("#price").text("");
			alert("New book added")
				    $("#uTitle").val("");
	        	    $("#uPrice").val("");
					loadTable();
			},
			error : function(jqXHR, textStatus, errorThrown) {
	        		$("#title").text("Sorry! Book not Added!");
	        		$("#price").text("");
	        },
		});
	}else{

			var book = new Object();
			book.title = $("#uTitle").val();
			book.price = $("#uPrice").val();
			book.id = $("#uID").val();
			
			var obj = JSON.stringify(book);
			jQuery.ajax({
				url: "http://localhost:8080/book_service/rest/books/",
				type: "PUT",
				contentType: "application/json",  
		        dataType:'json',
				data: obj,
				success: function(data, textStatus, errorThrown){
					 $("#title").text("Book updated");
					 $("#price").text("");
				alert("Updated")
					$("#uTitle").val("");
	        	    $("#uPrice").val("");
				    $("#uID").val(null);
						loadTable();
				},
				error : function(jqXHR, textStatus, errorThrown) {
		        		$("#title").text("Sorry! Book not Updated!");
		        		$("#price").text("");
		        },
			});
	}
	
};

function updateBook(id){
	
	jQuery.ajax({
        url: "http://localhost:8080/book_service/rest/books/" + id,
        type: "GET",
        contentType: "application/json",  
        dataType:'json',
        success: function(data, textStatus, errorThrown) {
        	  $("#uTitle").val(data.title);
        	  $("#uPrice").val(data.price);
			  $("#uID").val(data.id);
        },
        error : function(jqXHR, textStatus, errorThrown) {
        		$("#title").text("Sorry! Update failed");
        		$("#price").text("");
        },
        timeout: 120000,
	});
	
};

function loadTable(){
	
	
	jQuery.ajax({
		url: "http://localhost:8080/book_service/rest/books",
		type: "GET",
        dataType:'json',
		success: function(data){
			var table = $("#table tbody");
			table.empty();
			
			 $(data).each(function(index, element){
				table.append('<tr><td>'+element.id+'</td><td>'+element.title+'</td><td>'+element.price+'</td><td><Button onclick="updateBook('+element.id+')">Update</Button>|<Button onclick="deleteBook('+element.id+')" id='+element.id+'>Delete</Button></td></tr>');
			})
		},
		error : function(jqXHR, textStatus, errorThrown) {
        		$("#title").text("Cannot load table");
        		$("#price").text("");
        },
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