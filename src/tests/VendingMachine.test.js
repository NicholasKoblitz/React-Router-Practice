import { render, screen } from '@testing-library/react';
import VendingMachine from '../components/VendingMachine';

// Smoke Test
it('should render', () => {
    render(<VendingMachine/>);
})