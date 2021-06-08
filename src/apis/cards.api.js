import axios from "axios";

export function getCardsApi() {
  return axios.get("https://60becf8e6035840017c17a48.mockapi.io/api/cards");
}
