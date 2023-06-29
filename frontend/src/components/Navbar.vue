<template>
  <div class="nav-bar">
    <router-link to="/" class="products-link">
      <div class="logo-wrap">
        <img :src="logo" />
      </div>
    </router-link>

    <router-link to="/cart" class="cart-link">
      <button>Shopping Cart</button>
    </router-link>
    <div @click="toggleTheme" class="theme-sec">
      <button v-if="theme === 'dark'">Gunduz</button>
      <button v-else>Gece</button>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/logo-hexagon.svg";
export default {
  name: "Navbar",
  data() {
    return {
      logo,
      theme: localStorage.getItem("theme") || "light",
    };
  },
  mounted() {
    document.documentElement.dataset.theme = this.theme;
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
      document.documentElement.dataset.theme = this.theme;
      localStorage.setItem("theme", this.theme);
    },
  },
};
</script>

<style scoped>
.theme-sec {
  position: absolute;
  right: 164px;
  top: 16px;
}
</style>