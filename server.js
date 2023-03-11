const app = require("./app");
require("dotenv").config();

const mongoose = require("mongoose");
const { DB_HOST, PORT = 4000 } = process.env;

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() =>
    app.listen(PORT, () => {
      console.log("Server running. Use our API on port: 4000");
    })
  )
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
