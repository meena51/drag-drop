import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import uiRoute from './ui/ui.route.js';
// Define __dirname for ES module compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set up express app
const app = express();
app.use(express.json());
app.use(cors());

// Setup static file serving and views
app.use("/resources", express.static(path.join(__dirname, 'public')));
app.use("/views", express.static(path.join(__dirname, 'views')));
app.set('view engine', 'hbs');

app.use("/", uiRoute)

const PORT = process.env.PORT || 8085;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
