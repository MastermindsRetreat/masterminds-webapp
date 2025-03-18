<template>
    <section id="enroll" class="section enroll-section">
      <div class="container">
        <h2>Enroll Today</h2>
        <p>Take the first step towards a better you. Enroll in our course and join our community.</p>
        <router-link to="/enroll" class="btn btn-enroll">Enroll Now</router-link>
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
  
  .container {
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .enroll-section {
    background-color: #e9ecef;
    text-align: center;
  }
  
  .btn-enroll {
    font-size: 1.2em;
    padding: 15px 30px;
  }
  </style>