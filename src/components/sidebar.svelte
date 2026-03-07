<script>
  /** @type {{ label: string, href: string }[]} */
  export let items;

  /** @type {{ name: string, avatarUrl: string }} */
  export let user;
</script>

<div
  class="flex h-screen flex-col justify-between border-e border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-950"
>
  <div class="px-4 py-6">
    <span
      class="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400"
    >
      Logo
    </span>

    <ul class="mt-6 space-y-1">
      {#each items as item}
        <li>
          <a
            href={item.href}
            class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
          >
            {item.label}
          </a>
        </li>
      {/each}
    </ul>
  </div>

  <div
    class="sticky inset-x-0 bottom-0 border-t border-gray-100 dark:border-gray-800"
  >
    <a
      href="#"
      class="flex items-center gap-2 bg-white p-4 hover:bg-gray-50 dark:bg-gray-950 dark:hover:bg-gray-800"
    >
      <img
        alt=""
        src={user.avatarUrl}
        class="size-10 rounded-full object-cover"
      />
      <div>
        <p class="text-xs">
          <strong class="block font-medium">{user.name}</strong>
        </p>
      </div>
    </a>
  </div>
</div>
