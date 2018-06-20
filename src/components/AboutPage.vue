<template>
  <div class='about-container'>
    <h1>Brochure Page</h1>
    <p>Welcome to my Galvanize P2 Project. SUPERFLIX is a basic Movie Database app created with Vue.js. I am utilizing vue-router to pull from two different endpoints, one for populating the full-list of the most popular movies (as seen on the homepage, and the second for fetching the details of each individual movie when the user clicks on a specific movie selection. Try it out!</p>
  </div>
</template>

<script>
  export default {
    name: 'AboutPage'
  }
</script>

<style scoped>
.about-container {
  display: block;
  justify-content: center;
}

p {
  margin: 0 auto;
  font-size: 1.5em;
  max-width: 50vw;
  min-width: 50vw;
}
</style>