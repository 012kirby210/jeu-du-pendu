import React from 'react';
import { render, screen } from '@testing-library/react';
import Cardboard from '../Cardboard.js';

describe("A cardboard is made of cards which represents a word", () => {
    const word = [
        {symbol:'h',feedback:'hidden'},
        {symbol:'e',feedback:'hidden'},
        {symbol:'l',feedback:'hidden'},
        {symbol:'l',feedback:'hidden'},
        {symbol:'o',feedback:'hidden'}
    ];
    test('The number of cards equals the length of the word passed as a prop', () => {
        render(<Cardboard word={word}/>);
        expect(screen.getAllByTestId('card-element').length).toEqual(word.length);
    });
    test('All the visible state of the cards reflect the word passed as a prop', () => {
        const randomizedStateWord = word.map((element) => {
            return { symbol: element.symbol, feedback: (Math.floor(Math.random()*Math.floor(100))%2) === 0 ? "visible" : "hidden" };
        });
        const hiddenLength = (randomizedStateWord.filter( (elem) => elem.feedback==="hidden")).length;
        render(<Cardboard word={randomizedStateWord}/>);
        expect(screen.getAllByText('?').length).toEqual(hiddenLength);
        expect(screen.getAllByTestId('card-element').length - screen.getAllByText('?').length).toEqual(word.length - hiddenLength);
    });
    test('All the cards stated as visible should expose the letter as a text', () => {
        const randomizedStateWord = word.map((element) => {
            return { symbol: element.symbol, feedback: (Math.floor(Math.random()*Math.floor(100))%2) === 0 ? "visible" : "hidden" };
        });
        render(<Cardboard word={randomizedStateWord}/>);
        randomizedStateWord
            .filter((e)=> e.feedback==="visible")
            .map( (e) => e.symbol)
            .map( (l) => { expect(screen.getAllByText(l)[0]).toBeInTheDocument() });
    });
});