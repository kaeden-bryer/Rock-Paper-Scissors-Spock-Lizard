import { createRouter, createWebHashHistory } from "vue-router";

import Game from "./views/Game.vue";

const routes = [
    { path: '/', component: Game }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})