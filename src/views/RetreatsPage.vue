<template>
  <div>
    <AppHeader />
    <section class="booking-page section">
      <div class="container">
        <h2>Book Your Retreat</h2>
        <div class="booking-area">
          <div class="calendar-section">
            <RetreatBooking />
          </div>
          <div class="accommodation-preview">
            <h3>Your Accommodation Example</h3>
            <img src="/accommodation-example.jpg" alt="Example of Retreat Accommodation">
            <p class="caption">Experience comfortable and inspiring stays.</p>
          </div>
        </div>
      </div>
    </section>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import RetreatBooking from '../components/RetreatBooking.vue';
</script>

<style scoped>
.booking-page {
  padding-top: 80px;
}

.booking-area {
  display: flex;
  gap: 20px; /* Space between calendar and image */
  align-items: start; /* Align items to the top */
}

.calendar-section {
  flex: 1; /* Take up available space */
}

.accommodation-preview {
  flex: 1; /* Take up available space */
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 4px;
  text-align: center;
}

.accommodation-preview h3 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.accommodation-preview img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 10px;
}

.accommodation-preview .caption {
  font-size: 0.9rem;
  color: #777;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .booking-area {
    flex-direction: column; /* Stack on smaller screens */
  }

  .accommodation-preview {
    margin-top: 20px;
  }
}
</style>