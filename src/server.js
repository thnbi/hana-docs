import express from "express"
import url from "url"
import path from "path"
import http from "http"
import { Server } from "socket.io"

const app = express();
const port = process.env.port || 3030;

const currentPath = url.fileURLToPath(import.meta.url);
const publicPath = path.join(currentPath, "../..", "public");
app.use(express.static(publicPath));

const httpServer = http.createServer(app);

httpServer.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});

const io = new Server(httpServer);

io.on("connection", () => {
   console.log("New connection");
});