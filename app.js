import express from "express";
import bodyParser from "body-parser";
import path from "path";
import __dirname from "./utils/path.js";

// Importing routes
import adminRoutes from "./routes/admin.js";
import shopRoutes from "./routes/shop.js";

const app = express();

app.get('/favicon.ico', (req, res) => res.status(204));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// Handling 404 errors
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname,'/views/404.html'));
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
} );
