<script lang="ts">
  let { children } = $props();
  import "../app.css";

  const params = new URLSearchParams(window.location.search);
  const isDark =
    params.get("theme") === "dark" ||
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  document.documentElement.classList.toggle("dark", isDark);

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      document.documentElement.classList.toggle("dark", e.matches);
    });
</script>

<main class="bg-white dark:bg-black h-screen">
  {@render children()}
</main>
