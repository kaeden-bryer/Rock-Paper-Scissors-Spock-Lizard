import { createMemoryHistory, createRouter } from "vue-router";

import Game from "./views/Game.vue";
import Landing from "./views/Landing.vue";

const routes = [
    { path: '/', component: Landing },
    { path: '/game', component: Game }
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes
})