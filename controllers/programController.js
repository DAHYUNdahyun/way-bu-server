import supabase from "../db.js";

export const getPrograms = async (req, res) => {
  // api 주소 뒤의 쿼리 스트링으로 부터 키워드를 받아옴
  const {
    query: { keyword },
  } = req;
  // 키워드가 존재하면 해당 키워드를 포함한 프로그램 select
  if (keyword) {
    const { data, error } = await supabase
      .from("PROGRAM")
      .select("*")
      .like("program_name", `%${keyword}%`);
    if (error) console.log(error.message);
    return res.status(200).json(data);
    // 키워드가 존재하지 않으면 모든 프로그램 select
  } else {
    const { data, error } = await supabase
      .from("PROGRAM")
      .select(
        `*, BEACH(id, beach_name, theme_color), BUSINESS(business_name), SPORT(id, theme_color, title)`
      );
    if (error) console.log(error.message);
    return res.status(200).json(data);
  }
};
