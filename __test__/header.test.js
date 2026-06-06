import { fireEvent, render, screen } from '@testing-library/react';
import HeaderComponent from '../src/components/HeaderComponent';
import { Provider } from 'react-redux';
import store from '../src/utils/store/store.js';
import { BrowserRouter } from 'react-router-dom';
import "@testing-library/jest-dom"
import CartPage from "../src/components/pages/CartPage.jsx";
import { MemoryRouter, Routes, Route } from "react-router-dom";
test("checking for header component rendered or not", () => {


    render(
        <BrowserRouter>
            <Provider store={store}>
                <HeaderComponent />
            </Provider>
        </BrowserRouter>
    );

    const headerElement = screen.getByText("🛒");

    expect(headerElement).toBeInTheDocument();
})

test("checking for cart icon in header clicking ", () => {

    render(

        <Provider store={store}>
            <MemoryRouter initialEntries={["/"]}>
                <Routes>
                    <Route
                        path="/"
                        element={<HeaderComponent />}
                    />
                    <Route
                        path="/cart"
                        element={<CartPage />}
                    />
                </Routes>
            </MemoryRouter>
        </Provider>

    );

    const cartButton = screen.getByText("🛒");
    fireEvent.click(cartButton);

    const cartPageElement = screen.getByText("Add some delicious food items.");

    expect(cartPageElement).toBeInTheDocument();


});