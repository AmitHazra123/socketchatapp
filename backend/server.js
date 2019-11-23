// require library modules
const express = require("express"); // server
const bodyParser = require("body-parser"); // body parser to parse body as json object
const dotenv = require("dotenv"); // environment configuration helper module
const socketIo = require("socket.io"); // for live change
const passport = require("passport"); // for authentication
const cors = require("cors");
const mongoose = require("mongoose"); // mongo DB driver
const http = require("http");

// require database connection helper module
const connectDB = require("./config/db");

// require routes
const auth = require("./routes/api/auth");
const chat = require("./routes/api/chat");

// load environment variables
dotenv.config({ path: "./config/config.env" });

// connect to database
connectDB();

// configure node as server
const app = express();

// configure http server
const server = http.Server(app);

// use body-parser to parse body form as json object
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cors
app.use(cors());

// passport middleware
app.use(passport.initialize());

// use routes
app.use("/api/auth", auth);
app.use("/api/chat", chat);

// configure passport
require("./config/passport")(passport);

// create io
const io = socketIo(server);

// socket server on connection
io.on("connection", socket => {
  console.log("new client connected");

  // load database
  const Chat = mongoose.model("chat");

  // load changed stream from database using watch
  const changeStream = Chat.watch();

  // when change happen in the stream
  changeStream.on("change", change => {
    // check the operation type
    switch (change.operationType) {
      case "insert":
        socket.emit("change", "insert");
        break;

      case "update":
        socket.emit("change", "update");
        break;

      case "delete":
        socket.emit("change", "delete");
        break;

      default:
        break;
    }
  });
});

// socket server listen
const sport = process.env.SOCKET_IO_PORT;
server.listen(sport, () =>
  console.log("Socket Server running on port ", sport)
);

// node server listen
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`node server is running on port ${port}`);
});
