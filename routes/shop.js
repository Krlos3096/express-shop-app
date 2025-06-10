import express from "express";
import { products } from "./admin.js";

const shopRoutes = express.Router();

shopRoutes.get('/',(req, res, next) => {
  console.log('Products:', products);
  res.render('shop', { products });
});

export default shopRoutes;