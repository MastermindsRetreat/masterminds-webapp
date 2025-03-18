<template>
    <div>
      <AppHeader />
      <div class="container section">
        <h2>Details of Retreat</h2>
        <p>Information about our retreat.</p>
      </div>
      <AppFooter />
    </div>
  </template>
  
  <script setup>
  import AppHeader from '../components/AppHeader.vue';
  import AppFooter from '../components/AppFooter.vue';
  </script>
  
  <style scoped>
  .section {
    padding: 80px 0;
  }
  .container {
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
  }
  </style>