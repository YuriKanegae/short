import fastify from "fastify";

const PORT      = 3000;
const server    = fastify();

server.get("/", (req, res) => { res.status(200).send({}); });

server.listen(
    {
        port: PORT,
        host: "0.0.0.0"
    },
    () => console.log("Server is running on port: " + PORT)
);