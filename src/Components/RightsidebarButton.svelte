<script>
	export let open = false;
</script>

<button type="button" class="btn header-item noti-icon right-bar-toggle waves-effect" class:open on:click={() => (open = !open)}>
    <i class="bx bx-cog bx-spin"></i>
</button>
