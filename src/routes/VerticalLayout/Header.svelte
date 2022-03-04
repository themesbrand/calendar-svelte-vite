<script>
  import { Link } from "svelte-routing";

  import ProfileMenu from "../../common/ProfileMenu.svelte";

</script>

<header id="page-topbar">
  <div class="navbar-header">
    <div class="d-flex">
      <!-- LOGO -->
      <div class="navbar-brand-box">
        <Link to={"/"} class="logo logo-dark">
          <span class="logo-sm">
            <img src="assets/images/logo-sm.png" alt="" height="22" />
          </span>
          <span class="logo-lg">
            <img src="assets/images/logo-dark.png" alt="" height="23" />
          </span>
        </Link>

        <Link to={"/"} class="logo logo-light">
          <span class="logo-sm">
            <img src="assets/images/logo-sm-light.png" alt="" height="22" />
          </span>
          <span class="logo-lg">
            <img src="assets/images/logo-light.png" alt="" height="23" />
          </span>
        </Link>
      </div>

      <button
        class="btn btn-sm px-3 font-size-16 vertinav-toggle header-item waves-effect"
        id="vertical-menu-btn"
      >
        <i class="fa fa-fw fa-bars" />
      </button>

      <button
        class="btn btn-sm px-3 font-size-16 horinav-toggle header-item waves-effect waves-light"
        data-bs-toggle="collapse"
        data-bs-target="#topnav-menu-content"
      >
        <i class="fa fa-fw fa-bars" />
      </button>
    </div>

    <div class="d-flex">

      <div class="dropdown d-none d-lg-inline-block ms-1">
        <button
          type="button"
          class="btn header-item noti-icon"
          data-toggle="fullscreen"
        >
          <i class="bx bx-fullscreen" />
        </button>
      </div>

      <ProfileMenu />

    </div>
  </div>
</header>
