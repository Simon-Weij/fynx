<!-- This Source Code Form is subject to the terms of the Mozilla Public
   - License, v. 2.0. If a copy of the MPL was not distributed with this
   - file, You can obtain one at https://mozilla.org/MPL/2.0/. -->

<script lang="ts">
  let windowWidth = $state(window.innerWidth);
  let widthPercent = $state(25);
  let dragging = false;

  const MIN_PERCENT = 10;
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
  <aside style="width: {widthPercent}vw" class="bg-[#A2A1A1] min-h-screen">
    <p>t</p>
  </aside>

  <button
    type="button"
    aria-label="Resize sidebar"
    class="w-1 cursor-col-resize bg-gray-400 hover:bg-gray-600 border-none p-0"
    onmousedown={onMouseDown}
  ></button>
</div>
