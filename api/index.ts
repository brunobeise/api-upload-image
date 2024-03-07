import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors())

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;