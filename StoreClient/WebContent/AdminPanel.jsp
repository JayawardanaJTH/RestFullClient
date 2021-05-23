<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Admin Panel</title>

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

<style type="text/css">
html {
	position: relative;
	min-height: 100%;
}
body {
	padding-top: 4.5rem;
	margin-bottom: 4.5rem;
}
.footer {
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 3.5rem;
	line-height: 3.5rem;
	background-color: #ccc;
}
.nav-link:hover {
	transition: all 0.4s;
}
.nav-link-collapse:after {
	float: right;
	content: '\f067';
	font-family: 'FontAwesome';
}
.nav-link-show:after {
	float: right;
	content: '\f068';
	font-family: 'FontAwesome';
}
.nav-item ul.nav-second-level {
	padding-left: 0;
}
.nav-item ul.nav-second-level>.nav-item {
	padding-left: 20px;
}
@media ( min-width : 992px) {
	.sidenav {
		position: absolute;
		top: 0;
		left: 0;
		width: 230px;
		height: calc(100vh - 3.5rem);
		margin-top: 3.5rem;
		background: #343a40;
		box-sizing: border-box;
		border-top: 1px solid rgba(0, 0, 0, 0.3);
	}
	.navbar-expand-lg .sidenav {
		flex-direction: column;
	}
	.content-wrapper {
		margin-left: 230px;
	}
	.footer {
		width: calc(100% - 230px);
		margin-left: 230px;
	}
}
</style>

</head>
<body style="background-color: #f0f0f0">

	<!-- Navbar-->
	<nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
		<a class="navbar-brand" href="#">GadgetBadget</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse"
			data-target="#navbarCollapse" aria-controls="navbarCollapse"
			aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarCollapse">
			<ul class="navbar-nav mr-auto sidenav" id="navAccordion">
				<li class="nav-item active ml-3"><a class="nav-link" href="AdminPanel.jsp">Home<span class="sr-only">(current)</span> </a></li>
				<!-- 				<li class="nav-item"><a class="nav-link" href="#">Item 1</a></li> -->
				<li class="nav-item ml-3"><a
					class="nav-link nav-link-collapse" href="#" id="hasSubItems"
					data-toggle="collapse" data-target="#collapseSubItems3"
					aria-controls="collapseSubItems3" aria-expanded="false">Project
						Details
				</a>
					<ul class="nav-second-level collapse" id="collapseSubItems3"
						data-parent="#navAccordion">
						<li style="list-style-type: none;" class="nav-item"><a class="nav-link" href="AddProject.jsp"> <span
								class="nav-link-text">Add Project</span>
						</a></li>
					</ul>
				</li>
				<li class="nav-item ml-3"><a class="nav-link" href="#">UserDetails</a></li>
				<li class="nav-item ml-3"><a class="nav-link" href="#">Order Details</a></li>
				<li class="nav-item ml-3"><a class="nav-link" href="#">Funder Details</a></li>
				<li class="nav-item ml-3"><a class="nav-link" href="#">Product Details</a></li>
		</div>
	</nav>
	<main class="content-wrapper">
		<div class="container-fluid">
			<section class="mt-3">
				<img style="background-repeat: no-repeat;" alt="" src="https://i.postimg.cc/GmwG7sGV/paf.png" width="100%" height="100%">
			</section>
		</div>
	</main>

	<footer class="footer bg-dark">
		<div class="container">
			<div class="text-center text-light">
				<span>Create by , <span style="color: #87CEEB;">PAF Team</span>
					2021
				</span>
			</div>
		</div>
	</footer>
	<!-- Navbar -->

	<!-- login modal -->

	<!-- Modal -->
	<div class="modal fade" id="exampleModal" tabindex="-1"
		aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Sign Up</h5>
					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">...</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary"
						data-dismiss="modal">Close</button>
					<button type="button" class="btn btn-primary">Save changes</button>
				</div>
			</div>
		</div>
	</div>


	<script type="text/javascript">
		$(document).ready(function() {
			$('.nav-link-collapse').on('click', function() {
				$('.nav-link-collapse').not(this).removeClass('nav-link-show');
				$(this).toggleClass('nav-link-show');
			});
		});
	</script>

</body>
</html>
</body>
</html>