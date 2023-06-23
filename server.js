"use strict";

import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

// Constants
const PORT = 8080;

// service end points
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

// end points
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
