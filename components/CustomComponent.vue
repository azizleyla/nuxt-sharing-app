<template>
  <user-link v-if="activeBtn == 'link'" />
  <profile v-else />
</template>
<script setup>
const { activeBtn } = defineProps(["activeBtn"]);
</script>
