<template>
  <header>
    <router-link to='/'>
      <!-- <img src='../assets/truflix.png'/> -->
    </router-link>
    <section class='navigation'>
      <p><router-link to='/'>Home</router-link></p>
      <p><router-link to='/about'>About</router-link></p>
    </section>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String
  },
  data() {
    return {
      show: false,
      name: 'Tru'
    }
  },
};
</script>

<style scoped>
header {
  background-color: #111;
  padding: 40px;
}

.navigation {
  display: flex;
  justify-content: space-around;
  width: 10vw;
  margin: 0 auto;
}

h1 {
  margin: 0;
}

p a {
  list-style-type: none;
  color: white;
  padding: 1rem;
}

a:link {
  text-decoration: none;
  font-weight: bold;
}

a:hover   {
  text-decoration: none;
  font-weight: bold;
  color: #FB1;
  margin: 0;
}
</style>