import { action, observable } from "mobx";
import { PlayerModel, CardModel } from "../models";
import { PlayerPositionEnum } from "../constants";

export class GameStore {
    @observable public playerList = new Map<PlayerPositionEnum, PlayerModel>();
    @observable public turnPlayer: PlayerModel;
    @observable public currentTrick: Array<CardModel>;
    @observable public northSouthScore: number;
    @observable public eastWestScore: number;
    @observable public dealer: PlayerPositionEnum;

    @action
    addPlayer(player: PlayerModel) {
        // to add a player we use its position
        this.playerList[player.position] = player;
    }
}
