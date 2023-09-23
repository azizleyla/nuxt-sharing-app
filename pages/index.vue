<template>
  <Navbar :handleClick="handleClick" :activeBtn="activeBtn" />
  <custom-component :activeBtn="activeBtn" />
</template>
<script setup>
const activeBtn = ref("link");
const handleClick = (btn) => {
  activeBtn.value = btn;
};
</script>
