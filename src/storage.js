const aws = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const endpoint = new aws.Endpoint(process.env.ENDPOINT_S3);

const SUPABASE_URL = process.env.SUPABASE_URL;

const s3 = new aws.S3({
    endpoint,
    credentials: {
        accessKeyId: process.env.KEY_ID,
        secretAccessKey: process.env.APP_KEY
    },
    sslEnabled: false,
    s3ForcePathStyle: true,
});

const uploadFile = async (originalName, buffer, mimetype) => {

    const nomeUnico = `${uuidv4()}${path.extname(originalName)}`;

    const arquivo = await s3.upload({
        Bucket: process.env.SUPABASE_BUCKET,
        Key: nomeUnico,
        Body: buffer,
        ContentType: mimetype
    }).promise();

    const urlPublica = `${SUPABASE_URL}/storage/v1/object/public/PDV%20Imagens/${nomeUnico}`;

    return {
        url: urlPublica,
        path: arquivo.Key
    };
};

const excluirImagem = async (key) => {

    await s3.deleteObject({
        Bucket: process.env.SUPABASE_BUCKET,
        Key: key
    }).promise();
};

module.exports = {
    uploadFile,
    excluirImagem,
    s3
};