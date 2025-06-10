import express from "express";
import __dirname from "../utils/path.js";
import path from "path";

const adminRoutes = express.Router();

export const products = [];

adminRoutes.get('/add-product', (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
});

adminRoutes.post('/add-product',(req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

export default adminRoutes;