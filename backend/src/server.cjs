require("dotenv").config();
const app = require("./app.cjs");

const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`Server is listening on port ${PORT}...`));
