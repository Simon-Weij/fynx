<!-- +layout.svelte -->
<!-- This Source Code Form is subject to the terms of the Mozilla Public
   - License, v. 2.0. If a copy of the MPL was not distributed with this
   - file, You can obtain one at https://mozilla.org/MPL/2.0/. -->

<script>
  let { children } = $props();
  import "../app.css";
  import Sidebar from "../components/sidebar.svelte";
  import Topbar from "../components/topbar.svelte";
</script>

<div class="flex flex-col w-screen min-h-screen">
  <Topbar />
  <main class="flex flex-1 min-h-0">
    <Sidebar />
    <div class="flex-1 min-w-0">
      {@render children()}
    </div>
  </main>
</div>
