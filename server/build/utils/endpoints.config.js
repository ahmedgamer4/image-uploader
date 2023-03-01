import dotenv from 'dotenv';
dotenv.config();
export default {
    Port: process.env.PORT,
    cloudName: process.env.CLOUD_NAME,
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET,
};
//# sourceMappingURL=endpoints.config.js.map