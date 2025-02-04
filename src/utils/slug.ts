import { customAlphabet } from "nanoid";

export const createSlug = () => customAlphabet("1234567890abcdef", 6)();
