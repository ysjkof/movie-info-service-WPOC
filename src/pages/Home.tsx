import styled from "styled-components";
import Movie from "../components/Movie";

function Home() {
  return (
    <Container>
      <Movies>
        {arr.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </Movies>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor.blue};
  color: ${(props) => props.theme.color.default};
`;

const Movies = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 4rem;
  gap: 2rem;
  justify-content: center;
`;

const arr = [
  {
    id: 43134,
    imdb_code: "tt10128118",
    title: "Heilung - Lifa",
    title_english: "Heilung - Lifa",
    title_long: "Heilung - Lifa (2017)",
    slug: "heilung-lifa-2017",
    year: 2017,
    rating: 9.4,
    runtime: 77,
    genres: ["Action"],
    summary: "",
    description_full: "",
    synopsis: "",
    yt_trailer_code: "",
    language: "en",
    mpa_rating: "",
    background_image:
      "https://yts.mx/assets/images/movies/heilung_lifa_2017/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/heilung_lifa_2017/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/heilung_lifa_2017/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/heilung_lifa_2017/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/heilung_lifa_2017/large-cover.jpg",
    state: "ok",
    date_uploaded: "2022-06-30 22:38:10",
    date_uploaded_unix: 1656621490,
    like: false,
  },
  {
    id: 30440,
    imdb_code: "tt1297265",
    title: "Avenged Sevenfold: Live in the L.B.C. & Diamonds in the Rough",
    title_english:
      "Avenged Sevenfold: Live in the L.B.C. & Diamonds in the Rough",
    title_long:
      "Avenged Sevenfold: Live in the L.B.C. & Diamonds in the Rough (2008)",
    slug: "avenged-sevenfold-live-in-the-l-b-c-diamonds-in-the-rough-2008",
    year: 2008,
    rating: 9.4,
    runtime: 102,
    genres: ["Action", "Documentary"],
    summary:
      "Avenged Sevenfold recorded their first live DVD at Long Beach Arena.",
    description_full:
      "Avenged Sevenfold recorded their first live DVD at Long Beach Arena.",
    synopsis:
      "Avenged Sevenfold recorded their first live DVD at Long Beach Arena.",
    yt_trailer_code: "bDQLCne_CGg",
    language: "en",
    mpa_rating: "",
    background_image:
      "https://yts.mx/assets/images/movies/avenged_sevenfold_live_in_the_l_b_c_diamonds_in_the_rough_2008/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/avenged_sevenfold_live_in_the_l_b_c_diamonds_in_the_rough_2008/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/avenged_sevenfold_live_in_the_l_b_c_diamonds_in_the_rough_2008/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/avenged_sevenfold_live_in_the_l_b_c_diamonds_in_the_rough_2008/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/avenged_sevenfold_live_in_the_l_b_c_diamonds_in_the_rough_2008/large-cover.jpg",
    state: "ok",
    date_uploaded: "2021-04-15 16:08:57",
    date_uploaded_unix: 1618495737,
    like: false,
  },
  {
    id: 3709,
    imdb_code: "tt0111161",
    title: "The Shawshank Redemption",
    title_english: "The Shawshank Redemption",
    title_long: "The Shawshank Redemption (1994)",
    slug: "the-shawshank-redemption-1994",
    year: 1994,
    rating: 9.3,
    runtime: 142,
    genres: ["Action", "Crime", "Drama"],
    summary:
      "Andy Dufresne is sent to Shawshank Prison for the murder of his wife and her secret lover. He is very isolated and lonely at first, but realizes there is something deep inside your body that people can&#39;t touch or get to....&#39;HOPE&#39;. Andy becomes friends with prison &#39;fixer&#39; Red, and Andy epitomizes why it is crucial to have dreams. His spirit and determination lead us into a world full of imagination, one filled with courage and desire. Will Andy ever realize his dreams?",
    description_full:
      "Andy Dufresne is sent to Shawshank Prison for the murder of his wife and her secret lover. He is very isolated and lonely at first, but realizes there is something deep inside your body that people can&#39;t touch or get to....&#39;HOPE&#39;. Andy becomes friends with prison &#39;fixer&#39; Red, and Andy epitomizes why it is crucial to have dreams. His spirit and determination lead us into a world full of imagination, one filled with courage and desire. Will Andy ever realize his dreams?",
    synopsis:
      "Andy Dufresne is sent to Shawshank Prison for the murder of his wife and her secret lover. He is very isolated and lonely at first, but realizes there is something deep inside your body that people can&#39;t touch or get to....&#39;HOPE&#39;. Andy becomes friends with prison &#39;fixer&#39; Red, and Andy epitomizes why it is crucial to have dreams. His spirit and determination lead us into a world full of imagination, one filled with courage and desire. Will Andy ever realize his dreams?",
    yt_trailer_code: "PLl99DlL6b4",
    language: "en",
    mpa_rating: "R",
    background_image:
      "https://yts.mx/assets/images/movies/The_Shawshank_Redemption_1994/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/The_Shawshank_Redemption_1994/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/The_Shawshank_Redemption_1994/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/The_Shawshank_Redemption_1994/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/The_Shawshank_Redemption_1994/large-cover.jpg",
    state: "ok",
    date_uploaded: "2015-11-01 03:20:23",
    date_uploaded_unix: 1446344423,
    like: false,
  },
  {
    id: 15553,
    imdb_code: "tt2779318",
    title: "Doctor Who The Day of the Doctor",
    title_english: "Doctor Who The Day of the Doctor",
    title_long: "Doctor Who The Day of the Doctor (2013)",
    slug: "doctor-who-the-day-of-the-doctor-2013",
    year: 2013,
    rating: 9.3,
    runtime: 77,
    genres: ["Action", "Adventure", "Drama", "Family", "Mystery", "Sci-Fi"],
    summary:
      "In 2013, something terrible is awakening in London's National Gallery; in 1562, a murderous plot is afoot in Elizabethan England; and somewhere in space an ancient battle reaches its devastating conclusion.",
    description_full:
      "In 2013, something terrible is awakening in London's National Gallery; in 1562, a murderous plot is afoot in Elizabethan England; and somewhere in space an ancient battle reaches its devastating conclusion.",
    synopsis:
      "In 2013, something terrible is awakening in London's National Gallery; in 1562, a murderous plot is afoot in Elizabethan England; and somewhere in space an ancient battle reaches its devastating conclusion.",
    yt_trailer_code: "Mkq8pnvsnQg",
    language: "en",
    mpa_rating: "",
    background_image:
      "https://yts.mx/assets/images/movies/doctor_who_the_day_of_the_doctor_2013/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/doctor_who_the_day_of_the_doctor_2013/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/doctor_who_the_day_of_the_doctor_2013/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/doctor_who_the_day_of_the_doctor_2013/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/doctor_who_the_day_of_the_doctor_2013/large-cover.jpg",
    state: "ok",
    date_uploaded: "2020-02-24 05:16:24",
    date_uploaded_unix: 1582517784,
    like: false,
  },
  {
    id: 43059,
    imdb_code: "tt7476472",
    title: "Point of No Return",
    title_english: "Point of No Return",
    title_long: "Point of No Return (2017)",
    slug: "point-of-no-return-2017",
    year: 2017,
    rating: 9.3,
    runtime: 94,
    genres: ["Documentary"],
    summary:
      "Soaring at 26,000 feet without a drop of fuel, nothing is predictable. Not the weather, not the technology. And certainly not the fate of a man, alone for five days in a fragile, first-of-its-kind aircraft with nothing but ocean below. Point of No Return takes you behind the headlines of the first solar-powered flight around the world-where two courageous pilots take turns battling nature, their own crew, and sometimes logic itself, to achieve the impossible. Not just to make history, but to inspire a revolution.",
    description_full:
      "Soaring at 26,000 feet without a drop of fuel, nothing is predictable. Not the weather, not the technology. And certainly not the fate of a man, alone for five days in a fragile, first-of-its-kind aircraft with nothing but ocean below. Point of No Return takes you behind the headlines of the first solar-powered flight around the world-where two courageous pilots take turns battling nature, their own crew, and sometimes logic itself, to achieve the impossible. Not just to make history, but to inspire a revolution.",
    synopsis:
      "Soaring at 26,000 feet without a drop of fuel, nothing is predictable. Not the weather, not the technology. And certainly not the fate of a man, alone for five days in a fragile, first-of-its-kind aircraft with nothing but ocean below. Point of No Return takes you behind the headlines of the first solar-powered flight around the world-where two courageous pilots take turns battling nature, their own crew, and sometimes logic itself, to achieve the impossible. Not just to make history, but to inspire a revolution.",
    yt_trailer_code: "",
    language: "en",
    mpa_rating: "",
    background_image:
      "https://yts.mx/assets/images/movies/point_of_no_return_2017/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/point_of_no_return_2017/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/point_of_no_return_2017/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/point_of_no_return_2017/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/point_of_no_return_2017/large-cover.jpg",
    state: "ok",
    date_uploaded: "2022-06-27 19:04:25",
    date_uploaded_unix: 1656349465,
    like: false,
  },
  {
    id: 3304,
    imdb_code: "tt0068646",
    title: "The Godfather",
    title_english: "The Godfather",
    title_long: "The Godfather (1972)",
    slug: "the-godfather-1972",
    year: 1972,
    rating: 9.2,
    runtime: 175,
    genres: ["Action", "Crime", "Drama"],
    summary:
      "The Godfather \"Don\" Vito Corleone is the head of the Corleone mafia family in New York. He is at the event of his daughter's wedding. Michael, Vito's youngest son and a decorated WW II Marine is also present at the wedding. Michael seems to be uninterested in being a part of the family business. Vito is a powerful man, and is kind to all those who give him respect but is ruthless against those who do not. But when a powerful and treacherous rival wants to sell drugs and needs the Don's influence for the same, Vito refuses to do it. What follows is a clash between Vito's fading old values and the new ways which may cause Michael to do the thing he was most reluctant in doing and wage a mob war against all the other mafia families which could tear the Corleone family apart.",
    description_full:
      "The Godfather \"Don\" Vito Corleone is the head of the Corleone mafia family in New York. He is at the event of his daughter's wedding. Michael, Vito's youngest son and a decorated WW II Marine is also present at the wedding. Michael seems to be uninterested in being a part of the family business. Vito is a powerful man, and is kind to all those who give him respect but is ruthless against those who do not. But when a powerful and treacherous rival wants to sell drugs and needs the Don's influence for the same, Vito refuses to do it. What follows is a clash between Vito's fading old values and the new ways which may cause Michael to do the thing he was most reluctant in doing and wage a mob war against all the other mafia families which could tear the Corleone family apart.",
    synopsis:
      "The Godfather \"Don\" Vito Corleone is the head of the Corleone mafia family in New York. He is at the event of his daughter's wedding. Michael, Vito's youngest son and a decorated WW II Marine is also present at the wedding. Michael seems to be uninterested in being a part of the family business. Vito is a powerful man, and is kind to all those who give him respect but is ruthless against those who do not. But when a powerful and treacherous rival wants to sell drugs and needs the Don's influence for the same, Vito refuses to do it. What follows is a clash between Vito's fading old values and the new ways which may cause Michael to do the thing he was most reluctant in doing and wage a mob war against all the other mafia families which could tear the Corleone family apart.",
    yt_trailer_code: "wA6iB3OZDus",
    language: "en",
    mpa_rating: "",
    background_image:
      "https://yts.mx/assets/images/movies/The_Godfather_1972/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/The_Godfather_1972/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/The_Godfather_1972/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/The_Godfather_1972/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/The_Godfather_1972/large-cover.jpg",
    state: "ok",
    date_uploaded: "2015-11-01 02:36:37",
    date_uploaded_unix: 1446341797,
    like: false,
  },
  {
    id: 41755,
    imdb_code: "tt0110758",
    title: "Pink Floyd: P. U. L. S. E. Live at Earls Court",
    title_english: "Pink Floyd: P. U. L. S. E. Live at Earls Court",
    title_long: "Pink Floyd: P. U. L. S. E. Live at Earls Court (1994)",
    slug: "pink-floyd-p-u-l-s-e-live-at-earls-court-1994",
    year: 1994,
    rating: 9.2,
    runtime: 145,
    genres: ["Action", "Documentary", "Music"],
    summary: "Pink Floyd's final live show in 1995.",
    description_full: "Pink Floyd's final live show in 1995.",
    synopsis: "Pink Floyd's final live show in 1995.",
    yt_trailer_code: "XyvoXn51BOA",
    language: "en",
    mpa_rating: "",
    background_image:
      "https://yts.mx/assets/images/movies/pink_floyd_p_u_l_s_e_live_at_earls_court_1994/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/pink_floyd_p_u_l_s_e_live_at_earls_court_1994/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/pink_floyd_p_u_l_s_e_live_at_earls_court_1994/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/pink_floyd_p_u_l_s_e_live_at_earls_court_1994/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/pink_floyd_p_u_l_s_e_live_at_earls_court_1994/large-cover.jpg",
    state: "ok",
    date_uploaded: "2022-04-27 23:20:53",
    date_uploaded_unix: 1651094453,
    like: false,
  },
  {
    id: 37027,
    imdb_code: "tt14553990",
    title: "Tobí Tobí",
    title_english: "Tobí Tobí",
    title_long: "Tobí Tobí (2020)",
    slug: "tobi-tobi-2020",
    year: 2020,
    rating: 9.2,
    runtime: 89,
    genres: ["Action", "Documentary"],
    summary:
      "Antonio is an Italian guy, inspired by a recurring dream, he leaves for Mexico in search of himself. Thanks to magical people, adventurous friends and psychotropic plants, he faces three plain of freedom: mental, emotional and doing.",
    description_full:
      "Antonio is an Italian guy, inspired by a recurring dream, he leaves for Mexico in search of himself. Thanks to magical people, adventurous friends and psychotropic plants, he faces three plain of freedom: mental, emotional and doing.",
    synopsis:
      "Antonio is an Italian guy, inspired by a recurring dream, he leaves for Mexico in search of himself. Thanks to magical people, adventurous friends and psychotropic plants, he faces three plain of freedom: mental, emotional and doing.",
    yt_trailer_code: "",
    language: "en",
    mpa_rating: "",
    background_image:
      "https://yts.mx/assets/images/movies/tobi_tobi_2020/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/tobi_tobi_2020/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/tobi_tobi_2020/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/tobi_tobi_2020/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/tobi_tobi_2020/large-cover.jpg",
    state: "ok",
    date_uploaded: "2021-10-21 19:56:57",
    date_uploaded_unix: 1634839017,
    like: false,
  },
  {
    id: 40589,
    imdb_code: "tt1578118",
    title: "C.M.Y.L.M.Z.",
    title_english: "C.M.Y.L.M.Z.",
    title_long: "C.M.Y.L.M.Z. (2008)",
    slug: "c-m-y-l-m-z-2008",
    year: 2008,
    rating: 9.2,
    runtime: 174,
    genres: ["Action", "Comedy"],
    summary:
      "The funny little details of everyday life; the simple things that makes us laugh. An unforgettable performance from Cem Yilmaz.",
    description_full:
      "The funny little details of everyday life; the simple things that makes us laugh. An unforgettable performance from Cem Yilmaz.",
    synopsis:
      "The funny little details of everyday life; the simple things that makes us laugh. An unforgettable performance from Cem Yilmaz.",
    yt_trailer_code: "",
    language: "tr",
    mpa_rating: "",
    background_image:
      "https://yts.mx/assets/images/movies/c_m_y_l_m_z_2008/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/c_m_y_l_m_z_2008/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/c_m_y_l_m_z_2008/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/c_m_y_l_m_z_2008/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/c_m_y_l_m_z_2008/large-cover.jpg",
    state: "ok",
    date_uploaded: "2022-03-10 22:29:38",
    date_uploaded_unix: 1646947778,
    like: false,
  },
  {
    id: 43055,
    imdb_code: "tt5495230",
    title: "The Rest I Make Up",
    title_english: "The Rest I Make Up",
    title_long: "The Rest I Make Up (2018)",
    slug: "the-rest-i-make-up-2018",
    year: 2018,
    rating: 9.2,
    runtime: 79,
    genres: ["Documentary"],
    summary:
      "Cuban-American playwright Maria Irene Fornes created astonishing worlds onstage. When she stops writing due to dementia, a friendship with a young writer reignites her visionary creative spirit, triggering a film collaboration that picks up where the pen left off.",
    description_full:
      "Cuban-American playwright Maria Irene Fornes created astonishing worlds onstage. When she stops writing due to dementia, a friendship with a young writer reignites her visionary creative spirit, triggering a film collaboration that picks up where the pen left off.",
    synopsis:
      "Cuban-American playwright Maria Irene Fornes created astonishing worlds onstage. When she stops writing due to dementia, a friendship with a young writer reignites her visionary creative spirit, triggering a film collaboration that picks up where the pen left off.",
    yt_trailer_code: "MOGD3IsXLwA",
    language: "en",
    mpa_rating: "",
    background_image:
      "https://yts.mx/assets/images/movies/the_rest_i_make_up_2018/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/the_rest_i_make_up_2018/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/the_rest_i_make_up_2018/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/the_rest_i_make_up_2018/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/the_rest_i_make_up_2018/large-cover.jpg",
    state: "ok",
    date_uploaded: "2022-06-27 14:25:25",
    date_uploaded_unix: 1656332725,
    like: false,
  },
  {
    id: 43181,
    imdb_code: "tt12444304",
    title: "Einstein on the Beach",
    title_english: "Einstein on the Beach",
    title_long: "Einstein on the Beach (2014)",
    slug: "einstein-on-the-beach-2014",
    year: 2014,
    rating: 9.1,
    runtime: 264,
    genres: ["Action"],
    summary: "",
    description_full: "",
    synopsis: "",
    yt_trailer_code: "uEGY2R_Yw0U",
    language: "en",
    mpa_rating: "",
    background_image:
      "https://yts.mx/assets/images/movies/einstein_on_the_beach_2014/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/einstein_on_the_beach_2014/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/einstein_on_the_beach_2014/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/einstein_on_the_beach_2014/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/einstein_on_the_beach_2014/large-cover.jpg",
    state: "ok",
    date_uploaded: "2022-07-02 20:56:25",
    date_uploaded_unix: 1656788185,
    like: false,
  },
  {
    id: 15527,
    imdb_code: "tt2741136",
    title: "Top Gear Africa Special, Part 1",
    title_english: "Top Gear Africa Special, Part 1",
    title_long: "Top Gear Africa Special, Part 1 (2013)",
    slug: "top-gear-africa-special-part-1-2013",
    year: 2013,
    rating: 9.1,
    runtime: 0,
    genres: ["Action", "Adventure", "Comedy", "Reality-TV", "Talk-Show"],
    summary:
      "In the first of a two-part Top Gear special, Jeremy Clarkson, Richard Hammond and James May are in Africa with a simple mission - to find the definitive source of the Nile. Over the years many explorers claim to have already done just that, but the Top Gear trio believe that they can do better by traveling using only grit, ingenuity and three ageing estate cars.",
    description_full:
      "In the first of a two-part Top Gear special, Jeremy Clarkson, Richard Hammond and James May are in Africa with a simple mission - to find the definitive source of the Nile. Over the years many explorers claim to have already done just that, but the Top Gear trio believe that they can do better by traveling using only grit, ingenuity and three ageing estate cars.",
    synopsis:
      "In the first of a two-part Top Gear special, Jeremy Clarkson, Richard Hammond and James May are in Africa with a simple mission - to find the definitive source of the Nile. Over the years many explorers claim to have already done just that, but the Top Gear trio believe that they can do better by traveling using only grit, ingenuity and three ageing estate cars.",
    yt_trailer_code: "",
    language: "en",
    mpa_rating: "",
    background_image:
      "https://yts.mx/assets/images/movies/top_gear_africa_special_part_1_2013/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/top_gear_africa_special_part_1_2013/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/top_gear_africa_special_part_1_2013/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/top_gear_africa_special_part_1_2013/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/top_gear_africa_special_part_1_2013/large-cover.jpg",
    state: "ok",
    date_uploaded: "2020-02-23 01:25:37",
    date_uploaded_unix: 1582417537,
    like: false,
  },
  {
    id: 29256,
    imdb_code: "tt2412748",
    title: "Saving Mes Aynak",
    title_english: "Saving Mes Aynak",
    title_long: "Saving Mes Aynak (2014)",
    slug: "saving-mes-aynak-2014",
    year: 2014,
    rating: 9.1,
    runtime: 60,
    genres: ["Action", "Documentary"],
    summary:
      "Saving Mes Aynak follows Afghan archaeologist Qadir Temori as he races against time to save a 5,000-year-old archaeological site in Afghanistan from imminent demolition. A Chinese state-owned mining company is closing in on the ancient site, eager to harvest $100 billion dollars worth of copper buried directly beneath the archaeological ruins. Only 10% of Mes Aynak has been excavated, though, and some believe future discoveries at the site have the potential to redefine the history of Afghanistan and the history of Buddhism itself. Qadir Temori and his fellow Afghan archaeologists face what seems an impossible battle against the Chinese, the Taliban and local politics to save their cultural heritage from likely erasure.",
    description_full:
      "Saving Mes Aynak follows Afghan archaeologist Qadir Temori as he races against time to save a 5,000-year-old archaeological site in Afghanistan from imminent demolition. A Chinese state-owned mining company is closing in on the ancient site, eager to harvest $100 billion dollars worth of copper buried directly beneath the archaeological ruins. Only 10% of Mes Aynak has been excavated, though, and some believe future discoveries at the site have the potential to redefine the history of Afghanistan and the history of Buddhism itself. Qadir Temori and his fellow Afghan archaeologists face what seems an impossible battle against the Chinese, the Taliban and local politics to save their cultural heritage from likely erasure.",
    synopsis:
      "Saving Mes Aynak follows Afghan archaeologist Qadir Temori as he races against time to save a 5,000-year-old archaeological site in Afghanistan from imminent demolition. A Chinese state-owned mining company is closing in on the ancient site, eager to harvest $100 billion dollars worth of copper buried directly beneath the archaeological ruins. Only 10% of Mes Aynak has been excavated, though, and some believe future discoveries at the site have the potential to redefine the history of Afghanistan and the history of Buddhism itself. Qadir Temori and his fellow Afghan archaeologists face what seems an impossible battle against the Chinese, the Taliban and local politics to save their cultural heritage from likely erasure.",
    yt_trailer_code: "",
    language: "fa",
    mpa_rating: "",
    background_image:
      "https://yts.mx/assets/images/movies/saving_mes_aynak_2014/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/saving_mes_aynak_2014/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/saving_mes_aynak_2014/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/saving_mes_aynak_2014/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/saving_mes_aynak_2014/large-cover.jpg",
    state: "ok",
    date_uploaded: "2021-03-22 22:10:28",
    date_uploaded_unix: 1616447428,
    like: false,
  },
  {
    id: 2640,
    imdb_code: "tt0108052",
    title: "Schindler's List",
    title_english: "Schindler's List",
    title_long: "Schindler's List (1993)",
    slug: "schindlers-list-1993",
    year: 1993,
    rating: 9,
    runtime: 195,
    genres: ["Action", "Biography", "Drama", "History"],
    summary:
      "Oskar Schindler is a vain and greedy German businessman who becomes an unlikely humanitarian amid the barbaric German Nazi reign when he feels compelled to turn his factory into a refuge for Jews. Based on the true story of Oskar Schindler who managed to save about 1100 Jews from being gassed at the Auschwitz concentration camp, it is a testament to the good in all of us.",
    description_full:
      "Oskar Schindler is a vain and greedy German businessman who becomes an unlikely humanitarian amid the barbaric German Nazi reign when he feels compelled to turn his factory into a refuge for Jews. Based on the true story of Oskar Schindler who managed to save about 1100 Jews from being gassed at the Auschwitz concentration camp, it is a testament to the good in all of us.",
    synopsis:
      "Oskar Schindler is a vain and greedy German businessman who becomes an unlikely humanitarian amid the barbaric German Nazi reign when he feels compelled to turn his factory into a refuge for Jews. Based on the true story of Oskar Schindler who managed to save about 1100 Jews from being gassed at the Auschwitz concentration camp, it is a testament to the good in all of us.",
    yt_trailer_code: "bJcLRFWxRno",
    language: "en",
    mpa_rating: "R",
    background_image:
      "https://yts.mx/assets/images/movies/Schindlers_List_1993/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/Schindlers_List_1993/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/Schindlers_List_1993/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/Schindlers_List_1993/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/Schindlers_List_1993/large-cover.jpg",
    state: "ok",
    date_uploaded: "2015-11-01 01:16:11",
    date_uploaded_unix: 1446336971,
    like: false,
  },
  {
    id: 3305,
    imdb_code: "tt0071562",
    title: "The Godfather: Part II",
    title_english: "The Godfather: Part II",
    title_long: "The Godfather: Part II (1974)",
    slug: "the-godfather-part-ii-1974",
    year: 1974,
    rating: 9,
    runtime: 202,
    genres: ["Action", "Crime", "Drama"],
    summary:
      "The continuing saga of the Corleone crime family tells the story of a young Vito Corleone growing up in Sicily and in 1910s New York; and follows Michael Corleone in the 1950s as he attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
    description_full:
      "The continuing saga of the Corleone crime family tells the story of a young Vito Corleone growing up in Sicily and in 1910s New York; and follows Michael Corleone in the 1950s as he attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
    synopsis:
      "The continuing saga of the Corleone crime family tells the story of a young Vito Corleone growing up in Sicily and in 1910s New York; and follows Michael Corleone in the 1950s as he attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
    yt_trailer_code: "PdEKecHDhG4",
    language: "en",
    mpa_rating: "",
    background_image:
      "https://yts.mx/assets/images/movies/The_Godfather_Part_II_1974/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/The_Godfather_Part_II_1974/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/The_Godfather_Part_II_1974/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/The_Godfather_Part_II_1974/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/The_Godfather_Part_II_1974/large-cover.jpg",
    state: "ok",
    date_uploaded: "2015-11-01 02:36:45",
    date_uploaded_unix: 1446341805,
    like: false,
  },
  {
    id: 3489,
    imdb_code: "tt0167260",
    title: "The Lord of the Rings: The Return of the King",
    title_english: "The Lord of the Rings: The Return of the King",
    title_long: "The Lord of the Rings: The Return of the King (2003)",
    slug: "the-lord-of-the-rings-the-return-of-the-king-2003",
    year: 2003,
    rating: 9,
    runtime: 201,
    genres: ["Action", "Adventure", "Drama", "Fantasy"],
    summary:
      "The final confrontation between the forces of good and evil fighting for control of the future of Middle-earth. Frodo and Sam reach Mordor in their quest to destroy the One Ring, while Aragorn leads the forces of good against Sauron's evil army at the stone city of Minas Tirith.",
    description_full:
      "The final confrontation between the forces of good and evil fighting for control of the future of Middle-earth. Frodo and Sam reach Mordor in their quest to destroy the One Ring, while Aragorn leads the forces of good against Sauron's evil army at the stone city of Minas Tirith.",
    synopsis:
      "The final confrontation between the forces of good and evil fighting for control of the future of Middle-earth. Frodo and Sam reach Mordor in their quest to destroy the One Ring, while Aragorn leads the forces of good against Sauron's evil army at the stone city of Minas Tirith.",
    yt_trailer_code: "zckJCxYxn1g",
    language: "en",
    mpa_rating: "PG-13",
    background_image:
      "https://yts.mx/assets/images/movies/The_Lord_of_the_Rings_The_Return_of_the_King_EXTENDED_2003/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/The_Lord_of_the_Rings_The_Return_of_the_King_EXTENDED_2003/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/The_Lord_of_the_Rings_The_Return_of_the_King_EXTENDED_2003/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/The_Lord_of_the_Rings_The_Return_of_the_King_EXTENDED_2003/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/The_Lord_of_the_Rings_The_Return_of_the_King_EXTENDED_2003/large-cover.jpg",
    state: "ok",
    date_uploaded: "2015-11-01 02:58:16",
    date_uploaded_unix: 1446343096,
    like: false,
  },
  {
    id: 4253,
    imdb_code: "tt0050083",
    title: "12 Angry Men",
    title_english: "12 Angry Men",
    title_long: "12 Angry Men (1957)",
    slug: "12-angry-men-1957",
    year: 1957,
    rating: 9,
    runtime: 96,
    genres: ["Action", "Crime", "Drama"],
    summary:
      "The defense and the prosecution have rested, and the jury is filing into the jury room to decide if a young man is guilty or innocent of murdering his father. What begins as an open-and-shut case of murder soon becomes a detective story that presents a succession of clues creating doubt, and a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, AND each other. Based on the play, all of the action takes place on the stage of the jury room.",
    description_full:
      "The defense and the prosecution have rested, and the jury is filing into the jury room to decide if a young man is guilty or innocent of murdering his father. What begins as an open-and-shut case of murder soon becomes a detective story that presents a succession of clues creating doubt, and a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, AND each other. Based on the play, all of the action takes place on the stage of the jury room.",
    synopsis:
      "The defense and the prosecution have rested, and the jury is filing into the jury room to decide if a young man is guilty or innocent of murdering his father. What begins as an open-and-shut case of murder soon becomes a detective story that presents a succession of clues creating doubt, and a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, AND each other. Based on the play, all of the action takes place on the stage of the jury room.",
    yt_trailer_code: "_13J_9B5jEk",
    language: "en",
    mpa_rating: "",
    background_image:
      "https://yts.mx/assets/images/movies/12_Angry_Men_1957/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/12_Angry_Men_1957/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/12_Angry_Men_1957/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/12_Angry_Men_1957/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/12_Angry_Men_1957/large-cover.jpg",
    state: "ok",
    date_uploaded: "2015-10-31 20:46:02",
    date_uploaded_unix: 1446320762,
    like: false,
  },
  {
    id: 32828,
    imdb_code: "tt4780544",
    title: "One Note at a Time",
    title_english: "One Note at a Time",
    title_long: "One Note at a Time (2016)",
    slug: "one-note-at-a-time-2016",
    year: 2016,
    rating: 9,
    runtime: 95,
    genres: ["Action", "Documentary", "Music"],
    summary:
      "'If the musicians ain't got a chance to live, then what chance has the music got?' Dr John. This is a beautifully crafted, feature documentary, rich with colourful characters, and set in the iconic musical backdrop of New Orleans. In 2005 the music stopped, when one of the most deadly and destructive hurricanes in American history struck. The flood defences failed flooding the Crescent City for weeks. Lives were lost and shattered. Many displaced musicians felt compelled to return to the chaos and bleak confusion to play again. This is the story of some who made it back, told in their own words, with those who fought alongside to resuscitate the music scene; In particular the founders of The New Orleans Musicians' Clinic, a unique medical facility with the motto, 'Keeping the music alive'.",
    description_full:
      "'If the musicians ain't got a chance to live, then what chance has the music got?' Dr John. This is a beautifully crafted, feature documentary, rich with colourful characters, and set in the iconic musical backdrop of New Orleans. In 2005 the music stopped, when one of the most deadly and destructive hurricanes in American history struck. The flood defences failed flooding the Crescent City for weeks. Lives were lost and shattered. Many displaced musicians felt compelled to return to the chaos and bleak confusion to play again. This is the story of some who made it back, told in their own words, with those who fought alongside to resuscitate the music scene; In particular the founders of The New Orleans Musicians' Clinic, a unique medical facility with the motto, 'Keeping the music alive'.",
    synopsis:
      "'If the musicians ain't got a chance to live, then what chance has the music got?' Dr John. This is a beautifully crafted, feature documentary, rich with colourful characters, and set in the iconic musical backdrop of New Orleans. In 2005 the music stopped, when one of the most deadly and destructive hurricanes in American history struck. The flood defences failed flooding the Crescent City for weeks. Lives were lost and shattered. Many displaced musicians felt compelled to return to the chaos and bleak confusion to play again. This is the story of some who made it back, told in their own words, with those who fought alongside to resuscitate the music scene; In particular the founders of The New Orleans Musicians' Clinic, a unique medical facility with the motto, 'Keeping the music alive'.",
    yt_trailer_code: "",
    language: "en",
    mpa_rating: "",
    background_image:
      "https://yts.mx/assets/images/movies/one_note_at_a_time_2016/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/one_note_at_a_time_2016/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/one_note_at_a_time_2016/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/one_note_at_a_time_2016/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/one_note_at_a_time_2016/large-cover.jpg",
    state: "ok",
    date_uploaded: "2021-06-13 20:48:56",
    date_uploaded_unix: 1623610136,
    like: false,
  },
  {
    id: 38851,
    imdb_code: "tt2593138",
    title: "Days of Reckoning: The Making of Universal Soldier 4",
    title_english: "Days of Reckoning: The Making of Universal Soldier 4",
    title_long: "Days of Reckoning: The Making of Universal Soldier 4 (2013)",
    slug: "days-of-reckoning-the-making-of-universal-soldier-4-2013",
    year: 2013,
    rating: 9,
    runtime: 80,
    genres: ["Action", "Documentary"],
    summary: "",
    description_full: "",
    synopsis: "",
    yt_trailer_code: "",
    language: "en",
    mpa_rating: "",
    background_image:
      "https://yts.mx/assets/images/movies/days_of_reckoning_the_making_of_us4_2013/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/days_of_reckoning_the_making_of_us4_2013/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/days_of_reckoning_the_making_of_us4_2013/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/days_of_reckoning_the_making_of_us4_2013/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/days_of_reckoning_the_making_of_us4_2013/large-cover.jpg",
    state: "ok",
    date_uploaded: "2021-12-29 18:11:17",
    date_uploaded_unix: 1640797877,
    like: false,
  },
  {
    id: 2429,
    imdb_code: "tt0110912",
    title: "Pulp Fiction",
    title_english: "Pulp Fiction",
    title_long: "Pulp Fiction (1994)",
    slug: "pulp-fiction-1994",
    year: 1994,
    rating: 8.9,
    runtime: 154,
    genres: ["Action", "Crime", "Drama"],
    summary:
      "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.",
    description_full:
      "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.",
    synopsis:
      "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.",
    yt_trailer_code: "tGpTpVyI_OQ",
    language: "en",
    mpa_rating: "R",
    background_image:
      "https://yts.mx/assets/images/movies/Pulp_Fiction_1994/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/Pulp_Fiction_1994/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/Pulp_Fiction_1994/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/Pulp_Fiction_1994/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/Pulp_Fiction_1994/large-cover.jpg",
    state: "ok",
    date_uploaded: "2015-11-01 01:52:11",
    date_uploaded_unix: 1446339131,
    like: false,
  },
  {
    id: 37384,
    imdb_code: "tt15097216",
    title: "Jai Bhim",
    title_english: "Jai Bhim",
    title_long: "Jai Bhim (2021)",
    slug: "jai-bhim-2021",
    year: 2021,
    rating: 8.9,
    runtime: 164,
    genres: ["Action", "Crime", "Drama", "Mystery"],
    summary:
      "Rajakannu and his wife Sengeni belong to a lower cast and works as labors in the field to protect it from rats thou they live life of poverty but are happy with what they have. Rajakannu and Sengeni plan a second child and soon Sengeni gives the good news once Rajkannu is called to the house of a upper caste man as a snake has sneaked inside his house.The next day theft of jewelry is reported in the same house suspicious raising towards Rajkannu .The cops got to arrest Rajkannu but he leaves the town for work following which the cops detain a pregnant Sengani and rest of family members asking them details about the Rajkannu.The cops trace Rajkannu and torture him and his brothers in jail asking him to confess the crime they did not commit later Sengeni finds that Rajkannu and his brother have eloped from the prison to escape torture.Mythra who teaches tribal village comes across a lawyer Chandru who fights for tribal people and after hearing story of Senegeni files a Habeas corpus case in court.",
    description_full:
      "Rajakannu and his wife Sengeni belong to a lower cast and works as labors in the field to protect it from rats thou they live life of poverty but are happy with what they have. Rajakannu and Sengeni plan a second child and soon Sengeni gives the good news once Rajkannu is called to the house of a upper caste man as a snake has sneaked inside his house.The next day theft of jewelry is reported in the same house suspicious raising towards Rajkannu .The cops got to arrest Rajkannu but he leaves the town for work following which the cops detain a pregnant Sengani and rest of family members asking them details about the Rajkannu.The cops trace Rajkannu and torture him and his brothers in jail asking him to confess the crime they did not commit later Sengeni finds that Rajkannu and his brother have eloped from the prison to escape torture.Mythra who teaches tribal village comes across a lawyer Chandru who fights for tribal people and after hearing story of Senegeni files a Habeas corpus case in court.",
    synopsis:
      "Rajakannu and his wife Sengeni belong to a lower cast and works as labors in the field to protect it from rats thou they live life of poverty but are happy with what they have. Rajakannu and Sengeni plan a second child and soon Sengeni gives the good news once Rajkannu is called to the house of a upper caste man as a snake has sneaked inside his house.The next day theft of jewelry is reported in the same house suspicious raising towards Rajkannu .The cops got to arrest Rajkannu but he leaves the town for work following which the cops detain a pregnant Sengani and rest of family members asking them details about the Rajkannu.The cops trace Rajkannu and torture him and his brothers in jail asking him to confess the crime they did not commit later Sengeni finds that Rajkannu and his brother have eloped from the prison to escape torture.Mythra who teaches tribal village comes across a lawyer Chandru who fights for tribal people and after hearing story of Senegeni files a Habeas corpus case in court.",
    yt_trailer_code: "UY34eAUxuRk",
    language: "ta",
    mpa_rating: "",
    background_image:
      "https://yts.mx/assets/images/movies/jai_bhim_2021/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/jai_bhim_2021/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/jai_bhim_2021/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/jai_bhim_2021/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/jai_bhim_2021/large-cover.jpg",
    state: "ok",
    date_uploaded: "2021-11-03 16:12:36",
    date_uploaded_unix: 1635952356,
    like: false,
  },
  {
    id: 5023,
    imdb_code: "tt1626645",
    title: "Porcupine Tree: Anesthetize",
    title_english: "Porcupine Tree: Anesthetize",
    title_long: "Porcupine Tree: Anesthetize (2010)",
    slug: "porcupine-tree-anesthetize-2010",
    year: 2010,
    rating: 8.9,
    runtime: 130,
    genres: ["Action", "Documentary", "Music"],
    summary:
      "Anesthetize is the second live DVD by progressive rock band Porcupine Tree, released on 20 May 2010. The Blu-ray edition was released on 15 June.",
    description_full:
      "Anesthetize is the second live DVD by progressive rock band Porcupine Tree, released on 20 May 2010. The Blu-ray edition was released on 15 June.",
    synopsis:
      "Anesthetize is the second live DVD by progressive rock band Porcupine Tree, released on 20 May 2010. The Blu-ray edition was released on 15 June.",
    yt_trailer_code: "8SNpqgRz3oU",
    language: "en",
    mpa_rating: "",
    background_image:
      "https://yts.mx/assets/images/movies/porcupine_tree_anesthetize_2010/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/porcupine_tree_anesthetize_2010/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/porcupine_tree_anesthetize_2010/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/porcupine_tree_anesthetize_2010/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/porcupine_tree_anesthetize_2010/large-cover.jpg",
    state: "ok",
    date_uploaded: "2016-01-30 06:50:09",
    date_uploaded_unix: 1454133009,
    like: false,
  },
  {
    id: 21870,
    imdb_code: "tt11989890",
    title: "David Attenborough: A Life on Our Planet",
    title_english: "David Attenborough: A Life on Our Planet",
    title_long: "David Attenborough: A Life on Our Planet (2020)",
    slug: "david-attenborough-a-life-on-our-planet-2020",
    year: 2020,
    rating: 8.9,
    runtime: 83,
    genres: ["Action", "Biography", "Documentary"],
    summary:
      "One man has seen more of the natural world than any other. This unique feature documentary is his witness statement. In his 93 years, David Attenborough has visited every continent on the globe, exploring the wild places of our planet and documenting the living world in all its variety and wonder. Now, for the first time he reflects upon both the defining moments of his lifetime as a naturalist and the devastating changes he has seen. Honest, revealing and urgent, DAVID ATTENBOROUGH: A LIFE ON OUR PLANET is a powerful first-hand account of humanity&#39;s impact on nature and a message of hope for future generations. Created by award-winning natural history filmmakers Silverback Films and global conservation organization WWF, the film is Directed by Alastair Fothergill, Jonnie Hughes and Keith Scholey and Executive Produced by Colin Butfield. Celebrated British naturalist Sir David Attenborough has a broadcasting career spanning over eight decades. He has visited every continent on the globe, exploring the wild places of our planet and bringing the wonders of the living world to audiences worldwide through groundbreaking natural history series. His work includes: Life on Earth, Planet Earth and more recently the Netflix original documentary series Our Planet.",
    description_full:
      "One man has seen more of the natural world than any other. This unique feature documentary is his witness statement. In his 93 years, David Attenborough has visited every continent on the globe, exploring the wild places of our planet and documenting the living world in all its variety and wonder. Now, for the first time he reflects upon both the defining moments of his lifetime as a naturalist and the devastating changes he has seen. Honest, revealing and urgent, DAVID ATTENBOROUGH: A LIFE ON OUR PLANET is a powerful first-hand account of humanity&#39;s impact on nature and a message of hope for future generations. Created by award-winning natural history filmmakers Silverback Films and global conservation organization WWF, the film is Directed by Alastair Fothergill, Jonnie Hughes and Keith Scholey and Executive Produced by Colin Butfield. Celebrated British naturalist Sir David Attenborough has a broadcasting career spanning over eight decades. He has visited every continent on the globe, exploring the wild places of our planet and bringing the wonders of the living world to audiences worldwide through groundbreaking natural history series. His work includes: Life on Earth, Planet Earth and more recently the Netflix original documentary series Our Planet.",
    synopsis:
      "One man has seen more of the natural world than any other. This unique feature documentary is his witness statement. In his 93 years, David Attenborough has visited every continent on the globe, exploring the wild places of our planet and documenting the living world in all its variety and wonder. Now, for the first time he reflects upon both the defining moments of his lifetime as a naturalist and the devastating changes he has seen. Honest, revealing and urgent, DAVID ATTENBOROUGH: A LIFE ON OUR PLANET is a powerful first-hand account of humanity&#39;s impact on nature and a message of hope for future generations. Created by award-winning natural history filmmakers Silverback Films and global conservation organization WWF, the film is Directed by Alastair Fothergill, Jonnie Hughes and Keith Scholey and Executive Produced by Colin Butfield. Celebrated British naturalist Sir David Attenborough has a broadcasting career spanning over eight decades. He has visited every continent on the globe, exploring the wild places of our planet and bringing the wonders of the living world to audiences worldwide through groundbreaking natural history series. His work includes: Life on Earth, Planet Earth and more recently the Netflix original documentary series Our Planet.",
    yt_trailer_code: "64R2MYUt394",
    language: "en",
    mpa_rating: "PG",
    background_image:
      "https://yts.mx/assets/images/movies/david_attenborough_a_life_on_our_planet_2020/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/david_attenborough_a_life_on_our_planet_2020/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/david_attenborough_a_life_on_our_planet_2020/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/david_attenborough_a_life_on_our_planet_2020/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/david_attenborough_a_life_on_our_planet_2020/large-cover.jpg",
    state: "ok",
    date_uploaded: "2020-10-04 16:57:50",
    date_uploaded_unix: 1601823470,
    like: false,
  },
  {
    id: 23103,
    imdb_code: "tt3909186",
    title: "Club Frontera",
    title_english: "Club Frontera",
    title_long: "Club Frontera (2016)",
    slug: "club-frontera-2016",
    year: 2016,
    rating: 8.9,
    runtime: 93,
    genres: ["Action", "Documentary", "History", "Sport"],
    summary:
      "Club Frontera is a riveting documentary about the Club Tijuana Xoloitzcuintles (Xolos) professional Mexican soccer team and their positive impact on the city of Tijuana, Mexico. The compelling film follows players, fans, political figures, sports personalities, and enthusiasts from both sides of the border as they share their personal stories of how the newly emerging success of the Xolos is changing Tijuana for the better. Tijuana, nestled just south of the U.S. border with a turbulent history of violence and corruption, has long struggled to develop a collective identity. But with the emergence of the Xolos and their 2012 Championship season in Mexico&#39;s Premier League (Liga MX), Tijuanese may have finally found a rallying point to unify and rejuvenate the city into a 21st century cultural resurgence.",
    description_full:
      "Club Frontera is a riveting documentary about the Club Tijuana Xoloitzcuintles (Xolos) professional Mexican soccer team and their positive impact on the city of Tijuana, Mexico. The compelling film follows players, fans, political figures, sports personalities, and enthusiasts from both sides of the border as they share their personal stories of how the newly emerging success of the Xolos is changing Tijuana for the better. Tijuana, nestled just south of the U.S. border with a turbulent history of violence and corruption, has long struggled to develop a collective identity. But with the emergence of the Xolos and their 2012 Championship season in Mexico&#39;s Premier League (Liga MX), Tijuanese may have finally found a rallying point to unify and rejuvenate the city into a 21st century cultural resurgence.",
    synopsis:
      "Club Frontera is a riveting documentary about the Club Tijuana Xoloitzcuintles (Xolos) professional Mexican soccer team and their positive impact on the city of Tijuana, Mexico. The compelling film follows players, fans, political figures, sports personalities, and enthusiasts from both sides of the border as they share their personal stories of how the newly emerging success of the Xolos is changing Tijuana for the better. Tijuana, nestled just south of the U.S. border with a turbulent history of violence and corruption, has long struggled to develop a collective identity. But with the emergence of the Xolos and their 2012 Championship season in Mexico&#39;s Premier League (Liga MX), Tijuanese may have finally found a rallying point to unify and rejuvenate the city into a 21st century cultural resurgence.",
    yt_trailer_code: "",
    language: "en",
    mpa_rating: "",
    background_image:
      "https://yts.mx/assets/images/movies/club_frontera_2016/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/club_frontera_2016/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/club_frontera_2016/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/club_frontera_2016/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/club_frontera_2016/large-cover.jpg",
    state: "ok",
    date_uploaded: "2020-11-03 13:30:44",
    date_uploaded_unix: 1604406644,
    like: false,
  },
  {
    id: 29860,
    imdb_code: "tt2554118",
    title: "Blur Parklive",
    title_english: "Blur Parklive",
    title_long: "Blur Parklive (2012)",
    slug: "blur-parklive-2012",
    year: 2012,
    rating: 8.9,
    runtime: 0,
    genres: ["Action", "Music"],
    summary: "",
    description_full: "",
    synopsis: "",
    yt_trailer_code: "cq6iG8tdxzU",
    language: "en",
    mpa_rating: "",
    background_image:
      "https://yts.mx/assets/images/movies/blur_parklive_2012/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/blur_parklive_2012/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/blur_parklive_2012/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/blur_parklive_2012/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/blur_parklive_2012/large-cover.jpg",
    state: "ok",
    date_uploaded: "2021-04-02 21:30:18",
    date_uploaded_unix: 1617391818,
    like: false,
  },
  {
    id: 29895,
    imdb_code: "tt2737570",
    title: "Carrie Underwood: The Blown Away Tour Live",
    title_english: "Carrie Underwood: The Blown Away Tour Live",
    title_long: "Carrie Underwood: The Blown Away Tour Live (2013)",
    slug: "carrie-underwood-the-blown-away-tour-live-2013",
    year: 2013,
    rating: 8.9,
    runtime: 119,
    genres: ["Action", "Music"],
    summary:
      '"Pollstar\'s Top Female Country Touring Artist of 2012, and six-time GRAMMY winner Carrie Underwood now brings the magic of her sold-out "Blown Away Tour" to video with the release of The Blown Away Tour: LIVE. Filmed in concert in March 2013 in Ontario, California, The Blown Away Tour: LIVE features more than 20 songs, with performances of Carrie\'s #1 singles, including such favorites as "Before He Cheats," "Two Black Cadillacs," and the album title track that inspired her tour name, "Blown Away." The live concert was directed by Christian Lamb and produced by Evan Haiman & Domenic Cotter. Alongside nearly 100 minutes of performance footage will be exclusive bonus clips offering a behind-the-scenes look into the making of the tour, including interviews with Carrie and Raj Kapoor, the tour director responsible for the large production and effects that defined the visual elements of "The Blown Away Tour." Exclusive bonus clips were produced and directed by Todd Cassetty. A photo gallery is also included. Audio for The Blown Away Tour: LIVE will be in Dolby 5.1 and stereo. Carrie\'s remarkable "Blown Away Tour" launched in the spring of 2012 and continued through May 23, 2013, for a total of 112 dates in 110 cities, six countries, and three continents, playing for more than 1,000,000 fans and selling out every concert this year. By the numbers, the state-of-the-art stage production for the "Blown Away Tour" included 575,424 individual LED lights in 3,000 square feet of video walls and an incredible 23,063 feet of cable to generate the 172 different colors used in the show\'s lighting. As part of each show, Carrie and her band flew 150 feet above the audience on a secondary stage that weighed 5,890 pounds, while CO2 and Nitrogen tanks were used during the life of the tour to create the "Blown Away" tornado effect at each performance. Since releasing her debut album in 2005, Carrie Underwood has sold over 15 million albums and chart',
    description_full:
      '"Pollstar\'s Top Female Country Touring Artist of 2012, and six-time GRAMMY winner Carrie Underwood now brings the magic of her sold-out "Blown Away Tour" to video with the release of The Blown Away Tour: LIVE. Filmed in concert in March 2013 in Ontario, California, The Blown Away Tour: LIVE features more than 20 songs, with performances of Carrie\'s #1 singles, including such favorites as "Before He Cheats," "Two Black Cadillacs," and the album title track that inspired her tour name, "Blown Away." The live concert was directed by Christian Lamb and produced by Evan Haiman & Domenic Cotter. Alongside nearly 100 minutes of performance footage will be exclusive bonus clips offering a behind-the-scenes look into the making of the tour, including interviews with Carrie and Raj Kapoor, the tour director responsible for the large production and effects that defined the visual elements of "The Blown Away Tour." Exclusive bonus clips were produced and directed by Todd Cassetty. A photo gallery is also included. Audio for The Blown Away Tour: LIVE will be in Dolby 5.1 and stereo. Carrie\'s remarkable "Blown Away Tour" launched in the spring of 2012 and continued through May 23, 2013, for a total of 112 dates in 110 cities, six countries, and three continents, playing for more than 1,000,000 fans and selling out every concert this year. By the numbers, the state-of-the-art stage production for the "Blown Away Tour" included 575,424 individual LED lights in 3,000 square feet of video walls and an incredible 23,063 feet of cable to generate the 172 different colors used in the show\'s lighting. As part of each show, Carrie and her band flew 150 feet above the audience on a secondary stage that weighed 5,890 pounds, while CO2 and Nitrogen tanks were used during the life of the tour to create the "Blown Away" tornado effect at each performance. Since releasing her debut album in 2005, Carrie Underwood has sold over 15 million albums and chart',
    synopsis:
      '"Pollstar\'s Top Female Country Touring Artist of 2012, and six-time GRAMMY winner Carrie Underwood now brings the magic of her sold-out "Blown Away Tour" to video with the release of The Blown Away Tour: LIVE. Filmed in concert in March 2013 in Ontario, California, The Blown Away Tour: LIVE features more than 20 songs, with performances of Carrie\'s #1 singles, including such favorites as "Before He Cheats," "Two Black Cadillacs," and the album title track that inspired her tour name, "Blown Away." The live concert was directed by Christian Lamb and produced by Evan Haiman & Domenic Cotter. Alongside nearly 100 minutes of performance footage will be exclusive bonus clips offering a behind-the-scenes look into the making of the tour, including interviews with Carrie and Raj Kapoor, the tour director responsible for the large production and effects that defined the visual elements of "The Blown Away Tour." Exclusive bonus clips were produced and directed by Todd Cassetty. A photo gallery is also included. Audio for The Blown Away Tour: LIVE will be in Dolby 5.1 and stereo. Carrie\'s remarkable "Blown Away Tour" launched in the spring of 2012 and continued through May 23, 2013, for a total of 112 dates in 110 cities, six countries, and three continents, playing for more than 1,000,000 fans and selling out every concert this year. By the numbers, the state-of-the-art stage production for the "Blown Away Tour" included 575,424 individual LED lights in 3,000 square feet of video walls and an incredible 23,063 feet of cable to generate the 172 different colors used in the show\'s lighting. As part of each show, Carrie and her band flew 150 feet above the audience on a secondary stage that weighed 5,890 pounds, while CO2 and Nitrogen tanks were used during the life of the tour to create the "Blown Away" tornado effect at each performance. Since releasing her debut album in 2005, Carrie Underwood has sold over 15 million albums and chart',
    yt_trailer_code: "",
    language: "en",
    mpa_rating: "",
    background_image:
      "https://yts.mx/assets/images/movies/carrie_underwood_the_blown_away_tour_live_2013/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/carrie_underwood_the_blown_away_tour_live_2013/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/carrie_underwood_the_blown_away_tour_live_2013/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/carrie_underwood_the_blown_away_tour_live_2013/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/carrie_underwood_the_blown_away_tour_live_2013/large-cover.jpg",
    state: "ok",
    date_uploaded: "2021-04-03 16:48:41",
    date_uploaded_unix: 1617461321,
    like: false,
  },
  {
    id: 30623,
    imdb_code: "tt0476452",
    title: "Eagles: The Farewell 1 Tour - Live from Melbourne",
    title_english: "Eagles: The Farewell 1 Tour - Live from Melbourne",
    title_long: "Eagles: The Farewell 1 Tour - Live from Melbourne (2005)",
    slug: "eagles-the-farewell-1-tour-live-from-melbourne-2005",
    year: 2005,
    rating: 8.9,
    runtime: 175,
    genres: ["Action", "Music"],
    summary:
      "A documentary of the musical band Eagles and their 2004 concert in Melbourne, Australia.",
    description_full:
      "A documentary of the musical band Eagles and their 2004 concert in Melbourne, Australia.",
    synopsis:
      "A documentary of the musical band Eagles and their 2004 concert in Melbourne, Australia.",
    yt_trailer_code: "",
    language: "en",
    mpa_rating: "",
    background_image:
      "https://yts.mx/assets/images/movies/eagles_the_farewell_1_tour_live_from_melbourne_2005/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/eagles_the_farewell_1_tour_live_from_melbourne_2005/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/eagles_the_farewell_1_tour_live_from_melbourne_2005/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/eagles_the_farewell_1_tour_live_from_melbourne_2005/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/eagles_the_farewell_1_tour_live_from_melbourne_2005/large-cover.jpg",
    state: "ok",
    date_uploaded: "2021-04-21 03:33:26",
    date_uploaded_unix: 1618968806,
    like: false,
  },
  {
    id: 37111,
    imdb_code: "tt2061134",
    title: "From the Basement Radiohead",
    title_english: "From the Basement Radiohead",
    title_long: "From the Basement Radiohead (2011)",
    slug: "from-the-basement-radiohead-2011",
    year: 2011,
    rating: 8.9,
    runtime: 0,
    genres: ["Music"],
    summary: "",
    description_full: "",
    synopsis: "",
    yt_trailer_code: "",
    language: "",
    mpa_rating: "",
    background_image:
      "https://yts.mx/assets/images/movies/from_the_basement_radiohead_2011/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/from_the_basement_radiohead_2011/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/from_the_basement_radiohead_2011/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/from_the_basement_radiohead_2011/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/from_the_basement_radiohead_2011/large-cover.jpg",
    state: "ok",
    date_uploaded: "2021-10-25 15:37:18",
    date_uploaded_unix: 1635169038,
    like: false,
  },
  {
    id: 38241,
    imdb_code: "tt8829850",
    title: "Making the Five Heartbeats",
    title_english: "Making the Five Heartbeats",
    title_long: "Making the Five Heartbeats (2018)",
    slug: "making-the-five-heartbeats-2018",
    year: 2018,
    rating: 8.9,
    runtime: 85,
    genres: ["Action", "Documentary"],
    summary:
      "The behind the scene look at the casting calls; selection of cast members, story board ideas producers, and directoral commentary. Plus never before scene footage of this iconic cult classic with additional commentary from selected cast members and other leading consultants involved in the making of this memorable film.",
    description_full:
      "The behind the scene look at the casting calls; selection of cast members, story board ideas producers, and directoral commentary. Plus never before scene footage of this iconic cult classic with additional commentary from selected cast members and other leading consultants involved in the making of this memorable film.",
    synopsis:
      "The behind the scene look at the casting calls; selection of cast members, story board ideas producers, and directoral commentary. Plus never before scene footage of this iconic cult classic with additional commentary from selected cast members and other leading consultants involved in the making of this memorable film.",
    yt_trailer_code: "",
    language: "en",
    mpa_rating: "PG-13",
    background_image:
      "https://yts.mx/assets/images/movies/making_the_five_heartbeats_2018/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/making_the_five_heartbeats_2018/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/making_the_five_heartbeats_2018/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/making_the_five_heartbeats_2018/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/making_the_five_heartbeats_2018/large-cover.jpg",
    state: "ok",
    date_uploaded: "2021-12-05 04:00:32",
    date_uploaded_unix: 1638673232,
    like: false,
  },
  {
    id: 38248,
    imdb_code: "tt2108476",
    title: "Billy Mize & the Bakersfield Sound",
    title_english: "Billy Mize & the Bakersfield Sound",
    title_long: "Billy Mize & the Bakersfield Sound (2014)",
    slug: "billy-mize-the-bakersfield-sound-2014",
    year: 2014,
    rating: 8.9,
    runtime: 100,
    genres: ["Action", "Documentary"],
    summary:
      "Billy Mize's contributions to Country music shaped the industry. His charm and golden voice are legendary among the insiders. A performer on the brink of fame, his is a spectacular tale about identity and sacrifice amidst a Country music revolution.",
    description_full:
      "Billy Mize's contributions to Country music shaped the industry. His charm and golden voice are legendary among the insiders. A performer on the brink of fame, his is a spectacular tale about identity and sacrifice amidst a Country music revolution.",
    synopsis:
      "Billy Mize's contributions to Country music shaped the industry. His charm and golden voice are legendary among the insiders. A performer on the brink of fame, his is a spectacular tale about identity and sacrifice amidst a Country music revolution.",
    yt_trailer_code: "",
    language: "en",
    mpa_rating: "",
    background_image:
      "https://yts.mx/assets/images/movies/billy_mize_the_bakersfield_sound_2014/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/billy_mize_the_bakersfield_sound_2014/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/billy_mize_the_bakersfield_sound_2014/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/billy_mize_the_bakersfield_sound_2014/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/billy_mize_the_bakersfield_sound_2014/large-cover.jpg",
    state: "ok",
    date_uploaded: "2021-12-04 21:31:16",
    date_uploaded_unix: 1638649876,
    like: false,
  },
  {
    id: 38789,
    imdb_code: "tt3891594",
    title: "Down, But Not Out!",
    title_english: "Down, But Not Out!",
    title_long: "Down, But Not Out! (2015)",
    slug: "down-but-not-out-2015",
    year: 2015,
    rating: 8.9,
    runtime: 68,
    genres: ["Action", "Documentary", "Sport"],
    summary:
      '"Down, But Not Out!" captures all the action of four amateur women boxers as they step for the first time into the ring. Each fighter, ANNA, DARIA, AGA and ALICJA go all out to win as they are challenged to face an unknown opponent at a box competition organized by the amateur boxing association within their league. We also witness the trainer, PRZEMEK, his mental and emotional connection with each fighter as he pushes the physical strength of Aga, the mental toughness of Alicja, the vulnerability of Daria and the desire of Anna as they each exceed their own personal limits.',
    description_full:
      '"Down, But Not Out!" captures all the action of four amateur women boxers as they step for the first time into the ring. Each fighter, ANNA, DARIA, AGA and ALICJA go all out to win as they are challenged to face an unknown opponent at a box competition organized by the amateur boxing association within their league. We also witness the trainer, PRZEMEK, his mental and emotional connection with each fighter as he pushes the physical strength of Aga, the mental toughness of Alicja, the vulnerability of Daria and the desire of Anna as they each exceed their own personal limits.',
    synopsis:
      '"Down, But Not Out!" captures all the action of four amateur women boxers as they step for the first time into the ring. Each fighter, ANNA, DARIA, AGA and ALICJA go all out to win as they are challenged to face an unknown opponent at a box competition organized by the amateur boxing association within their league. We also witness the trainer, PRZEMEK, his mental and emotional connection with each fighter as he pushes the physical strength of Aga, the mental toughness of Alicja, the vulnerability of Daria and the desire of Anna as they each exceed their own personal limits.',
    yt_trailer_code: "SRjLE8cmUsc",
    language: "en",
    mpa_rating: "",
    background_image:
      "https://yts.mx/assets/images/movies/down_but_not_out_2015/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/down_but_not_out_2015/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/down_but_not_out_2015/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/down_but_not_out_2015/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/down_but_not_out_2015/large-cover.jpg",
    state: "ok",
    date_uploaded: "2021-12-26 20:00:12",
    date_uploaded_unix: 1640545212,
    like: false,
  },
  {
    id: 41158,
    imdb_code: "tt10300570",
    title: "Kadaisi Vivasayi",
    title_english: "Kadaisi Vivasayi",
    title_long: "Kadaisi Vivasayi (2021)",
    slug: "kadaisi-vivasayi-2021",
    year: 2021,
    rating: 8.9,
    runtime: 122,
    genres: ["Action", "Comedy", "Drama"],
    summary:
      "Octogenarian Maayandi is the last active farmer in his remote village in the Indian state of Tamil Nadu. His farm work, his fields and livestock are enough for him, and he refuses to sell his land to a property developer. But Maayandi's pleasantly predictable way of life comes to an abrupt end when he is wrongly accused of killing three peacocks - the national symbol of India - and burying them on his property.",
    description_full:
      "Octogenarian Maayandi is the last active farmer in his remote village in the Indian state of Tamil Nadu. His farm work, his fields and livestock are enough for him, and he refuses to sell his land to a property developer. But Maayandi's pleasantly predictable way of life comes to an abrupt end when he is wrongly accused of killing three peacocks - the national symbol of India - and burying them on his property.",
    synopsis:
      "Octogenarian Maayandi is the last active farmer in his remote village in the Indian state of Tamil Nadu. His farm work, his fields and livestock are enough for him, and he refuses to sell his land to a property developer. But Maayandi's pleasantly predictable way of life comes to an abrupt end when he is wrongly accused of killing three peacocks - the national symbol of India - and burying them on his property.",
    yt_trailer_code: "cGorkMwcjd4",
    language: "ta",
    mpa_rating: "",
    background_image:
      "https://yts.mx/assets/images/movies/kadaisi_vivasayi_2021/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/kadaisi_vivasayi_2021/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/kadaisi_vivasayi_2021/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/kadaisi_vivasayi_2021/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/kadaisi_vivasayi_2021/large-cover.jpg",
    state: "ok",
    date_uploaded: "2022-04-02 07:42:09",
    date_uploaded_unix: 1648878129,
    like: false,
  },
  {
    id: 41336,
    imdb_code: "tt3411614",
    title: "Muse - Live at Rome Olympic Stadium",
    title_english: "Muse - Live at Rome Olympic Stadium",
    title_long: "Muse - Live at Rome Olympic Stadium (2013)",
    slug: "muse-live-at-rome-olympic-stadium-2013",
    year: 2013,
    rating: 8.9,
    runtime: 96,
    genres: ["Documentary", "Music"],
    summary:
      "Muse - Live At Rome Olympic Stadium is the first concert film ever to be filmed in 4K, a format soon to be adopted by Hollywood as standard for all blockbuster films. The show filmed on the 6th July 2013 in front of a capacity audience of over 60,000, captures the momentous evening in the Italian capital and showcases the most extravagant set build and spectacular stage show of any Muse tour to date. The three school friends from Devon take the audience on a mesmerizing journey using pyrotechnics, expansive digital screens and a troop of actors to accompany their epic playlist of 20 tracks, mixed in incredible surround sound.",
    description_full:
      "Muse - Live At Rome Olympic Stadium is the first concert film ever to be filmed in 4K, a format soon to be adopted by Hollywood as standard for all blockbuster films. The show filmed on the 6th July 2013 in front of a capacity audience of over 60,000, captures the momentous evening in the Italian capital and showcases the most extravagant set build and spectacular stage show of any Muse tour to date. The three school friends from Devon take the audience on a mesmerizing journey using pyrotechnics, expansive digital screens and a troop of actors to accompany their epic playlist of 20 tracks, mixed in incredible surround sound.",
    synopsis:
      "Muse - Live At Rome Olympic Stadium is the first concert film ever to be filmed in 4K, a format soon to be adopted by Hollywood as standard for all blockbuster films. The show filmed on the 6th July 2013 in front of a capacity audience of over 60,000, captures the momentous evening in the Italian capital and showcases the most extravagant set build and spectacular stage show of any Muse tour to date. The three school friends from Devon take the audience on a mesmerizing journey using pyrotechnics, expansive digital screens and a troop of actors to accompany their epic playlist of 20 tracks, mixed in incredible surround sound.",
    yt_trailer_code: "6w5KCf8hXvo",
    language: "en",
    mpa_rating: "",
    background_image:
      "https://yts.mx/assets/images/movies/muse_live_at_rome_olympic_stadium_2013/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/muse_live_at_rome_olympic_stadium_2013/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/muse_live_at_rome_olympic_stadium_2013/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/muse_live_at_rome_olympic_stadium_2013/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/muse_live_at_rome_olympic_stadium_2013/large-cover.jpg",
    state: "ok",
    date_uploaded: "2022-04-07 18:37:32",
    date_uploaded_unix: 1649349452,
    like: false,
  },
  {
    id: 1151,
    imdb_code: "tt0137523",
    title: "Fight Club",
    title_english: "Fight Club",
    title_long: "Fight Club (1999)",
    slug: "fight-club-1999",
    year: 1999,
    rating: 8.8,
    runtime: 139,
    genres: ["Action", "Drama"],
    summary:
      "A nameless first person narrator (Edward Norton) attends support groups in attempt to subdue his emotional state and relieve his insomniac state. When he meets Marla (Helena Bonham Carter), another fake attendee of support groups, his life seems to become a little more bearable. However when he associates himself with Tyler (Brad Pitt) he is dragged into an underground fight club and soap making scheme. Together the two men spiral out of control and engage in competitive rivalry for love and power.",
    description_full:
      "A nameless first person narrator (Edward Norton) attends support groups in attempt to subdue his emotional state and relieve his insomniac state. When he meets Marla (Helena Bonham Carter), another fake attendee of support groups, his life seems to become a little more bearable. However when he associates himself with Tyler (Brad Pitt) he is dragged into an underground fight club and soap making scheme. Together the two men spiral out of control and engage in competitive rivalry for love and power.",
    synopsis:
      "A nameless first person narrator (Edward Norton) attends support groups in attempt to subdue his emotional state and relieve his insomniac state. When he meets Marla (Helena Bonham Carter), another fake attendee of support groups, his life seems to become a little more bearable. However when he associates himself with Tyler (Brad Pitt) he is dragged into an underground fight club and soap making scheme. Together the two men spiral out of control and engage in competitive rivalry for love and power.",
    yt_trailer_code: "BdJKm16Co6M",
    language: "en",
    mpa_rating: "R",
    background_image:
      "https://yts.mx/assets/images/movies/Fight_Club_1999/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/Fight_Club_1999/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/Fight_Club_1999/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/Fight_Club_1999/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/Fight_Club_1999/large-cover.jpg",
    state: "ok",
    date_uploaded: "2021-05-18 14:23:15",
    date_uploaded_unix: 1621340595,
    like: false,
  },
  {
    id: 1208,
    imdb_code: "tt0109830",
    title: "Forrest Gump",
    title_english: "Forrest Gump",
    title_long: "Forrest Gump (1994)",
    slug: "forrest-gump-1994",
    year: 1994,
    rating: 8.8,
    runtime: 142,
    genres: ["Action", "Comedy", "Drama", "Romance"],
    summary:
      "Forrest Gump is a simple man with a low I.Q. but good intentions. He is running through childhood with his best and only friend Jenny. His 'mama' teaches him the ways of life and leaves him to choose his destiny. Forrest joins the army for service in Vietnam, finding new friends called Dan and Bubba, he wins medals, creates a famous shrimp fishing fleet, inspires people to jog, starts a ping-pong craze, creates the smiley, writes bumper stickers and songs, donates to people and meets the president several times. However, this is all irrelevant to Forrest who can only think of his childhood sweetheart Jenny Curran, who has messed up her life. Although in the end all he wants to prove is that anyone can love anyone.",
    description_full:
      "Forrest Gump is a simple man with a low I.Q. but good intentions. He is running through childhood with his best and only friend Jenny. His 'mama' teaches him the ways of life and leaves him to choose his destiny. Forrest joins the army for service in Vietnam, finding new friends called Dan and Bubba, he wins medals, creates a famous shrimp fishing fleet, inspires people to jog, starts a ping-pong craze, creates the smiley, writes bumper stickers and songs, donates to people and meets the president several times. However, this is all irrelevant to Forrest who can only think of his childhood sweetheart Jenny Curran, who has messed up her life. Although in the end all he wants to prove is that anyone can love anyone.",
    synopsis:
      "Forrest Gump is a simple man with a low I.Q. but good intentions. He is running through childhood with his best and only friend Jenny. His 'mama' teaches him the ways of life and leaves him to choose his destiny. Forrest joins the army for service in Vietnam, finding new friends called Dan and Bubba, he wins medals, creates a famous shrimp fishing fleet, inspires people to jog, starts a ping-pong craze, creates the smiley, writes bumper stickers and songs, donates to people and meets the president several times. However, this is all irrelevant to Forrest who can only think of his childhood sweetheart Jenny Curran, who has messed up her life. Although in the end all he wants to prove is that anyone can love anyone.",
    yt_trailer_code: "d6A38n0W4u4",
    language: "en",
    mpa_rating: "PG-13",
    background_image:
      "https://yts.mx/assets/images/movies/Forrest_Gump_1994/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/Forrest_Gump_1994/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/Forrest_Gump_1994/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/Forrest_Gump_1994/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/Forrest_Gump_1994/large-cover.jpg",
    state: "ok",
    date_uploaded: "2015-10-31 23:30:05",
    date_uploaded_unix: 1446330605,
    like: false,
  },
  {
    id: 1606,
    imdb_code: "tt1375666",
    title: "Inception",
    title_english: "Inception",
    title_long: "Inception (2010)",
    slug: "inception-2010",
    year: 2010,
    rating: 8.8,
    runtime: 148,
    genres: ["Action", "Adventure", "Crime", "Mystery", "Sci-Fi", "Thriller"],
    summary:
      "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible, inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea, but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming.",
    description_full:
      "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible, inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea, but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming.",
    synopsis:
      "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible, inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea, but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming.",
    yt_trailer_code: "mpj9dL7swwk",
    language: "en",
    mpa_rating: "PG-13",
    background_image:
      "https://yts.mx/assets/images/movies/Inception_2010/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/Inception_2010/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/Inception_2010/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/Inception_2010/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/Inception_2010/large-cover.jpg",
    state: "ok",
    date_uploaded: "2015-11-01 00:14:37",
    date_uploaded_unix: 1446333277,
    like: false,
  },
  {
    id: 6618,
    imdb_code: "tt2077886",
    title: "The Phantom of the Opera at the Royal Albert Hall",
    title_english: "The Phantom of the Opera at the Royal Albert Hall",
    title_long: "The Phantom of the Opera at the Royal Albert Hall (2011)",
    slug: "the-phantom-of-the-opera-at-the-royal-albert-hall-2011",
    year: 2011,
    rating: 8.8,
    runtime: 137,
    genres: ["Action", "Drama", "Music", "Musical", "Romance", "Thriller"],
    summary:
      "In 1986, Andrew Lloyd Webber's The Phantom of the Opera arrived on the West End stage at Her Majesty's Theatre. Fast forward 25 years and Phantom has achieved global success, millions of viewers, a film adaptation in 2004 and a musical sequel. Now viewers have the chance to experience this phenomenal show right from their own screens. Filmed at the Royal Albert Hall, this stunning performance brings the show to a bigger stage and celebrates its role as one of the biggest shows in theatre history, with speeches, performances and appearances by the original cast and some of the show's most notable Phantoms, including John Owen-Jones and Colm Wilkinson. Starring Ramin Karimloo and Sierra Boggess, Phantom tells the story of a deformed musical genius who lives in the catacombs of the Paris Opera House. Shunned by society, the Phantom seeks revenge in cruel and often violent acts. The Phantom is in love with chorus girl Christine Daaé and has been secretly training her to replace La Carlotta as the opera's reigning diva. However, when Christine is thrust into the spotlight, she is also reunited with childhood friend Raoul. Passion, obsession and chaos ensue as Christine finds herself torn between her love for Raoul and her strange pull towards the mysterious and dangerous Phantom.",
    description_full:
      "In 1986, Andrew Lloyd Webber's The Phantom of the Opera arrived on the West End stage at Her Majesty's Theatre. Fast forward 25 years and Phantom has achieved global success, millions of viewers, a film adaptation in 2004 and a musical sequel. Now viewers have the chance to experience this phenomenal show right from their own screens. Filmed at the Royal Albert Hall, this stunning performance brings the show to a bigger stage and celebrates its role as one of the biggest shows in theatre history, with speeches, performances and appearances by the original cast and some of the show's most notable Phantoms, including John Owen-Jones and Colm Wilkinson. Starring Ramin Karimloo and Sierra Boggess, Phantom tells the story of a deformed musical genius who lives in the catacombs of the Paris Opera House. Shunned by society, the Phantom seeks revenge in cruel and often violent acts. The Phantom is in love with chorus girl Christine Daaé and has been secretly training her to replace La Carlotta as the opera's reigning diva. However, when Christine is thrust into the spotlight, she is also reunited with childhood friend Raoul. Passion, obsession and chaos ensue as Christine finds herself torn between her love for Raoul and her strange pull towards the mysterious and dangerous Phantom.",
    synopsis:
      "In 1986, Andrew Lloyd Webber's The Phantom of the Opera arrived on the West End stage at Her Majesty's Theatre. Fast forward 25 years and Phantom has achieved global success, millions of viewers, a film adaptation in 2004 and a musical sequel. Now viewers have the chance to experience this phenomenal show right from their own screens. Filmed at the Royal Albert Hall, this stunning performance brings the show to a bigger stage and celebrates its role as one of the biggest shows in theatre history, with speeches, performances and appearances by the original cast and some of the show's most notable Phantoms, including John Owen-Jones and Colm Wilkinson. Starring Ramin Karimloo and Sierra Boggess, Phantom tells the story of a deformed musical genius who lives in the catacombs of the Paris Opera House. Shunned by society, the Phantom seeks revenge in cruel and often violent acts. The Phantom is in love with chorus girl Christine Daaé and has been secretly training her to replace La Carlotta as the opera's reigning diva. However, when Christine is thrust into the spotlight, she is also reunited with childhood friend Raoul. Passion, obsession and chaos ensue as Christine finds herself torn between her love for Raoul and her strange pull towards the mysterious and dangerous Phantom.",
    yt_trailer_code: "wp83o8jgQOg",
    language: "en",
    mpa_rating: "",
    background_image:
      "https://yts.mx/assets/images/movies/the_phantom_of_the_opera_at_the_royal_albert_hall_2011/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/the_phantom_of_the_opera_at_the_royal_albert_hall_2011/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/the_phantom_of_the_opera_at_the_royal_albert_hall_2011/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/the_phantom_of_the_opera_at_the_royal_albert_hall_2011/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/the_phantom_of_the_opera_at_the_royal_albert_hall_2011/large-cover.jpg",
    state: "ok",
    date_uploaded: "2017-07-08 05:35:36",
    date_uploaded_unix: 1499484936,
    like: false,
  },
  {
    id: 3313,
    imdb_code: "tt0060196",
    title: "The Good, the Bad and the Ugly",
    title_english: "The Good, the Bad and the Ugly",
    title_long: "The Good, the Bad and the Ugly (1966)",
    slug: "the-good-the-bad-and-the-ugly-1966",
    year: 1966,
    rating: 8.8,
    runtime: 161,
    genres: ["Action", "Adventure", "Western"],
    summary:
      "Blondie, The Good (Clint Eastwood), is a professional gunslinger who is out trying to earn a few dollars. Angel Eyes, The Bad (Lee Van Cleef), is a hitman who always commits to a task and sees it through--as long as he&#39;s paid to do so. And Tuco, The Ugly (Eli Wallach), is a wanted outlaw trying to take care of his own hide. Tuco and Blondie share a partnership making money off of Tuco&#39;s bounty, but when Blondie unties the partnership, Tuco tries to hunt down Blondie. When Blondie and Tuco come across a horse carriage loaded with dead bodies, they soon learn from the only survivor, Bill Carson (Antonio Casale), that he and a few other men have buried a stash of gold in a cemetery. Unfortunately, Carson dies and Tuco only finds out the name of the cemetery, while Blondie finds out the name on the grave. Now the two must keep each other alive in order to find the gold. Angel Eyes (who had been looking for Bill Carson) discovers that Tuco and Blondie met with Carson and knows they know where the gold is; now he needs them to lead him to it. Now The Good, the Bad, and the Ugly must all battle it out to get their hands on $200,000.00 worth of gold.",
    description_full:
      "Blondie, The Good (Clint Eastwood), is a professional gunslinger who is out trying to earn a few dollars. Angel Eyes, The Bad (Lee Van Cleef), is a hitman who always commits to a task and sees it through--as long as he&#39;s paid to do so. And Tuco, The Ugly (Eli Wallach), is a wanted outlaw trying to take care of his own hide. Tuco and Blondie share a partnership making money off of Tuco&#39;s bounty, but when Blondie unties the partnership, Tuco tries to hunt down Blondie. When Blondie and Tuco come across a horse carriage loaded with dead bodies, they soon learn from the only survivor, Bill Carson (Antonio Casale), that he and a few other men have buried a stash of gold in a cemetery. Unfortunately, Carson dies and Tuco only finds out the name of the cemetery, while Blondie finds out the name on the grave. Now the two must keep each other alive in order to find the gold. Angel Eyes (who had been looking for Bill Carson) discovers that Tuco and Blondie met with Carson and knows they know where the gold is; now he needs them to lead him to it. Now The Good, the Bad, and the Ugly must all battle it out to get their hands on $200,000.00 worth of gold.",
    synopsis:
      "Blondie, The Good (Clint Eastwood), is a professional gunslinger who is out trying to earn a few dollars. Angel Eyes, The Bad (Lee Van Cleef), is a hitman who always commits to a task and sees it through--as long as he&#39;s paid to do so. And Tuco, The Ugly (Eli Wallach), is a wanted outlaw trying to take care of his own hide. Tuco and Blondie share a partnership making money off of Tuco&#39;s bounty, but when Blondie unties the partnership, Tuco tries to hunt down Blondie. When Blondie and Tuco come across a horse carriage loaded with dead bodies, they soon learn from the only survivor, Bill Carson (Antonio Casale), that he and a few other men have buried a stash of gold in a cemetery. Unfortunately, Carson dies and Tuco only finds out the name of the cemetery, while Blondie finds out the name on the grave. Now the two must keep each other alive in order to find the gold. Angel Eyes (who had been looking for Bill Carson) discovers that Tuco and Blondie met with Carson and knows they know where the gold is; now he needs them to lead him to it. Now The Good, the Bad, and the Ugly must all battle it out to get their hands on $200,000.00 worth of gold.",
    yt_trailer_code: "IFNUGzCOQoI",
    language: "it",
    mpa_rating: "",
    background_image:
      "https://yts.mx/assets/images/movies/The_Good_The_Bad_and_the_Ugly_1966/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/The_Good_The_Bad_and_the_Ugly_1966/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/The_Good_The_Bad_and_the_Ugly_1966/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/The_Good_The_Bad_and_the_Ugly_1966/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/The_Good_The_Bad_and_the_Ugly_1966/large-cover.jpg",
    state: "ok",
    date_uploaded: "2022-03-01 19:09:31",
    date_uploaded_unix: 1646158171,
    like: false,
  },
  {
    id: 3488,
    imdb_code: "tt0120737",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    title_english: "The Lord of the Rings: The Fellowship of the Ring",
    title_long: "The Lord of the Rings: The Fellowship of the Ring (2001)",
    slug: "the-lord-of-the-rings-the-fellowship-of-the-ring-2001",
    year: 2001,
    rating: 8.8,
    runtime: 178,
    genres: ["Action", "Adventure", "Drama", "Fantasy"],
    summary:
      "An ancient Ring thought lost for centuries has been found, and through a strange twist of fate has been given to a small Hobbit named Frodo. When Gandalf discovers the Ring is in fact the One Ring of the Dark Lord Sauron, Frodo must make an epic quest to the Cracks of Doom in order to destroy it. However, he does not go alone. He is joined by Gandalf, Legolas the elf, Gimli the Dwarf, Aragorn, Boromir, and his three Hobbit friends Merry, Pippin, and Samwise. Through mountains, snow, darkness, forests, rivers and plains, facing evil and danger at every corner the Fellowship of the Ring must go. Their quest to destroy the One Ring is the only hope for the end of the Dark Lords reign.",
    description_full:
      "An ancient Ring thought lost for centuries has been found, and through a strange twist of fate has been given to a small Hobbit named Frodo. When Gandalf discovers the Ring is in fact the One Ring of the Dark Lord Sauron, Frodo must make an epic quest to the Cracks of Doom in order to destroy it. However, he does not go alone. He is joined by Gandalf, Legolas the elf, Gimli the Dwarf, Aragorn, Boromir, and his three Hobbit friends Merry, Pippin, and Samwise. Through mountains, snow, darkness, forests, rivers and plains, facing evil and danger at every corner the Fellowship of the Ring must go. Their quest to destroy the One Ring is the only hope for the end of the Dark Lords reign.",
    synopsis:
      "An ancient Ring thought lost for centuries has been found, and through a strange twist of fate has been given to a small Hobbit named Frodo. When Gandalf discovers the Ring is in fact the One Ring of the Dark Lord Sauron, Frodo must make an epic quest to the Cracks of Doom in order to destroy it. However, he does not go alone. He is joined by Gandalf, Legolas the elf, Gimli the Dwarf, Aragorn, Boromir, and his three Hobbit friends Merry, Pippin, and Samwise. Through mountains, snow, darkness, forests, rivers and plains, facing evil and danger at every corner the Fellowship of the Ring must go. Their quest to destroy the One Ring is the only hope for the end of the Dark Lords reign.",
    yt_trailer_code: "UXgbHdnoJrg",
    language: "en",
    mpa_rating: "PG-13",
    background_image:
      "https://yts.mx/assets/images/movies/The_Lord_of_the_Rings_The_Fellowship_of_the_Ring_EXTENDED_2001/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/The_Lord_of_the_Rings_The_Fellowship_of_the_Ring_EXTENDED_2001/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/The_Lord_of_the_Rings_The_Fellowship_of_the_Ring_EXTENDED_2001/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/The_Lord_of_the_Rings_The_Fellowship_of_the_Ring_EXTENDED_2001/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/The_Lord_of_the_Rings_The_Fellowship_of_the_Ring_EXTENDED_2001/large-cover.jpg",
    state: "ok",
    date_uploaded: "2015-11-01 02:58:08",
    date_uploaded_unix: 1446343088,
    like: false,
  },
  {
    id: 3490,
    imdb_code: "tt0167261",
    title: "The Lord of the Rings: The Two Towers",
    title_english: "The Lord of the Rings: The Two Towers",
    title_long: "The Lord of the Rings: The Two Towers (2002)",
    slug: "the-lord-of-the-rings-the-two-towers-2002",
    year: 2002,
    rating: 8.8,
    runtime: 179,
    genres: ["Action", "Adventure", "Drama", "Family", "Fantasy"],
    summary:
      "The continuing quest of Frodo and the Fellowship to destroy the One Ring. Frodo and Sam discover they are being followed by the mysterious Gollum. Aragorn, the Elf archer Legolas, and Gimli the Dwarf encounter the besieged Rohan kingdom, whose once great King Theoden has fallen under Saruman's deadly spell.",
    description_full:
      "The continuing quest of Frodo and the Fellowship to destroy the One Ring. Frodo and Sam discover they are being followed by the mysterious Gollum. Aragorn, the Elf archer Legolas, and Gimli the Dwarf encounter the besieged Rohan kingdom, whose once great King Theoden has fallen under Saruman's deadly spell.",
    synopsis:
      "The continuing quest of Frodo and the Fellowship to destroy the One Ring. Frodo and Sam discover they are being followed by the mysterious Gollum. Aragorn, the Elf archer Legolas, and Gimli the Dwarf encounter the besieged Rohan kingdom, whose once great King Theoden has fallen under Saruman's deadly spell.",
    yt_trailer_code: "nuTU5XcZTLA",
    language: "en",
    mpa_rating: "PG-13",
    background_image:
      "https://yts.mx/assets/images/movies/The_Lord_of_the_Rings_The_Two_Towers_EXTENDED_2002/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/The_Lord_of_the_Rings_The_Two_Towers_EXTENDED_2002/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/The_Lord_of_the_Rings_The_Two_Towers_EXTENDED_2002/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/The_Lord_of_the_Rings_The_Two_Towers_EXTENDED_2002/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/The_Lord_of_the_Rings_The_Two_Towers_EXTENDED_2002/large-cover.jpg",
    state: "ok",
    date_uploaded: "2015-11-01 02:58:24",
    date_uploaded_unix: 1446343104,
    like: false,
  },
  {
    id: 25833,
    imdb_code: "tt10060772",
    title: "HAM: A Musical Memoir",
    title_english: "HAM: A Musical Memoir",
    title_long: "HAM: A Musical Memoir (2020)",
    slug: "ham-a-musical-memoir-2020",
    year: 2020,
    rating: 8.8,
    runtime: 113,
    genres: ["Action", "Comedy", "Documentary", "Musical"],
    summary:
      "A live recording of Sam Harris&#39;s award-winning one-man musical performance, tracing his rise to stage stardom.",
    description_full:
      "A live recording of Sam Harris&#39;s award-winning one-man musical performance, tracing his rise to stage stardom.",
    synopsis:
      "A live recording of Sam Harris&#39;s award-winning one-man musical performance, tracing his rise to stage stardom.",
    yt_trailer_code: "",
    language: "en",
    mpa_rating: "",
    background_image:
      "https://yts.mx/assets/images/movies/ham_a_musical_memoir_2020/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/ham_a_musical_memoir_2020/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/ham_a_musical_memoir_2020/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/ham_a_musical_memoir_2020/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/ham_a_musical_memoir_2020/large-cover.jpg",
    state: "ok",
    date_uploaded: "2021-01-09 01:18:22",
    date_uploaded_unix: 1610151502,
    like: false,
  },
  {
    id: 9717,
    imdb_code: "tt5311546",
    title: "Natsamrat",
    title_english: "Natsamrat",
    title_long: "Natsamrat (2016)",
    slug: "natsamrat-2016",
    year: 2016,
    rating: 8.8,
    runtime: 166,
    genres: ["Action", "Drama", "Family"],
    summary:
      "The film is a tragedy about a veteran theatre actor named Ganpat &quot;Appa&quot; Belwalkar (Nana Patekar) who has been the best of his lot during his heyday, garnering fame and fortune acting in plays based on various works, especially William Shakespeare&#39;s. It is a tragedy of a veteran actor who enjoyed a very vital importance in his life but who becomes the victim of old age alienation and estrangement. The film reveals an intensely tragic fate of an actor who becomes victim of fate and fortune in old age, which is similar to the fate of Lear. Natsamrat suffers the pangs of old age and dishonor inflicted on him by his own children. It is a tragedy of great humanist and actor who succumbs to the ill fate and destiny. In fact, Natsamrat is a story of Ganpatrao Belvalkar, who withstands great suffering after his retirement from stage acting.",
    description_full:
      "The film is a tragedy about a veteran theatre actor named Ganpat &quot;Appa&quot; Belwalkar (Nana Patekar) who has been the best of his lot during his heyday, garnering fame and fortune acting in plays based on various works, especially William Shakespeare&#39;s. It is a tragedy of a veteran actor who enjoyed a very vital importance in his life but who becomes the victim of old age alienation and estrangement. The film reveals an intensely tragic fate of an actor who becomes victim of fate and fortune in old age, which is similar to the fate of Lear. Natsamrat suffers the pangs of old age and dishonor inflicted on him by his own children. It is a tragedy of great humanist and actor who succumbs to the ill fate and destiny. In fact, Natsamrat is a story of Ganpatrao Belvalkar, who withstands great suffering after his retirement from stage acting.",
    synopsis:
      "The film is a tragedy about a veteran theatre actor named Ganpat &quot;Appa&quot; Belwalkar (Nana Patekar) who has been the best of his lot during his heyday, garnering fame and fortune acting in plays based on various works, especially William Shakespeare&#39;s. It is a tragedy of a veteran actor who enjoyed a very vital importance in his life but who becomes the victim of old age alienation and estrangement. The film reveals an intensely tragic fate of an actor who becomes victim of fate and fortune in old age, which is similar to the fate of Lear. Natsamrat suffers the pangs of old age and dishonor inflicted on him by his own children. It is a tragedy of great humanist and actor who succumbs to the ill fate and destiny. In fact, Natsamrat is a story of Ganpatrao Belvalkar, who withstands great suffering after his retirement from stage acting.",
    yt_trailer_code: "DCXDyIsPEN8",
    language: "mr",
    mpa_rating: "",
    background_image:
      "https://yts.mx/assets/images/movies/natsamrat_2016/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/natsamrat_2016/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/natsamrat_2016/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/natsamrat_2016/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/natsamrat_2016/large-cover.jpg",
    state: "ok",
    date_uploaded: "2018-11-12 08:18:51",
    date_uploaded_unix: 1542007131,
    like: false,
  },
];
