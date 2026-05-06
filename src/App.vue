<template>
    <div class="app-container">
        <RouterView />
        <div>
            <button @click="toggleRulesModal()" class="rules-button">RULES</button>
        </div>
        <div v-show="toggleRules" class="rules-modal-overlay" @click="toggleRulesModal()">
            <div class="rules-modal">
                <div class="rules-header">
                    <h2>RULES</h2>
                    <img src="/images/icon-close.svg" class="icon-close" alt="close" />
                </div>
                <img src="/images/image-rules.svg" alt="rules" />
                <audio autoplay loop>
                    <source src="/music/Rock_Paper_Scissors_Beat.mp3" type="audio/mpeg">
                </audio>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { RouterView } from 'vue-router'

export default {
    data() {
        return {
            toggleRules: false
        }
    },
    methods: {
        toggleRulesModal() {
            this.toggleRules = !this.toggleRules;
        }
    }
}

</script>

<style scoped> 

.rules-button {
    background-color: transparent;
    position: absolute;
    bottom: 20px;
    right: 40px;
    border: 1px solid white;
    border-radius: 10px;
    padding: 5px 10px;
    color: white;
    cursor: pointer;
}

.rules-button:hover {
    transform: scale(1.1);
    transition: transform 0.05s ease-in-out;
    transition: scale 0.05s ease-in-out;
}
.rules-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0px 20px;
    color: gray;
}

.rules-modal-overlay {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
}

.rules-modal {
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.icon-close {
    cursor: pointer;
    width: 20px;
    height: 20px;
}

</style>