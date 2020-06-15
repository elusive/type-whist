import { DeckModel, CardModel } from "../../src/models";
import { SuitEnum, CardValueEnum } from "../../src/constants";
import { expect } from "chai";

describe("DeckModel", () => {
    describe("constructor", () => {
        it("should create deck with all standard cards.", () => {
            // arrange
            const expectedSuit: SuitEnum = SuitEnum.HEARTS;
            const expectedValue: CardValueEnum = CardValueEnum.JACK;

            // act
            let card = new CardModel(expectedSuit, expectedValue);
            let deck = new DeckModel();

            // assert
            expect(deck.cards).to.include(card);
        });
    });
});
