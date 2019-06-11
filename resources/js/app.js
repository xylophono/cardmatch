window.Vue = require('vue');

import GameCard from './components/GameCard.vue';

const app = new Vue({
    el: '#app',
    components: {
        GameCard,
    },
    data: {
        test : 'hello world'
    }
});