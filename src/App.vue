<template>
  <div id="app">
    <Header />
    <Home />
    <About />
  </div>
</template>

<script>
import Home from './views/Home.vue';
import Header from './views/components/Header';
import About from './views/About';

export default {
  name: 'App',
  components: {
    Home,
    Header,
    About
  }
}
</script>