import { it, expect, describe } from 'vitest'
import {render,screen} from "@testing-library/react"
import "@testing-library/jest-dom/vitest";
import { User } from '../../src/entities';
import UserAccount from '../../src/components/UserAccount';

describe('UserAccount', () => {
    it('should render user name', () => {
        // make fake user 
        const user : User = {id: 1, name: "Gaurav"};
        render(<UserAccount user={user}/>);

        expect(screen.getByText(user.name)).toBeInTheDocument();
    });
    it('should render edit button when user is admin', () => {
        // make fake user 
        const user : User = {id: 1, name: "Gaurav", isAdmin:true};
        render(<UserAccount user={user}/>);

        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/edit/i);
    })
    // it('should not render edit button when user is not admin', () => {
    //     // make fake user 
    //     const user : User = {id: 1, name: "Gaurav"};
    //     render(<UserAccount user={user}/>);

    //     // now we use the queryByRole because button is inside div and div in not have any role
    //     const button = screen.queryByRole("button");
    //     expect(button).not.toBeInTheDocument();
    // })
})