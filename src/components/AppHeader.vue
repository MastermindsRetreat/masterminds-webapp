<template>
  <header>
    <div class="container">
      <router-link to="/" class="logo">
        <img src="/logo.png" alt="Masterminds Logo" style="height: 60px;">
      </router-link>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/retreats">Retreats</router-link></li>
          <li><router-link to="/community">Community</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
header {
  background-color: rgba(0, 0, 0, 0.7); /* Dark background with 70% opacity */
  color: #fff;
  padding: 15px 0; /* Slightly increased padding */
  position: fixed; /* Make it stick to the top */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10; /* Ensure it stays above other content */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}
.container {
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  text-decoration: none;
  display: flex;
  align-items: center;
}

.logo img {
  height: 60px;
}

nav ul {
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
}

nav ul li {
  margin-left: 20px; /* Add left margin to separate links */
}

/* Remove margin from the first link if you don't want space before it */
nav ul li:first-child {
  margin-left: 0;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
}
</style>