const {S3Client, PutObjectCommand} = require("@aws-sdk/client-s3")
const fs = require("fs")
const dotEnv = require("dotenv").config()


const s3Client = new S3Client({
    region:process.env.REGION,
    endpoint:process.env.ENDPOINT,
    credentials:{
        accessKeyId:process.env.ACCESSKEYID,
        secretAccessKey:process.env.SECRETACCESSKEY
    }
})

const uploadFile = async()=>{
    try{
        const fileContent = fs.readFileSync("pic.jpg")
        const object = new PutObjectCommand({
            Bucket:"aws-s3-fileupload",
            Key:"pic.jpg",
            Body: fileContent
        });
        await s3Client.send(object)
    }catch(e){
        console.log(e)
    }
}

uploadFile()