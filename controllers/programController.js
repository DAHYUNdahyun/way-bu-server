import supabase from "../db.js";

export const getPrograms = async (req, res) => {
  const { data, error } = await supabase.from("BUSINESS_SAMPLE").select("*");
  if (error) console.log(error.message);

  res.status(200).json({ ok: true, data });
};
