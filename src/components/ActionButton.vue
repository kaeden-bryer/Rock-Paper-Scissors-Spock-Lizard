<script setup lang="ts">
  import circle from '/images/circle.svg'
  import rock from '/images/icon-rock.svg'
</script>

<template>
  <div class="button-container">
    <img class="rock-container" :src="circle" alt="circle" />
    <img class="rock" :src="rock" alt="rock" />
  </div>
</template>

<style scoped>

  .button-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30vw;
    height: 30vw;
    border: 2px solid white;
  }

  .rock-container {
    position: absolute;
    width: 100%;
  }

  .rock {
    position: absolute;
    width: 100%;
    scale: 0.4;
  }
  
</style>
