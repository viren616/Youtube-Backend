import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config()

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.get('/', (req, resp) => {
    resp.send("hello");
});

app.get('/api/jokes', (res,resp) => {
    const jokes = [
        {
            id: 1,
            title: "first joke",
            content: "this is first joke"
        },
        {
            id: 2,
            title: "second joke",
            content: "this is second joke"
        },
        {
            id: 3,
            title: "third joke",
            content: "this is third joke"
        },
        {
            id: 4,
            title: "fourth joke",
            content: "this is fourth joke"
        },
        {
            id: 5,
            title: "fifth joke",
            content: "this is fifth joke"
        }

    ];
    resp.send(jokes);
})



app.listen(port, () => {
    console.log("server is running " + port)
});