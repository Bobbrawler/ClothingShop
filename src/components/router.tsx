import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeMenu from './HomeMenu';
import SalePage from './SalePage'; // Импортируйте вашу страницу с распродажами
import BasketPage from './BasketPage'; // Импортируйте вашу страницу с корзиной

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeMenu />} />
                <Route path="/sale" element={<SalePage />} />
                <Route path="/basket" element={<BasketPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
