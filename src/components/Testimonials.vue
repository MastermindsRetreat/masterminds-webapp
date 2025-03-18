<template>
    <div class="testimonial">
      <div class="quote-icon">“</div>
      <p class="testimonial-text">{{ testimonial.text }}</p>
      <p class="testimonial-author">- {{ testimonial.author }}</p>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    testimonial: {
      type: Object,
      required: true
    }
  });
  </script>
  
  <style scoped>
  .testimonial {
    background-color: #f9f9f9;
    border: 1px solid #eee;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
  
  .quote-icon {
    font-size: 2rem;
    color: #B85C38; /* Rusty Orange (example) */
    line-height: 1;
    margin-bottom: 10px;
    display: block;
  }
  
  .testimonial-text {
    font-style: italic;
    color: #555;
    margin-bottom: 10px;
  }
  
  .testimonial-author {
    text-align: right;
    font-weight: bold;
    color: #333;
  }
  </style>