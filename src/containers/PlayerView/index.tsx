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
            <table className={styles.player} id={this.props.player.id}>
                <thead></thead>
                <tbody>
                    <tr>
                        <td>
                            <PlayerAvatar name={this.props.player.name} />
                        </td>
                        <td>
                            <HandSpread hand={this.props.player.hand} />
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default PlayerView;
