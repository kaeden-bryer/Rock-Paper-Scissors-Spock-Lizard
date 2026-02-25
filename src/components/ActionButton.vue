<template>
  <div class="button-container">
    <img class="icon-circle" :src="circle"/>
    <img class="icon" :src="icon" />
  </div>
</template>


<script lang="ts">

  export default {
    props: {
      icon: String,
      circle: String,
    }
  }

</script>


<style scoped>

  .button-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
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
