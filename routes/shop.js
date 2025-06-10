import express from "express";
import { products } from "./admin.js";

const shopRoutes = express.Router();

shopRoutes.get('/', (req, res, next) => {
  const productsLocal = products;
  res.render('shop', {
    prods: productsLocal,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: productsLocal.length > 0,
    activeShop: true,
    productCSS: true
  });
});

export default shopRoutes;