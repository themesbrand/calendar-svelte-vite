<script>
	import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'sveltestrap';

</script>

<Dropdown>
	<DropdownToggle tag="button" color="white">
		<img class="rounded-circle header-profile-user" src="assets/images/users/avatar-1.jpg" alt="Header Avatar" />
		<span class="d-none d-xl-inline-block ms-1"> profile </span>
		<i class="mdi mdi-chevron-down d-none d-xl-inline-block" />
	</DropdownToggle>

	<DropdownMenu>
		<h6 class="dropdown-header">welcome</h6>
		<DropdownItem href={'#'}
			><i class="mdi mdi-account-circle text-muted font-size-16 align-middle me-1" />
			<span class="align-middle"> admin </span>
		</DropdownItem>
		<DropdownItem href={'#'}
			><i class="mdi mdi-message-text-outline text-muted font-size-16 align-middle me-1" />
			<span class="align-middle">messages</span>
		</DropdownItem>
		<DropdownItem href={'#'}
			><i class="mdi mdi-calendar-check-outline text-muted font-size-16 align-middle me-1" />
			<span class="align-middle">taskboard</span>
		</DropdownItem>
		<DropdownItem href={'#'}
			><i class="mdi mdi-lifebuoy text-muted font-size-16 align-middle me-1" />
			<span class="align-middle">help</span>
		</DropdownItem>
		<div class="dropdown-divider" />
		<DropdownItem href={'#'}
			><i class="mdi mdi-wallet text-muted font-size-16 align-middle me-1" />
			<span class="align-middle"
				>balance :
				<b>amount</b></span
			>
		</DropdownItem>
		<DropdownItem href={'#'}
			><span class="badge bg-success bg-soft text-success mt-1 float-end"
				>settings</span
			><i class="mdi mdi-cog-outline text-muted font-size-16 align-middle me-1" />
			<span class="align-middle">settings</span>
		</DropdownItem>
		<DropdownItem href={'/auth-lock-screen'}
			><i class="mdi mdi-lock text-muted font-size-16 align-middle me-1" />
			<span class="align-middle">lockscreen</span>
		</DropdownItem>
		<DropdownItem
			><i class="mdi mdi-logout text-muted font-size-16 align-middle me-1" />
			<span class="align-middle">logout</span>
		</DropdownItem>
	</DropdownMenu>
</Dropdown>