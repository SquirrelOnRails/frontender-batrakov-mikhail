import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import WordDisplay from "./WordDisplay";
import LetterInput from "./LetterInput";
import { hangmanActions } from "../../store/hangman-slice";

const Game = () => {
  const dispatch = useDispatch();
  const currentGame = useSelector((state) => state.hangman.currentGame);

  const onNewLetterSubmit = (letter) => {
    dispatch(hangmanActions.guessLetter(letter));
  };

  return (
    <Fragment>
      <WordDisplay
        word={currentGame.hiddenWord}
        letters={currentGame.usedLetters}
      />
      <LetterInput onSubmit={onNewLetterSubmit} />
    </Fragment>
  );
};

export default Game;