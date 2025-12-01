const express = require("express");
const app = express();
const path = require("path");

// Serve static website files
app.use(express.static(path.join(__dirname, "public")));

// Use Render's port or fallback to 3000 for local testing
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
