<template>
  <h1>Items</h1>
  <ItemsList :products="products"></ItemsList>
</template>

<script>
import { products } from "../temp-db.js"
import ItemsList from "../components/ItemsList.vue";
export default {
  name: "ItemsPage",
  components: { ItemsList },
  data() {
    return {
      products
    }
  }
}
</script>

<style scoped></style>