import { SuitEnum, CardValueEnum } from "../constants";
import { computed } from "mobx";

export class CardModel {
    private readonly _suit: SuitEnum;
    private readonly _value: CardValueEnum;
    private _score = 0;
    private _isLarge = false;

    constructor(suit: SuitEnum, value: CardValueEnum, isLarge = false) {
        this._suit = suit;
        this._value = value;
        this._isLarge = isLarge ?? false;
    }

    @computed
    get suit(): SuitEnum {
        return this._suit;
    }

    @computed
    get value(): CardValueEnum {
        return this._value;
    }

    @computed
    get score(): number {
        return this._score;
    }

    @computed
    get isLarge(): boolean {
        return this._isLarge;
    }
}

export default CardModel;
