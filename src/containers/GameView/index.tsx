import * as React from "react";
import * as styles from "./style.css";
import { observer } from "mobx-react";
import { Container, Row, Col } from "react-bootstrap";
import { PlayerPositionEnum, CARDS_PER_PLAYER } from "../../constants";
import PlayerView from "../../containers/PlayerView";
import { AppContext } from "../../AppContext";
import { PlayerModel, HandModel, DeckModel } from "../../models";

export const GameView = observer(() => {
    const { gameStore } = React.useContext(AppContext);
    let _deck: DeckModel;

    // create players
    let north = new PlayerModel("Harry", PlayerPositionEnum.NORTH);
    north.hand = new HandModel(north.id);
    gameStore.addPlayer(north);

    let east = new PlayerModel("Jane", PlayerPositionEnum.EAST);
    east.hand = new HandModel(east.id);
    gameStore.addPlayer(east);

    let south = new PlayerModel("Chuck", PlayerPositionEnum.SOUTH);
    south.hand = new HandModel(south.id);
    gameStore.addPlayer(south);

    let west = new PlayerModel("Phil", PlayerPositionEnum.WEST);
    west.hand = new HandModel(west.id);
    gameStore.addPlayer(west);

    // deal
    _deck = new DeckModel();
    _deck.shuffle();

    for (let turn = 0; turn < CARDS_PER_PLAYER; turn++) {
        for (let p in Object.values(PlayerPositionEnum)) {
            gameStore.playerList[p]?.hand.cards.push(_deck.nextCard());
        }
    }

    // render
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="4">col. 1</Col>
                <Col md="4">
                    <PlayerView
                        player={gameStore.playerList[PlayerPositionEnum.NORTH]}
                        isDealer={gameStore.dealer === PlayerPositionEnum.NORTH}
                        position={PlayerPositionEnum.NORTH}
                    ></PlayerView>
                </Col>
                <Col md="4">col. 3</Col>
            </Row>
            <Row>
                <Col className={styles.west}>
                    <PlayerView
                        player={gameStore.playerList[PlayerPositionEnum.WEST]}
                        position={PlayerPositionEnum.WEST}
                    ></PlayerView>
                </Col>
                <Col></Col>
                <Col className={styles.east}>
                    <PlayerView
                        player={gameStore.playerList[PlayerPositionEnum.EAST]}
                        position={PlayerPositionEnum.EAST}
                    ></PlayerView>
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col className={styles.south}>
                    <PlayerView
                        player={gameStore.playerList[PlayerPositionEnum.SOUTH]}
                        position={PlayerPositionEnum.SOUTH}
                    ></PlayerView>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
});
