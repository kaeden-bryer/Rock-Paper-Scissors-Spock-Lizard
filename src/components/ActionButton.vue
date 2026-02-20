<script setup lang="ts">
  const props = defineProps({
    icon: String,
    circle: String
  })


</script>

<template>
  <div class="button-container">
    <img class="icon-circle" :src="props.circle"/>
    <img class="icon" :src="props.icon" />
  </div>
</template>

<style scoped>

  .button-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10vw;
    cursor: pointer;
  }

  .button-container:hover {
    scale: 1.1;
    transition: scale 0.05s ease-in-out;
  }

  .icon-circle {
    position: absolute;
    width: 100%;
  }

  .icon {
    position: absolute;
    width: 100%;
    scale: 0.4;
  }
  
</style>
