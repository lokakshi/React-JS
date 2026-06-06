import { render, screen } from "@testing-library/react"
import Contact from "../src/components/pages/Contact"
import "@testing-library/jest-dom";

describe("Contact component", () => {
    // describe block is used to group related tests together, in this case we are grouping all the tests related to the Contact component
    // in place of test we can also use it block, both are same and can be used interchangeably
    it("contact form loaded or not", () => {
        // This will be rendered on jsdom
        render(<Contact />);
        // Now to check if the contact component is loaded or not we check 
        // screen object which is provided by the testing library and we use getByText method to check if the text "Contact Us" is present in the document or not
        const heading = screen.getByText("Contact Us");
        // To verify that the heading is present in the document
        expect(heading).toBeInTheDocument();
    })
    test("contact button loaded or not", () => {
        // This will be rendered on jsdom
        render(<Contact />);
        // Now to check if the contact component is loaded or not we check 
        // screen object which is provided by the testing library and we use getByText method to check if the text "Contact Us" is present in the document or not
        const button = screen.getByRole("button", { name: "Send Message" });
        // To verify that the heading is present in the document
        expect(button).toBeInTheDocument();
    })

    test("contact form input fields loaded or not", () => {
        // This will be rendered on jsdom
        render(<Contact />);
        const input = screen.getAllByRole("textbox");
        // To verify that the heading is present in the document
        console.log(input);
        expect(input.length).toBe(4);
    })
})
