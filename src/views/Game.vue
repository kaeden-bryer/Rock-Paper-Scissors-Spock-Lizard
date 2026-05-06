
<template>
  <div class="app-container">
    
    <div class="header"> 
      <img class="logo" :src="logo" alt="logo" />
      <div class="score">
        <h2 class="score-title" :class="{ 'streak': isStreak }">SCORE</h2>
        <div class="streak-box">
          <p class="score-value" :class="{ 'streak': isStreak }">{{ score }}</p>
          <img v-if="isStreak" src="/images/streak.gif">
        </div>
      </div>
    </div>

    <div class="game-area">
      <GameArea v-if="scene === 'game'" 
        @begin-battle="(selection)  => goToBattle(selection)"
      />
      <BattleScene v-else 
        :userSelection="userSelection"
        @play-again="exitBattleScene()"
        @updateScore="(pointIncrement) => score = score + pointIncrement"
      />
    </div>
  </div>
</template>


<script setup lang="ts">
  import BattleScene from '../components/BattleScene.vue'
  import GameArea from '../components/GameArea.vue'
  import logo from '/images/logo.svg'
  import { computed, ref } from 'vue'

  const score = ref(0)
  const scene = ref('game') // 'game' or 'battle', might change to handle errors
  const userSelection = ref('')

  const isStreak = computed(() => {return score.value >= 3 ? true : false})

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
  justify-content: flex-start;  
  background-color: white;
  color: rgb(30, 30, 30);
  border-radius: 20px;
  width: 8vw;

  .streak {
    color: orange
  }

}

.streak-box {
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 70px;
  }
}

.score-title {
  font-size: 1rem;
  
  &.streak {
    font-size: 1.5rem;
  }
}

.score-value {
  font-size: 3rem;
  font-weight: bold;

}

.score-title, .score-value {
  margin: 0;
  padding: 0;
}

.score {
  border: 1px solid black;
  padding: 5px;
}

.game-area {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7vh;
}
</style>
