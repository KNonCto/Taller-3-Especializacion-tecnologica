<template>
  <div class="container mt-5">
    <ul class="list-group" v-for="product in products" :key="product._id">
      <li @click="showReviews(product._id)" class="list-group-item mb-2 hover">
        <h3>{{ product.name }}</h3>
        <img :src="product.images[0]" width="200" />
        <h6>Creado: {{ product.createdAt }}</h6>
      </li>
    </ul>
  </div>
</template>

<script>
import { listProducts } from "../services/products.service";

export default {
  name: "ProductsView",
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    showReviews(id) {
      this.$router.push({ name: "reviews", params: { id } });
    },
    async getProducts() {
      const response = await listProducts();
      this.products = response.data;
    },
  },
};
</script>

<style>
.hover {
  cursor: pointer;
}
</style>
