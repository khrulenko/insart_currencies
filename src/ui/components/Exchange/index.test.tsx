import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Exchange from '.';
import { mockedCurrencies } from '../../../common/mocks';
import { renderWithRedux } from '../../../common/testUtils';

const errorState = {
  currencies: [],
  serverError: true,
};

const loadedState = {
  currencies: mockedCurrencies,
  serverError: false,
};

describe('Exchange:', () => {
  test('change input is disabled if there is a server error', () => {
    renderWithRedux(<Exchange />, { initialState: errorState });

    const amountInput = screen.getByLabelText(/change/i);

    expect(amountInput).toBeDisabled();
  });

  test('change input is active if there is no a server error', () => {
    renderWithRedux(<Exchange />, { initialState: loadedState });

    const amountInput = screen.getByLabelText(/change/i);

    expect(amountInput).toBeEnabled();
  });

  test('swap button should replace currencies with each other on click', () => {
    renderWithRedux(<Exchange />, { initialState: loadedState });

    const chageInput = screen.getByText(/USD/i);
    const getInput = screen.getByText(/UAH/i);
    const swap = screen.getByTestId('swapButton');

    expect(swap).toBeInTheDocument();

    userEvent.click(swap);

    expect(chageInput).toHaveTextContent(/UAH/i);
    expect(getInput).toHaveTextContent(/USD/i);
  });
});
