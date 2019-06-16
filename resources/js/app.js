window.Vue = require('vue');

import GameGrid from './components/GameGrid.vue';
import NewGame from './classes/NewGame.js';
import confetti from 'canvas-confetti';

const app = new Vue({
    el: '#app',
    components: {
        GameGrid,
    },
    data: {
        gameData: {},
        showAbout: false,
    },
    computed: {
        formattedTime: function() {
            let formatted = new Date(null);
            formatted.setSeconds(this.gameData.time);
            return formatted.toISOString().substr(14,5);
        }
    },
    methods: {
        resetGame: function(){
            // We gotta unset the states before resetting the cards else the css transition will expose the new emoji positions
            for(let i=0; i < 16; i++) {
                this.gameData.cards[i].active = false;
                this.gameData.cards[i].matched = false;
            };

            clearInterval(window.gameTimer);

            window.setTimeout(() => {
                this.gameData = new NewGame();
            }, 250)
        },

        toggleAbout: function(){
            this.showAbout = !this.showAbout;
        },

        confetti: confetti,
    },
    created: function() {
        this.gameData = new NewGame();
    }
});