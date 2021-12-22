import * as React from "react";
import * as styles from "./style.css";
import { PlayerModel } from "../../models";
import { PlayerAvatar } from "../../components/PlayerAvatar";
import { HandSpread } from "../../components/HandSpread";
import { PlayerPositionEnum } from "../../constants";

export interface PlayerViewProps {
    player: PlayerModel;
    isDealer?: boolean;
    position: PlayerPositionEnum;
}

export class PlayerView extends React.Component<PlayerViewProps, {}> {
    constructor(props: PlayerViewProps) {
        super(props);
    }

    public render() {
        return (
            <div className={styles.player} id={this.props.player.id}>
                <PlayerAvatar name={this.props.player.name} />
                <HandSpread hand={this.props.player.hand} />
            </div>
        );
    }
}

export default PlayerView;
