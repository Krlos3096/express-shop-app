import express from "express";
import __dirname from "../utils/path.js";
import path from "path";

const adminRoutes = express.Router();

adminRoutes.get('/add-product',(req, res, next) => {
  res.sendFile(path.join(__dirname, '/views/add-product.html'));
});

adminRoutes.post('/add-product',(req, res, next) => {
  console.log("Product:", req.body);
  res.redirect('/');
});

export default adminRoutes;