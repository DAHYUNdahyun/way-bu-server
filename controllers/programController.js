import supabase from "../db.js";

export const getPrograms = async (req, res) => {
  const {
    query: { keyword },
  } = req;
  if (keyword) {
    const { data, error } = await supabase
      .from("PROGRAM")
      .select("*")
      .eq("program_name", "test2");
    if (error) console.log(error.message);

    return res.status(200).json({ ok: true, data });
  } else {
    const { data, error } = await supabase.from("PROGRAM").select("*");
    if (error) console.log(error.message);

    return res.status(200).json({ ok: true, data });
  }
};
