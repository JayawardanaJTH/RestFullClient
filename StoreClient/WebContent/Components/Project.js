//hide alert
$(document).ready(function() {

	$("#alertSuccess").hide();
	$("#alertError").hide();
	$("#projectID").val("");
	$("#PROJECT")[0].reset();
});

$(document).on("click", "#clear", function(event) {

	$("#PROJECT")[0].reset();
	$("#alertError").hide();
});

$(document).on("click", "#save_project", function(event) {

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

	var type = ($("#projectID").val() == "") ? "POST" : "PUT";

	$.ajax({
		url: "ProjectAPI",
		type: type,
		data: $("#PROJECT").serialize(),
		dataType: "text",
		complete: function(response, status) {
			onItemSaveComplete(response.responseText, status);

			$("#alertSuccess").fadeTo(2000, 500).slideUp(500, function() {
				$("#alertSuccess").slideUp(500);
			});
		}
	});

});

function onItemSaveComplete(response, status) {

	if (status == "success") {

		//console.log(response);
		var resultSet = JSON.parse(response);

		if (resultSet.status.trim() == "success") {

			$("#alertSuccess").text("Project Details Successfully saved.");
			$("#alertSuccess").show();
			$("#ProjectGrid").html(resultSet.data);

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

	$("#projectID").val("");
	$("#PROJECT")[0].reset();
}

$(document).on("click", ".btnUpdate", function(event) {
	$("#hidProjectIDSave").val($(this).data("projectID"));
	$("#projectID").val($(this).closest("tr").find('td:eq(0)').text());
	$("#project_category").val($(this).closest("tr").find('td:eq(1)').text());
	$("#project_name").val($(this).closest("tr").find('td:eq(2)').text());
	$("#short_des").val($(this).closest("tr").find('td:eq(3)').text());
	$("#price").val($(this).closest("tr").find('td:eq(4)').text());
	$("#date").val($(this).closest("tr").find('td:eq(5)').text());
	$("#project_goal").val($(this).closest("tr").find('td:eq(6)').text());
	$("#long_des").val($(this).closest("tr").find('td:eq(7)').text());

});

$(document).on("click", ".btnRemove", function(event) {


	$.ajax({
		url: "ProjectAPI",
		type: "DELETE",
		data: "projectID=" + event.target.value,
		dataType: "text",
		complete: function(response, status) {
			onItemDeleteComplete(response.responseText, status);
			//window.location.reload(true);
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

			$("#alertSuccess").text("Project Details Successfully deleted.");
			$("#alertSuccess").show();
			$("#ProjectGrid").html(resultSet.data);

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

	if ($("#project_category").val().trim() == "Select Project Category") {
		return "Select Project Category.";
	}

	if ($("#project_name").val().trim() == "") {
		return "Enter Project name.";
	}

	if ($("#short_des").val().trim() == "") {
		return "Enter Short Description.";
	}

	if ($("#price").val().trim() == "") {
		return "Enter Price.";
	}

	if ($("#date").val().trim() == "") {
		return "Enter Date.";
	}

	if ($("#long_des").val() == "") {
		return "Enter Long Description.";
	}

	if ($("#project_goal").val().trim() == "") {
		return "Enter Project Goal.";
	}

	if ($("#long_des").val() == "") {
		return "Enter Long Description.";
	}
	return true;
}