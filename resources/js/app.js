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
    methods: {
        resetGame: function(){
            // We gotta unset the states before resetting the cards else the css transition will expose the new emoji positions
            for(let i=0; i < 16; i++) {
                this.gameData.cards[i].active = false;
                this.gameData.cards[i].matched = false;
            };

            window.setTimeout(() => {
                this.gameData = new NewGame();
            }, 250)

        }
    },
    created: function() {
        this.gameData = new NewGame();
    }
});