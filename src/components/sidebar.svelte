<!-- This Source Code Form is subject to the terms of the Mozilla Public
   - License, v. 2.0. If a copy of the MPL was not distributed with this
   - file, You can obtain one at https://mozilla.org/MPL/2.0/. -->

<script lang="ts">
  import HomeIcon from "./icons/HomeIcon.svelte";
  import SettingsIcon from "./icons/SettingsIcon.svelte";

  let windowWidth = $state(window.innerWidth);
  let widthPercent = $state(25);
  let dragging = false;

  const MIN_PERCENT = 20;
  const MAX_PERCENT = 50;

  function onMouseDown() {
    dragging = true;
  }

  function onMouseMove(e: MouseEvent) {
    if (dragging) {
      const delta = (e.movementX / windowWidth) * 100;
      widthPercent = Math.max(
        MIN_PERCENT,
        Math.min(MAX_PERCENT, widthPercent + delta)
      );
    }
  }

  function onMouseUp() {
    dragging = false;
  }
</script>

<svelte:window
  onmousemove={onMouseMove}
  onmouseup={onMouseUp}
  onresize={() => (windowWidth = window.innerWidth)}
/>

<div class="flex">
  <aside
    style="width: {widthPercent}vw"
    class="bg-[#A2A1A1] min-h-screen flex flex-col rounded-r-xl"
  >
    <h1 class="text-black text-center text-4xl font-bold mt-2.5">Fynx</h1>

    <hr class="mx-2 my-2 border-gray-600" />

    <div class="flex flex-col gap-1 px-2">
      <a
        href="/"
        class="flex items-center gap-2 px-3 py-2 font-bold text-left text-black rounded cursor-pointer hover:bg-gray-500"
        ><HomeIcon />Home</a
      >
      <a
        href="/settings"
        class="flex items-center gap-2 px-3 py-2 font-bold text-left text-black rounded cursor-pointer hover:bg-gray-500"
      >
        <SettingsIcon />Settings
      </a>
    </div>
  </aside>

  <button
    type="button"
    aria-label="Resize sidebar"
    class="w-1 p-0 my-2 bg-transparent border-none rounded-full cursor-col-resize"
    onmousedown={onMouseDown}
  ></button>
</div>
