<template>
    <div class="game-card" tabindex="0" v-on:click="doClick()">
        <div class="game-card__inner">
            <div class="game-card__front">
                {{ id }}
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
                alert(this.id);
            }
        }
    }
</script>