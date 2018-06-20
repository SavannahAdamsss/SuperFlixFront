<template>
  <ul>
    <!-- eslint-disable -->
    <li v-for='movie in movies'>
    <Movie :movie='movie'/>
    </li>
  </ul>
</template>

<script>
import Movie from './Movie.vue';

export default {
  name: 'MoviesList',
  components: {
    Movie
  },
  data() {
    return {
      movies: []
    };
  },
  created: function() {
    console.log('created')
    this.fetchData();
  },
  methods: {
    fetchData: async function() {
      try {
        const res = await fetch(
          'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8ee6f8843e002ff042da107799cc2a38'
        );
        const movies = await res.json();
        this.movies = movies.results;
        console.log(this.movies);
      } catch(e) {
        console.log(e);
      }
    }
  }
};
</script>

<style scoped>
ul {
  display: grid;
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(6, 1fr);
  list-style-type: none;
  padding: 1rem;
  Margin: 0;
}
</style>