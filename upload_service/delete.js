import AWS from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();

AWS.config.update({
    region: "ap-south-1",
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const s3 = new AWS.S3();
const bucketName = process.env.AWS_BUCKET;

async function abortAllIncompleteUploads() {
    try {
        console.log("hehe")
        const uploads = await s3
            .listMultipartUploads({ Bucket: bucketName })
            .promise()
            .catch((err) => {
                console.error("Error listing multipart uploads:", err);
                return null;
            });

        if (!uploads.Uploads || uploads.Uploads.length === 0) {
            console.log("NOT found.");
            return;
        }

        console.log(`Found ${uploads.Uploads.length} incomplete uploads:`);

        for (const upload of uploads.Uploads) {
            console.log(
                `Aborting upload: Key="${upload.Key}", UploadId="${upload.UploadId}"`
            );

            await s3
                .abortMultipartUpload({
                    Bucket: bucketName,
                    Key: upload.Key,
                    UploadId: upload.UploadId,
                })
                .promise();

            console.log("Aborted",upload.Key);
        }

        console.log("all aborted");
    } catch (err) {
        console.error("error:", err);
    }
}

abortAllIncompleteUploads();
