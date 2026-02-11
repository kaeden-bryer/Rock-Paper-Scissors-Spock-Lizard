<template>
    <div class="app-container">
        <h1>Rock Paper Scissors</h1>
        <p>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/game">Game</RouterLink>
        </p>
        <RouterView />
    </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<style scoped> 

</style>