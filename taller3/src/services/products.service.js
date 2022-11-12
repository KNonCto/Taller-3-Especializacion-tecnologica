import axios from "axios";

const baseURL = "http://170.239.85.65:4000/products";

export function listProducts() {
  return axios.get(baseURL);
}

export function listReviews(id) {
  return axios.get(`${baseURL}/${id}/reviews`);
}

export function addReview(id, data) {
  return axios.post(`${baseURL}/${id}/reviews`, data, {
    headers: { apikey: "549a1f20-84aa-41a5-ad24-13ac557617e69" },
  });
}
