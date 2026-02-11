import KafkaConfig from "../kafka/kafka.js";

const sendMessageToKafka = async (title, url, res) => {
    console.log("got here in upload service...")
    try {
        const message = {
            "title": title,
            "url": url,
        }
        console.log("body : ", message)
        const kafkaconfig = new KafkaConfig()
        const msgs = [
            {
                key: "video",
                value: JSON.stringify(message)
            }
        ]
        const result = await kafkaconfig.produce("transcoder", msgs)
        console.log("result of produce : ", result)
        res.status(200).json("message uploaded successfully")

    } catch (error) {
        console.log(error)
    }
}
export default sendMessageToKafka;
