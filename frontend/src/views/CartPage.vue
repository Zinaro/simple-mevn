<template>
  <h1>Shopping Cart</h1>
  <div v-if="cartItems.length > 0">
    <div class="product-container" v-for="item in cartItems" :key="item.id">
      <img :src="item.imageName" class="product-image" />
      <div class="details-wrap">
        <h3>{{ item.name }}</h3>
        <p>{{ item.price }}</p>
      </div>
      <button class="remove-button">Remove From Cart</button>
    </div>
    <button class="checkout-button">Proceed To Checkout</button>
  </div>
  <div v-else>
    Your Cart is empty!
  </div>
</template>

<script>
import { cartItems } from "../temp-db.js"
export default {
  name: "CartPage",
  data() {
    return {
      cartItems: []
    }
  }
}
</script>

<style scoped></style>