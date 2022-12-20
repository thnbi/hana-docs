import io from "./server.js";

io.on("connection", (socket) => {
   console.log("New connection ID: " + socket.id);

   socket.on("text-change", (text) => {
      socket.broadcast.emit("text-change-client", text);
   });
});
