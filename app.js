const {S3Client, PutObjectAclCommand} = require("@aws-sdk/client-s3")
const S3Client = new s3Client({
    region:"eu-north-1",
    endpoint:"https://s3-eu-north-1/aws-s3-fileupload",
    credentials:{
        accessKeyId:"AKIASWQD4NEHQ7G3KRVT",
        secretAccessKey:"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"
    }
})