import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../App';

describe("testing the monitor of the react-testing-library", () =>
{
    it('should render and screen the html',() => {
        render(<App/>);
    });
});
