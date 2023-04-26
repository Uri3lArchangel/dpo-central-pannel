import crypto from "crypto";
const KEY = process.env.DACERTKEY!;

export const dacertSign = (data:Object[]) => {
 return crypto
    .createHash("sha512")
    .update(KEY + JSON.stringify(data) + KEY)
    .digest("hex");
};
