<template>
    <div class="game-area">
        <div class="background">
            <img class="triangle" :src="Triangle" alt="triangle" />
        </div>
        <div class="buttons">
            <ActionButton id="paper-button" icon="/images/icon-paper.svg" circle="/images/circle-blue.svg" />
            <ActionButton id="rock-button" icon="/images/icon-rock.svg" circle="/images/circle-red.svg" />
            <ActionButton id="scissors-button" icon="/images/icon-scissors.svg" circle="/images/circle-yellow.svg" />
        </div>
    </div>
</template>


<script setup lang="ts">
    import ActionButton from './ActionButton.vue'
    import Triangle from '/images/bg-triangle.svg'

</script>


<style scoped>
    .game-area {
        background-color: pink;
        width: 313px;
        height: 278px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: center;
    }

    .background, .buttons {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .buttons {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: 100%;
        width: 100%;
    }

    #rock-button {
        background-color: rgb(255, 0, 0);
    }

    #paper-button {
        background-color: rgb(0, 0, 255);
    }

    #scissors-button {
        background-color: rgb(255, 255, 0);
        bottom: 0;
    }   

</style>