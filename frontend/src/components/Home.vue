<template>
  <div class="home">
    <ItemsList :products="products"></ItemsList>
    <div>
      <router-link :to="'/items/'">
        <button>More Items</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { products } from "../temp-db.js";
import ItemsList from "./ItemsList.vue";

export default {
  name: "HomePage",
  components: {
    ItemsList,
  },
  data() {
    return {
      products: {},
    };
  },
  mounted() {
    this.products = products.slice(0, 6);
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
