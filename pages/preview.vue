<template>
  <div class="bg-[#633cff] h-[357px] p-5">
    <div class="bg-white rounded-xl p-2 flex justify-between">
      <button
        @click="$router.go(-1)"
        class="border-[1px] font-semibold rounded-xl border-[#633cff] p-2 px-4 text-[#633cff]"
      >
        Go back
        <Icon name="maki:arrow" />
      </button>
      <button class="bg-[#633cff] p-2 px-4 text-white rounded-xl">
        Share Link
      </button>
    </div>
  </div>
  <div class="flex items-center my-5 justify-center">
    <div class="bg-white shadow-lg p-5 rounded-xl w-[350px] text-center">
      <h3 class="font-bold text-2xl">{{ user.name }} {{ user.surname }}</h3>
      <span class="my-2 text-sm text-gray-400">{{ user.email }}</span>
      <nuxt-link
        target="_blank"
        :to="link.url"
        class="border-[1px] py-3 text-[#737373] my-5 px-3 rounded-lg flex justify-between items-center"
        v-for="link in links"
        :key="link"
      >
        <p>
          {{ link.title }}
        </p>
        <Icon name="maki:arrow" />
      </nuxt-link>
    </div>
  </div>
</template>
<script setup>
import store from "~/store";

const user = JSON.parse(sessionStorage.getItem("user")) || store.state.user;

const links = JSON.parse(sessionStorage.getItem("links"));
</script>