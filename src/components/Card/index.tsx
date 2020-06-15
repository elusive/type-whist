import * as React from "react";
import * as styles from "./style.css";
import { SuitEnum } from "../../constants";
import classNames from "classnames";
import { observer } from "mobx-react";
import { CardModel } from "../../models";

export interface CardProps {
    model: CardModel;
    isLarge: boolean;
}

@observer
export class Card extends React.Component<CardProps, {}> {
    constructor(props: CardProps) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.isLarge ? styles.card : styles.card2}>
                <div
                    className={classNames({
                        [styles.top]: true,
                        [getSuitStyle(this.props.model.suit)]: true,
                    })}
                >
                    <span className={styles.valueTop}>
                        {this.props.model.value}
                    </span>{" "}
                    <br />
                    <span className={styles.suitTop}>
                        {this.props.isLarge
                            ? ""
                            : getSuitCharacter(this.props.model.suit)}
                    </span>
                </div>
                <div
                    className={classNames({
                        [styles.suit]: true,
                        [getSuitStyle(this.props.model.suit)]: true,
                    })}
                ></div>
                <div
                    className={classNames({
                        [styles.bottom]: true,
                        [getSuitStyle(this.props.model.suit)]: true,
                    })}
                >
                    <span
                        className={classNames({
                            [styles.upsideDown]: true,
                            [styles.suitBottom]: true,
                        })}
                    >
                        {getSuitCharacter(this.props.model.suit)}
                    </span>
                    <br />
                    <span
                        className={classNames({
                            [styles.upsideDown]: true,
                            [styles.valueBottom]: true,
                        })}
                    >
                        {this.props.model.value}
                    </span>
                </div>
            </div>
        );
    }
}

function getSuitStyle(suit: SuitEnum): typeof styles {
    switch (suit) {
        case SuitEnum.CLUBS:
            return styles.clubs;
        case SuitEnum.DIAMONDS:
            return styles.diamonds;
        case SuitEnum.HEARTS:
            return styles.hearts;
        case SuitEnum.SPADES:
            return styles.spades;
        default:
            return undefined;
    }
}

function getSuitCharacter(suit: SuitEnum): string {
    switch (suit) {
        case SuitEnum.CLUBS:
            return "♣";
        case SuitEnum.DIAMONDS:
            return "♦";
        case SuitEnum.HEARTS:
            return "♥";
        case SuitEnum.SPADES:
            return "♠";
        default:
            return "";
    }
}

export default Card;
