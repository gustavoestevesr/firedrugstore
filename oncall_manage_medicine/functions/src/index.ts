import { logger } from "firebase-functions/v2";
import { onRequest } from "firebase-functions/v2/https";

export const oncall_manage_medicine = onRequest((request, response) => {
    logger.info("Hello logs!", {structuredData: true});
    response.send("Hello from Firebase!");
})