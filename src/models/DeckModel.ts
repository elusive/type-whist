import CardModel from "./CardModel";
import { CardValueEnum, SuitEnum } from "../constants";

export class DeckModel {
    cards = new Array<CardModel>();

    constructor() {
        this.build();
    }

    build() {
        for (let s = 1; s < Object.keys(SuitEnum).length; s++) {
            for (let v = 0; v < Object.keys(CardValueEnum).length - 2; v++) {
                let suit = Object.values(SuitEnum)[s];
                let value = Object.values(CardValueEnum)[v];
                console.log(`Card: ${value} ${suit}`);
                this.cards.push(new CardModel(suit, value));
            }
        }

        // add jokers
        // console.log(`Card: ${CardValueEnum.LITTLE_JOKER} ${SuitEnum.SPECIAL}`);
        // console.log(`Card: ${CardValueEnum.BIG_JOKER} ${SuitEnum.SPECIAL}`);
    }

    shuffle() {
        // switch 2 random cards a thousand times
        for (let i = 0; i < 1000; i++) {
            var index1 = Math.floor(Math.random() * this.cards.length);
            var index2 = Math.floor(Math.random() * this.cards.length);
            var temp = this.cards[index1];

            this.cards[index1] = this.cards[index2];
            this.cards[index2] = temp;
        }
    }

    nextCard(): CardModel {
        return this.cards.pop();
    }
}

export default DeckModel;
