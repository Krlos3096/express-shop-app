import express from "express";
import ProductsController from "../controllers/products.js";

const shopRoutes = express.Router();

shopRoutes.get('/', ProductsController.getProducts);

export default shopRoutes;