import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 9c0def13670189e0b25cd6963cf4368254a593c087892539dbf67df4aa28655c"
  }
});
