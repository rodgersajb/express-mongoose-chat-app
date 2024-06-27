const express = require("express");
require("./db/mongoose");
const userRoutes = require("./routes/userRoutes")
const app = express()


app.use(express.json())
const port = 3001

app.use('/api/user', userRoutes)

app.listen(port, () => {
  console.log(`we are up and running on port ${port}`);
});
