import { render,screen } from '@testing-library/react'
import { it, expect, describe } from 'vitest'
import Greet from '../../src/components/Greet'
// custom made import by us
import "@testing-library/jest-dom/vitest";  // now it provide custom matchers

describe('Greet', () => {
    it('should render the hello with name when name is provided', () => {
        render(<Greet name="Gaurav"/>);

        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument(); // vo heading me hai ya nhi
        //! in the toHaveTextContent me hm string or regex pass krte hai you passs reges for better robust test
        expect(heading).toHaveTextContent("Hello Gaurav"); // vo text me hai ya nhi
    })
    it('should render the login when name is not provided', () => {
        render(<Greet />);

        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument(); // vo heading me hai ya nhi
        expect(button).toHaveTextContent(/login/i); // vo text me hai ya nhi
    })
});