<!-- This Source Code Form is subject to the terms of the Mozilla Public
   - License, v. 2.0. If a copy of the MPL was not distributed with this
   - file, You can obtain one at https://mozilla.org/MPL/2.0/. -->

<script>
  let { children } = $props();
  import "../app.css";
  import Sidebar from "../components/sidebar.svelte";
</script>

<main class="flex min-h-screen w-screen">
  <Sidebar />
  <div class="flex-1 min-w-0">
    {@render children()}
  </div>
</main>
