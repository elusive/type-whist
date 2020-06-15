import { observable } from "mobx";
import uuidv4 from "uuid/v4";
import { HandModel } from "./HandModel";
import { PlayerPositionEnum } from "../constants";

export class PlayerModel {
    readonly id: uuidv4;
    readonly isComputer: boolean;
    @observable public name: string;
    @observable public hand: HandModel;
    @observable public position: PlayerPositionEnum;

    constructor(
        name: string,
        position: PlayerPositionEnum,
        isComputer = false
    ) {
        this.id = uuidv4();
        this.isComputer = isComputer;
        this.name = name;
        this.position = position;
    }
}
