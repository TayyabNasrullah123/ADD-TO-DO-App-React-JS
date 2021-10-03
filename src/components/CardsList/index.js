import React, { useState } from "react";

import {
  CardOuterWrapper,
  CardWrapper,
  CardBody,
  CardFieldset,
  CardInput,
} from "../AddCard/addCard.style";
import { Button } from "./cardsList.style";

export default () => {
  const [cards, setCards] = useState(() =>
    JSON.parse(localStorage.getItem("cards") || "[]")
  );
  const [ids, setIds] = useState([]);

  const deleteCard = () => {
    const filterArray = cards.filter((card) => !ids.includes(card.id));
    localStorage.setItem("cards", JSON.stringify(filterArray));
    setCards(filterArray);
  };
  const cardIds = (id) => {
    let checker = document.getElementById(id);
    if (checker.checked) {
      ids.push(id);
    } else {
      let index = ids.indexOf(id);
      ids.splice(index, 1);
    }
  };
  return (
    <div className="list-group">
      {cards && cards.length !== 0 && (
        <Button onClick={deleteCard} primary>
          Delete Card
          {console.log(cards.length)}
        </Button>
      )}
      <CardOuterWrapper>
        {cards && cards.length > 0 ? (
          cards.map((card) => {
            return (
              <CardWrapper key={card.id} listPadding listMargin>
                <CardBody listPadding>
                  <CardFieldset>
                    <CardInput listWidth>
                      <input
                        onClick={() => cardIds(card.id)}
                        id={card.id}
                        type="checkbox"
                      />
                      The Card Name is :
                      <span style={{ color: "mediumblue" }}> {card.name}</span>
                    </CardInput>
                  </CardFieldset>
                </CardBody>
              </CardWrapper>
            );
          })
        ) : (
          <p
            style={{
              padding: 20,
            }}
          >
            No Cards Found!
          </p>
        )}
      </CardOuterWrapper>
    </div>
  );
};
