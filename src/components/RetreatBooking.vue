<template>
    <div>
      <div class="calendar-container">
        <div class="calendar-header">
          <button @click="goToPreviousMonth" :disabled="currentMonth === 5">
            &lt;
          </button>
          <div class="month-year">{{ getMonthName(currentMonth) }} {{ currentYear }}</div>
          <button @click="goToNextMonth" :disabled="currentMonth === 12">
            &gt;
          </button>
        </div>
        <div class="weekdays">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div class="days">
          <div
            v-for="day in getDaysArray(currentMonth, currentYear)"
            :key="`${currentYear}-${currentMonth}-${day}`"
            :class="{
              'day': true,
              'available': isAvailableDate(day, currentMonth, currentYear),
              'today': isToday(day, currentMonth, currentYear)
            }"
            :style="{'grid-column-start': isFirstDayOfMonth(day, currentMonth, currentYear) ? getFirstDayOfWeek(currentMonth, currentYear) + 1 : ''}"
            @click="selectDay(day, currentMonth, currentYear)"
          >
            {{ day }}
          </div>
        </div>
      </div>
      </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { formatDate } from '../utils/dateUtils';
  
  const availableRetreats = ref([]);
  const selectedDate = ref(null);
  
  const currentMonth = ref(new Date().getMonth() + 1);
  const currentYear = ref(new Date().getFullYear());
  
  const generateAvailableDates = () => {
    const startMonth = 5; // May
    const endMonth = 12; // December
    const year = 2025;
    const dates = [];
  
    for (let month = startMonth; month <= endMonth; month++) {
      dates.push(new Date(year, month - 1, 1));
    }
    availableRetreats.value = dates;
  };
  
  generateAvailableDates();
  
  const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };
  
  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month - 1, 1).getDay(); // 0 for Sunday, 1 for Monday, etc.
  };
  
  const getFirstDayOfWeek = (month, year) => {
    return getFirstDayOfMonth(month, year);
  };
  
  const getMonthName = (month) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[month - 1];
  };
  
  const getDaysArray = (month, year) => {
    const daysInMonth = getDaysInMonth(month, year);
    return Array.from({ length: daysInMonth }, (_, i) => i + 1);
  };
  
  const isAvailableDate = (day, month, year) => {
    return availableRetreats.value.some(date =>
      date.getDate() === day &&
      date.getMonth() + 1 === month &&
      date.getFullYear() === year
    );
  };
  
  const isToday = (day, month, year) => {
    const today = new Date();
    return (
      today.getDate() === day &&
      today.getMonth() + 1 === month &&
      today.getFullYear() === year
    );
  };
  
  const isFirstDayOfMonth = (day, month, year) => {
    return day === 1;
  };
  
  const selectDay = (day, month, year) => {
    if (isAvailableDate(day, month, year)) {
      selectedDate.value = new Date(year, month - 1, day);
    }
  };
  
  const goToPreviousMonth = () => {
    if (currentMonth.value > 5) {
      currentMonth.value--;
    }
  };
  
  const goToNextMonth = () => {
    if (currentMonth.value < 12) {
      currentMonth.value++;
    }
  };
  
  const getEndDate = (startDate, durationWeeks) => {
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + durationWeeks * 7 - 1);
    return endDate;
  };
  
  const submitBooking = () => {
    if (selectedDate.value) {
      console.log('Booking submitted for:', selectedDate.value);
      alert(`Booking requested for retreat starting on ${formatDate(selectedDate.value)}`);
      selectedDate.value = null;
    }
  };
  </script>
  
  <style scoped>
  .calendar-container {
    max-width: 320px;
    margin: 20px auto;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 0.9rem;
  }
  
  .calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f0f0f0;
    padding: 10px;
    font-weight: bold;
  }
  
  .calendar-header button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    padding: 5px 10px;
  }
  
  .calendar-header button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .month-year {
    text-align: center;
  }
  
  .weekdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    padding: 5px;
    text-align: center;
    color: #777;
  }
  
  .days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-auto-rows: 30px; /* Adjust row height as needed */
    padding: 5px;
  }
  
  .day {
    text-align: center;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .day:hover {
    background-color: #eee;
  }
  
  .available {
    background-color: #B85C38; /* Rusty Orange (example) */
    color: #fff;
    font-weight: bold;
    border-radius: 4px;
  }
  
  .available:hover {
    background-color: #E97451; /* Burnt Sienna (example) */
  }
  
  .today {
    border: 1px solid #556B2F; /* Deep Olive Green (example) */
    border-radius: 4px;
  }
  
  .instruction {
    margin-top: 1rem;
    font-style: italic;
    color: #777;
  }
  </style>