<template>
    <div class="app-container">
        <RouterView />
        <div class="welcome-overlay">
            <div class="welcome-content">
                <h1>👋Hey Guys</h1>
                <p>Sorry I took so long to make this rock paper scissors project. Also I kind of rushed it since today's my last day🥲.</p>
                <p>So, I decided to just have some fun with it. Oh also, I made music for this (🔊volume up!)</p>
                <p>Try to get 5 wins🔥! Losses don't count against you.</p>
                <p>Love you guys. My experience at 24G has been wonderful. Hopefully see you guys again💖!</p>
                <p>Cheers, Kaeden💙</p>
                <button @click="closeWelcomeOverlay()" class="start-button">LET IT RIDE!</button>
            </div>

        </div>
        <div>
            <button @click="toggleRulesModal()" class="rules-button">RULES</button>
        </div>
        <div v-show="toggleRules" class="rules-modal-overlay" @click="toggleRulesModal()">
            <div class="rules-modal">
                <div class="rules-header">
                    <h2>RULES</h2>
                    <img :src="asset('images/icon-close.svg')" class="icon-close" alt="close" />
                </div>
                <img :src="asset('images/image-rules.svg')" alt="rules" />
                <audio loop>
                    <source :src="asset('music/Rock_Paper_Scissors_Beat.mp3')" type="audio/mpeg">
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
        asset(path: string) {
            return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
        },
        toggleRulesModal() {
            this.toggleRules = !this.toggleRules;
        },
        closeWelcomeOverlay() {
            const welcomeOverlay = document.querySelector('.welcome-overlay') as HTMLElement;
            if (welcomeOverlay) {
                welcomeOverlay.style.display = 'none';
            }
            const audio = document.querySelector('audio') as HTMLAudioElement;
            if (audio) {
                audio.play();
            }
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
    background-color: rgba(0, 0, 0, 0.2);
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

.welcome-overlay {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
}

.welcome-content {
    display: flex;
    background: rgba(250, 231, 179, 0.95);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
    width: 60vw;
    height: 60vh;
    border: 1px solid #ccc;
    border-radius: 50px;
    font-size: 1.1rem;

    p {
        margin: 0.5vw;
    }
}

.start-button {
    background-color: rgba(255, 189, 252, 0.9);
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px 20px;
    color: black;
    cursor: pointer;
    margin-top: 20px;
    font-size: 1rem;
    font-weight: bold;
    font-family: 'Arial', sans-serif;
}

</style>