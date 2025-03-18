<template>
    <div>
      <AppHeader />
      <div class="container section">
        <h2>Enroll Section</h2>
        <p>Information of how to enroll.</p>
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