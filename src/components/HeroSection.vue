<template>
  <section id="hero" class="hero">
    <div class="hero-video-background">
      <video src="/intro-video.mp4" autoplay loop muted poster="/video-poster.png" class="background-video"></video>
    </div>
    <div class="container hero-content">
      <h1>Unlock Your Potential. Build Your Brotherhood.</h1>
      <p class="lead">A transformative journey for men seeking growth, connection, and purpose.</p>
      <router-link to="/enroll" class="button primary">Enroll Now</router-link>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.hero {
  position: relative;
  color: #fff;
  padding: 150px 0;
  text-align: center;
  overflow: hidden;
}

/* If you have a background image or video overlay, adjust its color */
.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4); /* Dark overlay */
  z-index: -1;
}

.hero-video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2; /* Behind the overlay */
}

.background-video {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.hero-content {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: #FAF0E6; /* Off-white */
}

.lead {
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  font-weight: 300;
  color: #F5F5DC; /* Creamy Beige */
}

.button {
  display: inline-block;
  padding: 15px 30px;
  border-radius: 8px;
  font-size: 1.1rem;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.button.primary {
  display: inline-block;
  padding: 12px 25px;
  border-radius: 5px;
  font-size: 1rem;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  border: 1px solid #B85C38; /* Rusty Orange */
  background-color: #B85C38;
  color: #FAF0E6; /* Off-white */
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  line-height: 1;
}

.button.primary:hover {
  background-color: #E97451; /* Burnt Sienna */
  border-color: #E97451;
}

video {
  width: 100%; /* Make video responsive */
  max-width: 800px; /* Limit video width */
  margin-bottom: 2rem;
}
</style>