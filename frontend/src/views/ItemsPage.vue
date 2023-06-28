<template>
  <h1>Items</h1>
  <div class="grid-wrap">
    <div class="product-item" v-for="product in products" :key="product.id">
      <img :src="product.imageName" />
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-price">{{ product.price }}</p>
      <router-link :to="'/items/' + product.id">
        <button>View Details</button>
      </router-link>

    </div>
  </div>
</template>

<script>
import { products } from "../temp-db.js"
export default {
  name: "ItemsPage",
  data() {
    return {
      products
    }
  }
}
</script>

<style scoped></style>