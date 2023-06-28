<template>
  <div v-if="product">
    <div class="image-wrap">
      <img :src="product.imageName">
    </div>
    <div class="product-details">
      <h1>{{ product.name }}</h1>
      <h3 class="price"> {{ product.price }}</h3>
      <button class="add-to-cart">Add To Cart</button>
    </div>
  </div>
  <div v-else>
    <NotFound />
  </div>
</template>

<script>
import { products } from "../temp-db.js";
import NotFound from "./NotFoundPage.vue";
export default {
  name: "ItemDetailPage",
  components: {
    NotFound
  },
  data() {
    return {
      product: products.find(product => product.id === this.$route.params.itemId)
    }
  }
}
</script>

<style scoped></style>