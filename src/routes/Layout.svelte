<script>
	import VerticalLayout from '../routes/VerticalLayout/Index.svelte';

	let component = VerticalLayout;

</script>

<svelte:component this={component}>
	<slot />
</svelte:component>