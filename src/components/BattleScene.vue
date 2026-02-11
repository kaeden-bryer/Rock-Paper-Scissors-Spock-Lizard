<template>
    <div class="battle-scene">
        <div class="choice player">
            <h3>You Picked</h3>
            <ActionButton icon="/images/icon-paper.svg" circle="/images/circle-blue.svg" />
        </div>
        
        <div class="result">
            <h2>You Win</h2>
            <button class="play-again">Play Again</button>        
        </div>

        <div class="choice opponent">
            <h3>The House Picked</h3>
            <ActionButton icon="/images/icon-rock.svg" circle="/images/circle-red.svg" />
        </div>  
    </div>  
</template>

<script setup lang="ts">
import ActionButton from './ActionButton.vue';



</script>

<style scoped>
.battle-scene {
    background-color: pink;
    width: 70vw;
    height: 60vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.choice {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    width: 30%;
    border: 1px solid black;
}

.play-again {
    background-color: white;
    color: black;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    cursor: pointer;
}

.play-again:hover {
    scale: 1.1;
    transition: scale 0.05s ease-in-out;
}

</style>