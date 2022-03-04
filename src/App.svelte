<script>
	import { Router } from 'svelte-routing';
	import AllRoute from '../src/route.svelte';

	export let url = '';

</script>

<Router {url}>
	<AllRoute />
</Router>