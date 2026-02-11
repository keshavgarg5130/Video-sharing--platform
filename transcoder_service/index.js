import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import KafkaConfig from "./kafka/kafka.js";
import s3ToS3 from "./hls/trancoder.js";

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
kafkaconfig.consume("transcoder", async (value) => {
    try {
        console.log("Got data from Kafka:", value);

        const { title, url } = JSON.parse(value);

        console.log(`Starting transcoding for: ${title}`);
        await s3ToS3(title, url);
        console.log(`Transcoding completed for: ${title}`);
    } catch (err) {
        console.error("Error processing Kafka message:", err);
        throw err;
    }
});
app.get('/transcode', (req, res) => {
    s3ToS3(value.title, value.url);
    res.send('Transcoding done');
})
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
})
