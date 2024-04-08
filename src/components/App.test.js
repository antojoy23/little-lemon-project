import { render, screen } from '@testing-library/react';
import TableReservation from './TableReservation';
// Reserve table testing

test('Renders table reservation heading', () => {
  render(<TableReservation />);
  const headingElement = screen.getByText("")
})