<template>
    <div class="game-card" tabindex="0">
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
        props: {
            id: Number,
            emoji: String,
            sibling: Number,
            active: Boolean,
            matched: Boolean
        },
        data: function() {
            return {
            }
        }
    }
</script>