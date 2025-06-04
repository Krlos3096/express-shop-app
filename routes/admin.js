import express from "express";

const adminRoutes = express.Router();

adminRoutes.get('/add-product',(req, res, next) => {
  res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

adminRoutes.post('/add-product',(req, res, next) => {
  console.log("Product:", req.body);
  res.redirect('/');
});

export default adminRoutes;