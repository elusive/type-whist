import { PlayerPositionEnum } from "../constants";

export class GameModel {
    constructor() {
        this[PlayerPositionEnum.NORTH] = null;
        this[PlayerPositionEnum.EAST] = null;
        this[PlayerPositionEnum.SOUTH] = null;
        this[PlayerPositionEnum.WEST] = null;
    }
}
