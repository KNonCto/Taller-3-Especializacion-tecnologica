<template>
  <div class="container mt-5">
    <ul class="list-group" v-for="(review, index) in reviews" :key="index">
      <li v-if="index === 0" class="list-group-item mb-2">
        <h3>{{ review.productId.name }}</h3>
        <img
          v-for="(img, index) in review.productId.images"
          :key="index"
          :src="img"
          width="200"
        />
        <h6>Creado: {{ review.createdAt }}</h6>
        <p>Descripción: {{ review.productId.description }}</p>
      </li>
      <li class="list-group-item mb-2">
        <h5>{{ review.user.name }}</h5>
        <p>{{ review.review }}</p>
      </li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item mb-2">
        <div>
          <label class="form-label">Review:</label>
          <input v-model="text" placeholder="Escriba su review" />
        </div>
        <button @click="addReview(this.id, text)" class="btn btn-success m-2">
          Enviar
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { listReviews, addReview } from "../services/products.service";

export default {
  name: "ReviewsView",
  data() {
    return {
      reviews: [],
      name: "",
      text: "",
    };
  },
  props: {
    id: String,
  },
  mounted() {
    this.getReviews(this.id);
  },
  methods: {
    addReview(id, text) {
      const data = {
        _id: id,
        user: id,
        productId: id,
        review: text,
      };
      addReview(id, data);
    },
    async getReviews(id) {
      const response = await listReviews(id);
      this.reviews = response.data;
    },
  },
};
</script>
