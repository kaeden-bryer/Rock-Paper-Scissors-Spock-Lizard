
<template>
  <div class="app-container">
    
    <div class="header"> 
      <img class="logo" :src="logo" alt="logo" />
      <div class="score">
        <h2 class="score-title">SCORE</h2>
        <p class="score-value">{{ score }}</p>
      </div>
    </div>

    <div class="game-area">
      <GameArea v-if="scene === 'game'" 
        @begin-battle="(selection)  => goToBattle(selection)"
      />
      <BattleScene v-else 
        :userSelection="userSelection"
        @play-again="exitBattleScene()"
      />
    </div>
  </div>
</template>


<script setup lang="ts">
  import BattleScene from '../components/BattleScene.vue'
  import GameArea from '../components/GameArea.vue'
  import logo from '/images/logo.svg'
  import { ref } from 'vue'

  const score = ref(0)
  const scene = ref('game') // 'game' or 'battle'
  const userSelection = ref('')

  function goToBattle(userSelectionValue: string) {
    userSelection.value = userSelectionValue;
    console.log('go to battle with selection: ' + userSelection.value);
    scene.value = 'battle';
  }

  function exitBattleScene() {
    scene.value = 'game';
  }

</script>


<style scoped>

.app-container {
  background: gray;
  width: 70vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  justify-self: center;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  width: 40vw;
}

.score {
  display: flex;
  flex-direction: column;
  justify-content: start;
  background-color: white;
  color: darkblue;
  border-radius: 20px;
  width: 8vw;
  padding-top: 0px;
}

.score-title, .score-value, .score {
  border: 1px solid black;
}

.score-value {
  font-size: 2em;
  font-weight: bold;
}

.game-area {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100%;
}
</style>
