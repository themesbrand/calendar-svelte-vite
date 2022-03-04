<script>
	import Navbar from './Navbar.svelte';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import Rightbar from "../../Components/Rightbar.svelte"

    let open = false;

</script>
<div id="layout-wrapper">
	<Header />
	<Navbar />
	<div class="main-content" id="maincontent">
		<slot />
	</div>
	<Footer />

	<Rightbar layout="vertical"/>

</div>