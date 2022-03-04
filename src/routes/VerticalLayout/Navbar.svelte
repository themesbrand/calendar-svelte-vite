<script>
	import { Link } from 'svelte-routing';

</script>

<div class="vertical-menu">
	<div data-simplebar class="h-100">
		<!--- Sidemenu -->
		<div id="sidebar-menu">
			<!-- Left Menu Start -->
			<ul class="metismenu list-unstyled" id="side-menu">
				<li class="menu-title">Menu</li>

				<li>
					<Link to={'#'} class="waves-effect">
						<i class="bx bxs-dashboard" />
						<span>Calendar</span>
					</Link>
				</li>
			</ul>
		</div>
		<!-- Sidebar -->
	</div>
</div>
<!-- Left Sidebar End -->