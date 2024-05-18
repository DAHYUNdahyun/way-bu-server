import supabase from "../db.js";

export const getSports = async (req, res) => {
  const { data, error } = await supabase.from("SPORT").select("*");
  if (error) console.log(error.message);
  return res.status(200).json(data);
};
