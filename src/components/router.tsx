import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeMenu from './HomeMenu';
import SalePage from './Sale'; // Импортируйте вашу страницу с распродажами
import BasketPage from './BasketPage'; // Импортируйте вашу страницу с корзиной
import ClothInfoPage from './ClothInfo';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeMenu />} />
                <Route path="/sale" element={<SalePage />} />
                <Route path="/basket" element={<BasketPage />} />
                <Route path="/clothes/:itemId" element={<ClothInfoPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
