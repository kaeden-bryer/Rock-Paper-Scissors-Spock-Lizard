<template>
    <div class="battle-scene">
        <div class="choice player">
            <h3>You Picked</h3>
            <div class="action-button-container">
                <ActionButton 
                    :icon="userSelectionImage" 
                    :circle="userCircleColor" 
                />
            </div>
        </div>
        
        <div v-if="gameResult" class="result">
            <h2>{{ gameResult }}</h2>
            <button class="play-again" @click="handlePlayAgain">Play Again</button>        
        </div>

        <div class="choice opponent">
            <h3>The House Picked</h3>
            <div class="action-button-container">
                <ActionButton 
                    :icon="computerSelectionImage" 
                    :circle="computerCircleColor" 
                />
            </div>
        </div>  
    </div>  
</template>

<script lang="ts">
import { ref } from 'vue';
import ActionButton from './ActionButton.vue';
import confetti from '@hiseb/confetti';


export default {
    components: { 
        ActionButton 
    },
    props: {
        userSelection: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            selections: ['rock', 'paper', 'scissors'] as string[],
            actionImage: ['/images/icon-rock.svg', '/images/icon-paper.svg', '/images/icon-scissors.svg'] as string[],
            circleColor: ['/images/circle-red.svg', '/images/circle-blue.svg', '/images/circle-yellow.svg'] as string[],
            computerSelectionImage: undefined as string | undefined,
            computerCircleColor: '/images/circle-loading.svg' as string | undefined,
            gameResult: ref(''),
        };
    },
    mounted() {
        setTimeout(() => {
            const computerSelection = Math.floor(Math.random() * this.selections.length);
            this.computerSelectionImage = this.actionImage[computerSelection];
            this.computerCircleColor = this.circleColor[computerSelection];
            console.log('computer selection: ' + this.selections[computerSelection]);
            this.handleGame(this.selections[computerSelection]!)
        }, 2000);
    },
    methods: {
        handleGame(computerSelection: string) {
            console.log('handle game logic here');
            if (this.userSelection === computerSelection) {
                console.log('tie');
                this.gameResult = 'It\'s a Tie!';
            } else if (
                (this.userSelection === 'rock' && computerSelection === 'scissors') ||
                (this.userSelection === 'paper' && computerSelection === 'rock') ||
                (this.userSelection === 'scissors' && computerSelection === 'paper')
            ) {
                confetti({});
                this.gameResult = 'You Win!';
                this.$emit('updateScore', 1);
            } else {
                this.gameResult = 'You Lose!';
            }
        },
        handlePlayAgain() {
            this.computerSelectionImage = 'images/circle-loading.svg';
            this.$emit('playAgain');
        }
    },
    emits: ['playAgain', 'updateScore'],
    computed: {
        userSelectionImage(): string | undefined {
            console.log("user selection: " + this.userSelection);
            const index = this.selections.indexOf(this.userSelection);
            return this.actionImage[index];
        },
        userCircleColor(): string | undefined {
            console.log("user selection: " + this.userSelection);
            const index = this.selections.indexOf(this.userSelection);
            return this.circleColor[index];
        }
    }
}

</script>

<style scoped>
.battle-scene {
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

.action-button-container {
    width: 20vw;
    height: 20vw;
}

</style>