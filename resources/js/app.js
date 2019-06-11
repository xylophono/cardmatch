window.Vue = require('vue');

import GameCard from './components/GameCard.vue';

import NewGame from './classes/NewGame.js';

const app = new Vue({
    el: '#app',
    components: {
        GameCard,
    },
    data: {
        gameData: {}
    },
    created: function() {
        this.gameData = new NewGame();
    }
});