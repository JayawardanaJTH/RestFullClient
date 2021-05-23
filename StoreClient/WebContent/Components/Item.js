//hide alert
$(document).ready(function() {

	$("#alertSuccess").hide();
	$("#alertError").hide();
	$("#itemCode").val("");
	$("#ITEM")[0].reset();
});

$(document).on("click", "#clear", function(event) {
	
	$("#ITEM")[0].reset();
	$("#alertError").hide();
	$('#save_Item').show();
	$('#update_Item').hide();
});

$(document).on("click", "#save_Item", function(event) {


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

	//var type = ($("#itemCode").val() == "") ? "POST" : "PUT";

	var item_category = document.getElementById('item_category').value;
	var item_name = document.getElementById('item_name').value;
	var short_des = document.getElementById('item_des').value;
	var price = document.getElementById('price').value;
	var date = document.getElementById('date').value;


	$.ajax({
		url: "http://localhost:8080/StoreClient/rest/Items/",
		type: "POST",
		contentType: "application/json",
		data: $("#ITEM").serialize(),
		dataType: "text",
		complete: function(response, status) {
			console.log(response);

			onItemSaveComplete(response.responseText, status);
loadTable();
			$("#alertSuccess").fadeTo(2000, 500).slideUp(500, function() {
				$("#alertSuccess").slideUp(500);
			});
		}
	});

});

$(document).on("click", "#update_Item", function(event) {

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

	$.ajax({
		url: "ItemAPI",
		method: "PUT",
		data: $("#ITEM").serialize(),
		dataType: "text",
		complete: function(response, status) {

			onItemSaveComplete(response.responseText, status);
loadTable();
			$("#alertSuccess").fadeTo(2000, 500).slideUp(500, function() {
				$("#alertSuccess").slideUp(500);
			});
		}
	});

	$('#update_Item').hide();
	$('#save_Item').show();

});


function onItemSaveComplete(response, status) {

	if (status == "success") {

		//console.log(response);
		var resultSet = JSON.parse(response);

		if (resultSet.status.trim() == "success") {

			$("#alertSuccess").text("Item Details Successfully saved.");
			$("#alertSuccess").show();
			$("#ItemGrid").html(resultSet.data);

		} else if (resultSet.status.trim() == "error") {

			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	}
	else if (status == "error") {

		$("#alertError").text("Error while saving.");
		$("#alertError").show();

	} else {

		$("#alertError").text("Unknown error while saving..");
		$("#alertError").show();
	}

	$("#itemCode").val("");
	$("#ITEM")[0].reset();
}

$(document).on("click", ".btnUpdate", function(event) {
	//$("#hidProjectIDSave").val($(this).data("itemCode"));
	$("#itemCode").val($(this).closest("tr").find('td:eq(0)').text());
	$("#item_category").val($(this).closest("tr").find('td:eq(1)').text());
	$("#item_name").val($(this).closest("tr").find('td:eq(2)').text());
	$("#item_des").val($(this).closest("tr").find('td:eq(3)').text());
	$("#price").val($(this).closest("tr").find('td:eq(4)').text());
	$("#date").val($(this).closest("tr").find('td:eq(5)').text());

});

$(document).on("click", ".btnRemove", function(event) {


	$.ajax({
		url: "ItemAPI",
		type: "DELETE",
		data: "itemCode=" + event.target.value,
		dataType: "text",
		complete: function(response, status) {
			onItemDeleteComplete(response.responseText, status);
			loadTable();
			$("#alertSuccess").fadeTo(2000, 500).slideUp(500, function() {
				$("#alertSuccess").slideUp(500);
			});

		}
	});
});

function onItemDeleteComplete(response, status) {

	if (status == "success") {

		var resultSet = JSON.parse(response);

		if (resultSet.status.trim() == "success") {

			$("#alertSuccess").text("Item Details Successfully deleted.");
			$("#alertSuccess").show();
			$("#ItemGrid").html(resultSet.data);

		} else if (resultSet.status.trim() == "error") {

			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}

	} else if (status == "error") {

		$("#alertError").text("Error while deleting.");
		$("#alertError").show();

	} else {

		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();
	}
}


function validateItemForm() {

	if ($("#item_category").val().trim() == "Select Item Category") {
		return "Select Item Category.";
	}

	if ($("#item_name").val().trim() == "") {
		return "Enter Item name.";
	}

	if ($("#item_des").val().trim() == "") {
		return "Enter Item Description.";
	}

	if ($("#price").val().trim() == "") {
		return "Enter Price.";
	}

	if ($("#date").val().trim() == "") {
		return "Enter Date.";
	}

	return true;
}

function loadTable() {


	jQuery.ajax({
		url: "http://localhost:8080/StoreClient/rest/Items/",
		type: "GET",
		dataType: 'json',
		complete: function(response, status) { 
			
			$('#ItemGrid').html(response.responseText);
		},
		error: function(request, error) {
			//alert("Request: " + JSON.stringify(request));
		}
	});
}

