<script>
	import Layout from './routes/Layout.svelte';

	import { Route } from 'svelte-routing';

	// Dashboard
	import Calendar from './pages/Calendar/index.svelte';

</script>

<Route path="/">
	<Layout>
		<svelte:component this={Calendar} isTitle={false} />
	</Layout>
</Route>