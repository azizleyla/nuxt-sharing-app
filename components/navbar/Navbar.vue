<template>
  <div class="container mx-auto my-10">
    <nav
      class="flex justify-between items-center bg-white shadow md p-4 rounded-md"
    >
      <div>
        <img src="~/assets/img/logo.svg" />
      </div>
      <div class="flex items-center">
        <button
          @click="handleClick('link')"
          :class="`px-6  h-11 rounded-md text-lg ${
            activeBtn === 'link'
              ? 'bg-[#EFEBFF] text-[#633CFF]'
              : 'bg-transparent text-[#737373]'
          } font-semibold flex items-center justify-center`"
        >
          Link
        </button>
        <button
          @click="handleClick('profile')"
          :class="`h-11 px-6 ${
            activeBtn === 'profile'
              ? 'bg-[#EFEBFF] text-[#633cff]'
              : 'bg-transparent text-[#737373] '
          } text-lg font-semibold flex items-center justify-center rounded-md`"
        >
          Profile Details
        </button>
      </div>
      <div>
        <nuxt-link
          to="/preview"
          class="border-[1px] hover:bg-[#EFEBFF] border-[#633cff] rounded-md p-2 px-5 text-[#633cff] font-semibold"
        >
          Preview
        </nuxt-link>
      </div>
    </nav>
  </div>
</template>
<script setup>
const { activeBtn, handleClick } = defineProps(["activeBtn", "handleClick"]);
</script>
