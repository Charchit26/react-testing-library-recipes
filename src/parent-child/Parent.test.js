import {render, screen} from "@testing-library/react";
import Parent from "./Parent";

describe('<Parent />', () => {
    it('renders the parent text', () => {
        render(<Parent />)
        expect(screen.getByText(/Hello, I am the parent./i)).toBeInTheDocument();
    })

    it('renders the child text', () => {
        render(<Parent />)
        expect(screen.getByText(/Hi!, I am the child of my parent/i)).toBeInTheDocument();
        expect(screen.getByText(/some data parent passed to child - 123 child testing/i)).toBeInTheDocument();
    })
});