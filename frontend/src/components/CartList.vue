<template>
  <div class="product-container" v-for="item in cartItems" :key="item.id">
    <img :src="item.imageName" class="product-image" />
    <div class="details-wrap">
      <h3>{{ item.name }}</h3>
      <p>{{ item.price }}</p>
    </div>
    <button class="remove-button">Remove From Cart</button>
  </div>
</template>

<script>
export default {
  name: "CartList",
  props: ['cartItems']
}
</script>