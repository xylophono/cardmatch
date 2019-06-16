<template>
    <div class="game-grid">
        <game-card
            v-for="(card, i) in $root.gameData.cards"
            :key="i"
            :id="parseInt(i)"
            :emoji="card.emoji"
        ></game-card>
    </div>
</template>

<script>
    import GameCard from '../components/GameCard.vue';
    export default {
        components: {
            GameCard
        },
        data: function() {
            return {
            }
        }
    }
</script>