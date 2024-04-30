import "dotenv/config";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.DB_URL, process.env.DB_API_KEY);

export default supabase;
