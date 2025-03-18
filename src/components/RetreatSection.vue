<template>
    <section id="retreat" class="section">
      <div class="container">
        <h2>Experience Our Transformative Retreat in Thailand</h2>
        <p>Immerse yourself in a life-changing experience in the serene setting of Chiang Mai. Our retreat offers a unique blend of personal growth, community building, and cultural immersion.</p>
        <router-link to="/retreat-details" class="btn">Learn More About the Retreat</router-link>
      </div>
    </section>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router';
  </script>
  
  <style scoped>
  .section {
    padding: 80px 0;
  }
  
  .section h2 {
    text-align: center;
    margin-bottom: 30px;
  }
  
  .container {
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .btn {
    display: inline-block;
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .btn:hover {
    background-color: #B85C38;
  }

  
  </style>