import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID dgQ4Pj26x73pM-1xkAooREYCb5RfsoqqbEnWesB6fkM",
  },
});
