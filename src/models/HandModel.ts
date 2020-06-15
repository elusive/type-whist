import { observable } from "mobx";
import uuidv4 from "uuid/v4";
import CardModel from "./CardModel";

export class HandModel {
    readonly playerId: uuidv4;

    @observable public cards: CardModel[];
    @observable public score: number;

    constructor(playerId: uuidv4) {
        this.playerId = playerId;
        this.cards = new Array<CardModel>();
        this.score = 0;
    }

    public calculateScore(): void {
        // TODO: setup hand scoring code
    }
}

export default HandModel;
