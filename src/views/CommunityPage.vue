<template>
  <div>
    <AppHeader />
    <section class="community-page section">
      <div class="container">
        <h2>Join Our Thriving Community</h2>
        <p class="intro">Connect with like-minded men on a journey of growth and self-improvement. Hear what our members are saying:</p>

        <div class="community-image">
          <img src="/community-chilling.jpg" alt="Men Chilling in the Masterminds Community">
        </div>

        <div class="testimonials-grid">
          <Testimonial v-for="testimonial in testimonials" :key="testimonial.id" :testimonial="testimonial" />
        </div>

        <div class="call-to-action">
          <h3>Ready to Connect?</h3>
          <p>Become part of the Masterminds community today!</p>
          <router-link to="/join" class="button primary">Join Now</router-link>
        </div>
      </div>
    </section>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import Testimonial from '../components/Testimonials.vue';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const testimonials = ref([
  {
    id: 1,
    author: "Ethan M.",
    text: "Masterminds has been a game-changer for me. The brotherhood and support are incredible, and I've seen significant positive changes in my mindset and actions."
  },
  
  {
    id: 2,
    author: "Caleb J.",
    text: "I was feeling lost and without direction before joining. The guidance and accountability within this community have helped me rediscover my purpose and build a better version of myself."
  },
  {
    id: 3,
    author: "Marcus R.",
    text: "The retreats are transformative, but the daily connections and shared wisdom in the community are what truly make Masterminds special. I'm constantly learning and growing."
  },
  {
    id: 4,
    author: "Daniel K.",
    text: "If you're serious about personal growth and want to connect with driven, supportive men, look no further. Masterminds provides the environment and resources you need to thrive."
  },
  // Add more testimonials here
]);
</script>

<style scoped>
.community-page {
  padding-top: 80px;
}

.community-image {
  text-align: center;
  margin-bottom: 30px;
}

.community-image img {
  max-width: 30%; /* Adjust as needed */
  height: auto;
  border-radius: 8px; /* Optional: rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: subtle shadow */
}

.intro {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 30px;
  text-align: center;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.call-to-action {
  text-align: center;
  padding: 30px;
  background-color: #f0f0f0;
  border-radius: 8px;
}

.call-to-action h3 {
  margin-top: 0;
  margin-bottom: 15px;
  color: #556B2F; /* Deep Olive Green (example) */
}

.call-to-action p {
  color: #333;
  margin-bottom: 20px;
}
</style>