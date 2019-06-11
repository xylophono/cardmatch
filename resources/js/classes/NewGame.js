export default class {
    constructor() {
        this.emojis = Array(
            '😃','😂','😍','👿','💩','👻','👌','🤘','👀','🤷','💥','🐵','🐶','🐯',
            '🦄','🐧','🐍','🌷','🦀','🌈','🔥','🍓','🍄','🍔','🍕','🥤','🏆','🏀',
            '🏓','🎮','🎲','✈️','🚀','💣','🎈','📷','❤️'
        );

        // Shuffle emojis, grab 8
        this.emojis.sort(function() { return 0.5 - Math.random() });
        this.emojis.splice(8);

        // Duplicate them, reshuffle
        this.emojis = this.emojis.concat(this.emojis);
        this.emojis.sort(function() { return 0.5 - Math.random() });

        this.tempMap = {};
        this.cards = {};

        // Cycle through the emoji to construct the card data, cache unpaired cards to record their sibling
        for (let i=0; i < this.emojis.length; i++) {
            this.cards[i] = {
                emoji: this.emojis[i],
                sibling: 0,
                active: false,
                matched: false
            }

            if(this.emojis[i] in this.tempMap) {
                let target = this.tempMap[this.emojis[i]];
                this.cards[i].sibling = target;
                this.cards[target].sibling = i;
            } else {
                this.tempMap[this.emojis[i]] = i;
            }
        }

        delete this.emojis;
        delete this.tempMap;
    }
}