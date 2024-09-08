
const AWS = require('aws-sdk')
const uploadToS3 = (data, filename) => {

    // const BUCKET_NAME = 'expensebackendbucket';
    // const IAM_USER_KEY = 'AKIA5FTZDE2WERNHBN4K';
    // const IAM_USER_SECRET = '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';

    let s3bucket = new AWS.S3({
        accessKeyId: IAM_USER_KEY,
        secretAccessKey: IAM_USER_SECRET,
    })


    var params = {
        Bucket: BUCKET_NAME,
        Key: filename,
        Body: data,
        ACL: 'public-read'
    }
    return new Promise((resolve, reject) => {
        s3bucket.upload(params, (err, s3response) => {
            if (err) {
                console.log('Something is wrong', err)
                reject(err)
            } else {
                console.log('success', s3response.Location)
                resolve(s3response.Location)
                

            }
        })
    })

}


module.exports = {
     uploadToS3
}