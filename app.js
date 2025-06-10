import express from "express";
import bodyParser from "body-parser";
import path from "path";
import __dirname from "./utils/path.js";
import ErrorController from "./controllers/error.js";

// Importing routes
import adminRoutes from "./routes/admin.js";
import shopRoutes from "./routes/shop.js";

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/favicon.ico', (req, res) => res.status(204));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// Handling 404 errors
app.use(ErrorController.get404);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
} );
