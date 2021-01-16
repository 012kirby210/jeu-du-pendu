import React from 'react'
import { render, screen } from '@testing-library/react'
import Card from '../Card.js';

describe("A card got two side 1 hidden, 1 visible", () => {
    test('A hidden card should expose a ?', () => {
        render(<Card letter="a" feedback="hidden"/>);
        expect(screen.getByText('?')).toBeInTheDocument();
    });
    test('An exposed card should expose the letter given in prop', () => {
        render(<Card letter="a" feedback="visible"/>);
        expect(screen.getByText('a')).toBeInTheDocument();
    });
});