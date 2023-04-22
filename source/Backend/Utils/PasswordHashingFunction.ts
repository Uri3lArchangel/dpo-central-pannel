import crypto from "crypto";

const salt = process.env.SALT;

export const generatePassword = (seed1: string, seed2: string) => {
  let b = crypto
    .createHash("sha512")
    .update(seed1 + seed2)
    .digest("hex");
  if (salt) {
    let salted = `${salt}${b}${salt}`;
    let c = crypto.createHash("sha256").update(salted).digest("hex");
    return c;
  } else {
    return null;
  }
};
