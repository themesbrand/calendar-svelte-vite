<script>
  import { onMount } from "svelte";
  export let open = false;

  let layoutMode = "light";
  let layoutWidth = "fluid";
  let layoutPosition = "fixed";
  let topbarTheme = "light";
  let leftSideBarTheme = "dark";
  let leftSidebarType = "lg";

  onMount(() => {
    changeLayoutWidth(layoutWidth);
    changeLeftSidebarTheme(leftSideBarTheme);
    changeTopbarTheme(topbarTheme);
    changeLeftSidebarType(leftSidebarType);
    changeLayoutMode(layoutMode);
    changeLaoutPosition(layoutPosition);
  });

  function changeLayoutMode(value) {
    if (document.body) document.body.setAttribute("data-layout-mode", value);
  }

  function changeLayoutWidth(value) {
    if (document.body) document.body.setAttribute("data-layout-size", value);
  }

  function changeLeftSidebarTheme(value) {
    if (document.body) document.body.setAttribute("data-sidebar", value);
  }

  function changeTopbarTheme(value) {
    if (document.body) document.body.setAttribute("data-topbar", value);
  }

  function changeLeftSidebarType(value) {
    if (document.body) document.body.setAttribute("data-sidebar-size", value);
  }

  function changeLaoutPosition(value) {
    if (document.body)
      document.body.setAttribute("data-layout-scrollable", value);
  }

  function changeBodyAttribute(attribute, value) {
    if (document.body) document.body.setAttribute(attribute, value);

    if (attribute == "data-layout-mode") {
      if (value == "dark") {
        if (document.body) document.body.setAttribute("data-topbar", "dark");
      } else {
        if (document.body) document.body.setAttribute("data-topbar", "light");
      }
    }
    return true;
  }

  export let layout;

  if (layout == "horizontal") {
	  
    if (document.body) document.body.removeAttribute("data-sidebar");

  }

</script>

<!-- Right Sidebar -->

<div id="right-bar" class="right-bar {open === true ? 'open' : ''}">
  <div data-simplebar class="h-100">
    <div class="rightbar-title d-flex align-items-center bg-dark p-3">
      <h5 class="m-0 me-2 text-white">Theme Customizer</h5>

      <a
        href={"#"}
        class="right-bar-toggle ms-auto"
        on:click={() => (open = false)}
      >
        <i class="mdi mdi-close noti-icon" />
      </a>
    </div>

    <!-- Settings -->
    <hr class="m-0" />

    <div class="p-4">
      <h6 class="mt-4 mb-3">Layout Mode</h6>

      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="layout-mode"
          id="layout-mode-light"
          value="light"
          on:change={() => changeBodyAttribute("data-layout-mode", "light")}
          checked={layoutMode == "light"}
        />
        <label class="form-check-label" for="layout-mode-light">Light</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="layout-mode"
          id="layout-mode-dark"
          value="dark"
          on:change={() => changeBodyAttribute("data-layout-mode", "dark")}
          checked={layoutMode == "dark"}
        />
        <label class="form-check-label" for="layout-mode-dark">Dark</label>
      </div>

      <h6 class="mt-4 mb-3">Layout Width</h6>

      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="layout-width"
          id="layout-width-fuild"
          value="fluid"
          on:change={() => changeBodyAttribute("data-layout-size", "fluid")}
          checked={layoutWidth == "fluid"}
        />
        <label class="form-check-label" for="layout-width-fuild">Fluid</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="layout-width"
          id="layout-width-boxed"
          value="boxed"
          on:change={() => changeBodyAttribute("data-layout-size", "boxed")}
          checked={layoutWidth == "boxed"}
        />
        <label class="form-check-label" for="layout-width-boxed">Boxed</label>
      </div>

      <h6 class="mt-4 mb-3">Layout Position</h6>

      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="layout-position"
          id="layout-position-fixed"
          value="fixed"
          on:change={() =>
            changeBodyAttribute("data-layout-scrollable", "false")}
          checked={layoutPosition == "fixed"}
        />
        <label class="form-check-label" for="layout-position-fixed">Fixed</label
        >
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="layout-position"
          id="layout-position-scrollable"
          value="scrollable"
          on:change={() =>
            changeBodyAttribute("data-layout-scrollable", "true")}
          checked={layoutPosition == "scrollable"}
        />
        <label class="form-check-label" for="layout-position-scrollable"
          >Scrollable</label
        >
      </div>

      <h6 class="mt-4 mb-3">Topbar Color</h6>

      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="topbar-color"
          id="topbar-color-light"
          value="light"
          on:change={() => changeBodyAttribute("data-topbar", "light")}
          checked={topbarTheme == "light"}
        />
        <label class="form-check-label" for="topbar-color-light">Light</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="topbar-color"
          id="topbar-color-dark"
          value="dark"
          on:change={() => changeBodyAttribute("data-topbar", "dark")}
          checked={topbarTheme == "dark"}
        />
        <label class="form-check-label" for="topbar-color-dark">Dark</label>
      </div>

      {#if layout == "vertical"}
        <h6 class="mt-4 mb-3 sidebar-setting">Sidebar Size</h6>

        <div class="form-check sidebar-setting">
          <input
            class="form-check-input"
            type="radio"
            name="sidebar-size"
            id="sidebar-size-default"
            value="default"
            on:change={() => changeBodyAttribute("data-sidebar-size", "lg")}
            checked={leftSidebarType == "lg"}
          />
          <label class="form-check-label" for="sidebar-size-default"
            >Default</label>

        </div>
        <div class="form-check sidebar-setting">
          <input
            class="form-check-input"
            type="radio"
            name="sidebar-size"
            id="sidebar-size-compact"
            value="compact"
            on:change={() => changeBodyAttribute("data-sidebar-size", "md")}
            checked={leftSidebarType == "md"}
          />
          <label class="form-check-label" for="sidebar-size-compact"
            >Compact</label
          >
        </div>
        <div class="form-check sidebar-setting">
          <input
            class="form-check-input"
            type="radio"
            name="sidebar-size"
            id="sidebar-size-small"
            value="small"
            on:change={() => changeBodyAttribute("data-sidebar-size", "sm")}
            checked={leftSidebarType == "sm"}
          />
          <label class="form-check-label" for="sidebar-size-small"
            >Small (Icon View)</label
          >
        </div>

        <h6 class="mt-4 mb-3 sidebar-setting">Sidebar Color</h6>

        <div class="form-check sidebar-setting">
          <input
            class="form-check-input"
            type="radio"
            name="sidebar-color"
            id="sidebar-color-light"
            value="light"
            on:change={() => changeBodyAttribute("data-sidebar", "light")}
            checked={leftSideBarTheme == "light"}
          />
          <label class="form-check-label" for="sidebar-color-light">Light</label
          >
        </div>
        <div class="form-check sidebar-setting">
          <input
            class="form-check-input"
            type="radio"
            name="sidebar-color"
            id="sidebar-color-dark"
            value="dark"
            on:change={() => changeBodyAttribute("data-sidebar", "dark")}
            checked={leftSideBarTheme == "dark"}
          />
          <label class="form-check-label" for="sidebar-color-dark">Dark</label>
        </div>
        <div class="form-check sidebar-setting">
          <input
            class="form-check-input"
            type="radio"
            name="sidebar-color"
            id="sidebar-color-brand"
            value="brand"
            on:change={() => changeBodyAttribute("data-sidebar", "brand")}
            checked={leftSideBarTheme == "brand"}
          />
          <label class="form-check-label" for="sidebar-color-brand">Brand</label
          >
        </div>
      {/if}
    </div>
  </div>
  <!-- end slimscroll-menu-->
</div>
<!-- Right-bar -->

<!-- Right bar overlay-->
<div class="rightbar-overlay" />

<style>
  .open {
    /* slide on screen */
    right: 0;
  }
</style>
