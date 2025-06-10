import express from "express";
import ProductsController from "../controllers/products.js";

const adminRoutes = express.Router();

adminRoutes.get('/add-product', ProductsController.getAddProduct);

adminRoutes.post('/add-product', ProductsController.showProductAdded);

export default adminRoutes;