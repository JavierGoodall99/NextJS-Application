import { z } from "zod";
import schema from "../users/shema";

const shema = z.object({
  name: z.string().min(3),
  price: z.number().min(1).max(100),
});

export default schema;