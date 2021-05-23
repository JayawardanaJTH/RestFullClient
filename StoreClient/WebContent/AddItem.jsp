<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Add Item</title>

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

<!-- jQuery library -->
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<!-- Popper JS -->
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

<!-- Latest compiled JavaScript -->
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

<link rel="stylesheet"
	href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
	integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
	crossorigin="anonymous">

<script src="Components/jquery-3.5.0.min.js"></script>
<script src="Components/Item.js"></script>

</head>
<body>


	<main class="content-wrapper">
		<div class="container-fluid">
			<section class="mt-2">
				<div class="pl-5 pr-5">
					<h2 class="mb-3">Add Item Details</h2>
					<form class="row g-3 needs-validation" id="ITEM" name="formItem"
						novalidate>
						<input hidden type="text" class="form-control" id="itemCode"
							name="itemCode">
						<div class="col-md-12 mb-3">
							<label for="validationCustom03" class="form-label">Select
								Item Category</label> <select class="form-select form-control"
								id="item_category" name="item_category"
								aria-label="Default select example">
								<option selected>Select Item Category</option>
								<option value="Art">Art</option>
								<option value="Technology">Technology</option>
								<option value="Design">Design And Tech</option>
								<option value="Game">Game</option>
								<option value="Music">Music</option>
								<option value="Food">Food</option>
								<option value="Films">Films</option>
							</select>
						</div>
						<div class="col-md-6 mb-3">
							<label for="validationCustom01" class="form-label">Item
								Name</label> <input type="text" class="form-control" id="item_name"
								name="item_name" placeholder="Item Name">
						</div>
						<div class="col-md-6 mb-3">
							<label for="validationCustom02" class="form-label">Item
								Description</label> <input type="text" class="form-control"
								id="item_des" name="item_des" placeholder="Short Description">
						</div>
						<div class="col-md-6 mb-3">
							<label for="validationCustomUsername" class="form-label">Item Price</label>
							<input type="number" class="form-control" id="price" name="price"
								aria-describedby="inputGroupPrepend">
						</div>
						<div class="col-md-6 mb-3">
							<label for="validationCustomUsername" class="form-label">Date</label>
							<input type="date" class="form-control" id="date" name="date"
								aria-describedby="inputGroupPrepend">
						</div>					

						<div class="mt-3 ml-3">
							<div id="alertSuccess" class="alert alert-success"></div>
							<div id="alertError" class="alert alert-danger"></div>
						</div>


						<div class="col-12 mt-3 mb-5 d-flex justify-content-end">
							<button class="btn btn-primary mr-3" id="save_Item"
								type="button">Save Item</button>
								
							<button style="display: none;" class="btn btn-primary mr-3" id="update_Item"
								type="button">Update Item</button>
								
							<button class="btn btn-warning" id="clear" type="button">clear</button>

							
						</div>
					</form>

				</div>
			</section>
		</div>

		<div class="ml-5">
			<h2 class="mb-3 ml-3">All Item Details</h2>
		</div>
		<div class="col-12 mb-5 pl-5 pr-5" id="ItemGrid">
			
		</div>

	</main>



	<!-- jQuery library -->
	<script
		src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

	<!-- Popper JS -->
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

	<!-- Latest compiled JavaScript -->
	<script
		src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

	<script type="text/javascript">
		$(document).ready(function() {
			
			loadTable();

			$('.nav-link-collapse').on('click', function() {
				$('.nav-link-collapse').not(this).removeClass('nav-link-show');
				$(this).toggleClass('nav-link-show');
			});

		});
		
		function click_update(){
			$('#save_Item').hide();
			$('#update_Item').show();
		}
		
	</script>

</body>
</html>