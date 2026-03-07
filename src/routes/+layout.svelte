<script lang="ts">
  let { children } = $props();
  import '../app.css';
  import { onMount } from 'svelte';
  import Sidebar from '../components/sidebar.svelte';

  onMount(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        document.documentElement.classList.toggle('dark', e.matches);
      });
  });
</script>

<div class="flex h-screen bg-[#d4d4d4] dark:bg-[#0a0a0a] dark:text-[#d4d4d4]">
  <div class="w-[15vw]">
    <Sidebar
      items={[
        { label: 'Home', href: '/' },
        { label: 'Settings', href: '/settings' },
      ]}
      user={{
        name: 'User',
        avatarUrl: 'http://ui-avatars.com/api/?name=User&background=random',
      }}
    />
  </div>

  <div class="flex-1 overflow-y-auto">
    {@render children()}
  </div>
</div>
