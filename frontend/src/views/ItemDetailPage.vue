<template>
  <div class="image-wrap">
    <img :src="product.imageName">
  </div>
  <div class="product-details">
    <h1>{{ product.name }}</h1>
    <h3 class="price"> {{ product.price }}</h3>
    <button class="add-to-cart">Add To Cart</button>
  </div>
</template>

<script>
import { products } from "../temp-db.js";
export default {
  name: "ItemDetailPage",
  data() {
    return {
      product: products.find(product => product.id === this.$route.params.itemId)
    }
  }
}
</script>

<style scoped></style>