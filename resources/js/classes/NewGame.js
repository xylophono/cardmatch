export default class {
    constructor() {

        // Some data we're gonna retain
        this.pairs = 8;
        this.cards = {};
        this.active = [];
        this.remaining = this.pairs;
        this.time = 0;
        this.clicks = 0;

        // The emojis we can pick from
        this.emojis = [
            '😃','😂','😍','👿','💩','👻','👌','🤘','👀','🤷','💥','🐵','🐶','🐯',
            '🦄','🐧','🐍','🌷','🦀','🌈','🔥','🍓','🍄','🍔','🍕','🥤','🏆','🏀',
            '🏓','🎮','🎲','✈️','🚀','💣','🎈','📷','❤️'
        ];

        // Shuffle emojis, grab the pairs
        this.emojis.sort(function() { return 0.5 - Math.random() });
        this.emojis.splice(this.pairs);

        // Duplicate them, reshuffle
        this.emojis = this.emojis.concat(this.emojis);
        this.emojis.sort(function() { return 0.5 - Math.random() });

        // Cycle through the emoji to construct the card data, cache unpaired cards to record their sibling
        this.tempMap = {};
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

        //Cleanup
        delete this.pairs;
        delete this.emojis;
        delete this.tempMap;
        
    }
}