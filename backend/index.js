const app = require("./app");
const db = require("./db");

db.connect().then(() => {
  console.log("Connected to MongoDB: " + db.url);
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server started on port ${port}...`));
