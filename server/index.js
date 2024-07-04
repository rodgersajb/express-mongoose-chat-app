const express = require("express");
require("./db/mongoose");
const { notFound, handleError } = require("./Middleware/error");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes")
const cors = require("cors");
const User = require("./models/userModel");
const conversation = require("./controllers/conversationController");

const app = express();

app.use(cors())
// app.use(
//   cors({
//     origin: "http://localhost:3001",
//     credentials: true,
//   })
// );
app.use(express.json());
const port = 3001;

app.use("/api/user", userRoutes);

app.use("/api/conversations", chatRoutes)


app.use(notFound);
app.use(handleError);

// mmmmmm cookie

app.get("/set-cookies", (req, res) => {
  res.setHeader("Set-Cookie", "newUser=true");
  res.send("you got the cookies! ");
});

app.get("/read-cookies");



app.listen(port, () => {
  console.log(`we are up and running on port ${port}`);
});
