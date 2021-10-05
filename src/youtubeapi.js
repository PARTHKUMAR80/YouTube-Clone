import axios from "axios";
const KEY='AIzaSyBPAakwC7Tl5S_Brk_-WdBTJw1EL7wrcp0';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResult: 5,
    key: KEY,
  },
});