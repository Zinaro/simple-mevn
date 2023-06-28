<template>
  <h1>Shopping Cart</h1>
  <div v-if="cartItems.length > 0">
    <ChartList :cartItems="cartItems"></ChartList>
    <button class="checkout-button">Proceed To Checkout</button>
  </div>
  <div v-else>
    Your Cart is empty!
  </div>
</template>

<script>
import { cartItems } from "../temp-db.js"
import ChartList from "../components/CartList.vue"
export default {
  name: "CartPage",
  components: {
    ChartList
  },
  data() {
    return {
      cartItems
    }
  }
}
</script>

<style scoped></style>