<template>
    <section id="program" class="section">
      <div class="container">
        <h2>Our Program</h2>
        <div class="program-modules">
          <div class="module">
            <h3>Module 1: Self-Discovery</h3>
            <p>Understanding your values, beliefs, and patterns.</p>
          </div>
          <div class="module">
            <h3>Module 2: Emotional Mastery</h3>
            <p>Developing emotional intelligence and regulation.</p>
          </div>
          <div class="module">
            <h3>Module 3: Relationship Dynamics</h3>
            <p>Building healthy and fulfilling relationships.</p>
          </div>
          <div class="module">
            <h3>Module 4: Purpose and Vision</h3>
            <p>Finding your purpose and creating a meaningful life.</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
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
  
  .program-modules {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 30px;
  }
  
  .module {
    background-color: #f4f4f4;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
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
  </style>