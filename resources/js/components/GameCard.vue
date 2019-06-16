<template>
    <div
        class="game-card"
        :class="{
            active: this.$root.gameData.cards[this.id].active,
            matched: this.$root.gameData.cards[this.id].matched,
        }"
        v-on:click="doClick()"
    >
        <div class="game-card__inner">
            <div class="game-card__front">
            </div>
            <div class="game-card__back">
                {{ emoji }}
            </div>
        </div>
    </div>   
</template>

<script>
    export default {
        data: function() {
            return {
            }
        },
        props: {
            id: Number,
            emoji: String
        },
        methods: {
            doClick: function() {
                // We're only doing anything if the card hasn't already been matched and we don't already have 2 active cards
                if(!this.$root.gameData.cards[this.id].matched && this.$root.gameData.active.length < 2) {

                    //Start the timer if this is the first click
                    if(this.$root.gameData.clicks == 0) {
                        window.gameTimer = setInterval(() => {
                            this.$root.gameData.time++;
                        }, 1000);
                    }
                    
                    //Incriment the clicks
                    this.$root.gameData.clicks++;
                    
                    // Activate the card and add to the active array
                    this.$root.gameData.cards[this.id].active = true;
                    this.$root.gameData.active.push(this.id);

                    //If there's only one card active we can just carry on
                    if(this.$root.gameData.active.length == 1) {
                        return;
                    }

                    // Otherwise we're gonna compare the two cards to see if they're a match and either disable them on success or reflip on failure
                    let cardA = this.$root.gameData.active[0];
                    let cardB = this.$root.gameData.active[1];

                    if(cardA == this.$root.gameData.cards[cardB].sibling) {
                        Array(cardA, cardB).forEach((card) => {
                            this.$root.gameData.cards[card].matched = true;
                            this.$root.gameData.cards[card].active = false;
                        });

                        this.$root.gameData.active = [];

                        //Decrease remaining pairs, end game if none left
                        this.$root.gameData.remaining--;
                        if(this.$root.gameData.remaining == 0) {
                            this.endGame();
                        }

                        return;
                    }

                    // We're gonna throw a lil delay on resetting the unmatched cards so users have time to process it not being a match
                    window.setTimeout(() => {
                        Array(cardA, cardB).forEach((card) => {
                            this.$root.gameData.cards[card].active = false;
                        });

                        this.$root.gameData.active = [];
                        
                    }, 500);


                }
            },

            endGame: function() {
                //Stop the timer
                clearInterval(window.gameTimer);
            }
        }
    }
</script>