import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CounterApp from './CounterApp';

//Arrange = iniciar variables
//Act = aplicar estimulos al arrange
//Assert = Resultados esperados

describe('<CounterApp />', () => {
  test('it should mount', () => {
    render(<CounterApp />);
    
    const counterApp = screen.getByTestId('CounterApp');

    expect(counterApp).toBeInTheDocument();
  });
});