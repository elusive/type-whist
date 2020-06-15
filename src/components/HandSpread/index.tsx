import * as React from "react";
import * as styles from "./style.css";
import { CardModel, HandModel } from "../../models";
import { observer } from "mobx-react";
import { Card } from "../Card";

export interface HandSpreadProps {
    hand: HandModel;
}

export interface HandSpreadState {
    cards: CardModel[];
}

@observer
export class HandSpread extends React.Component<
    HandSpreadProps,
    HandSpreadState
> {
    constructor(props: HandSpreadProps) {
        super(props);
    }

    componentDidMount() {
        this.setState({
            cards: this.props.hand.cards,
        });
    }

    render() {
        return this.state && this.state.cards ? (
            <div className={styles.spread}>
                {this.state.cards.map((card) => (
                    <Card model={card} isLarge={false} />
                ))}
            </div>
        ) : (
            <div className={styles.spread}>none</div>
        );
    }
}

export default HandSpread;
