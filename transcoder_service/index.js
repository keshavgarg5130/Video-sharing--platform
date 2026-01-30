import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import KafkaConfig from "./kafka/kafka.js";

dotenv.config();
const PORT = process.env.PORT || 8081;

const app = express();
app.use(cors({
    origin: "*",
    allowedHeaders: "*",
}));
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Transcoder Service')
})
const kafkaconfig =  new KafkaConfig()
kafkaconfig.consume("transcoder",(value)=>{
    console.log("got data from kafka : " , value)
})
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
})
