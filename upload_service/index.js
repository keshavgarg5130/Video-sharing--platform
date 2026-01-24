import express from 'express';
import cors from 'cors';
import uploadRouter from "./routes/upload.route.js";
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 80880;
const app = express();
app.use(cors({
    origin: "*",
    allowedHeaders: "*",
}));

app.use(express.json());
app.use('/upload', uploadRouter);

app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
})
