<template>
    <div class="game-area">
        <div class="background">
            <img class="triangle" :src="Triangle" alt="triangle" />
        </div>
        <div class="buttons">
            <div class="action-button-container">
                <ActionButton 
                    id="paper-button" 
                    icon="/images/icon-paper.svg" 
                    circle="/images/circle-blue.svg" 
                    @click="$emit('beginBattle', 'paper')"
                />
            </div>
            <div class="action-button-container">
                <ActionButton 
                    id="rock-button" 
                    icon="/images/icon-rock.svg" 
                    circle="/images/circle-red.svg" 
                    @click="$emit('beginBattle', 'rock')"
                />
            </div>
            <div class="action-button-container">
                <ActionButton 
                    id="scissors-button" 
                    icon="/images/icon-scissors.svg" 
                    circle="/images/circle-yellow.svg" 
                    @click="$emit('beginBattle', 'scissors')"
                />
            </div>
        </div>
    </div>
</template>


<script lang="ts">
    import ActionButton from './ActionButton.vue'
    import Triangle from '/images/bg-triangle.svg'

    export default {
        components: {
            ActionButton
        },
        emits: ['beginBattle'],
        data() {
            return {
                Triangle
            }
        }
    }

</script>


<style scoped>
    .game-area {
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

    .action-button-container {
        width: 10vw;
        height: 10vw;
        cursor: pointer;
    }

</style>