<template>
  <div>
    <nav>
      <div class="nav-bar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <router-link 
          class="nav-link"
          active-class="active"
          exact
          :to="{ name: 'home' }">
          <b-avatar src="https://avatars2.githubusercontent.com/u/37881725?s=460&u=122d26c3ff19e0abdd46c119e4683f6e8d851286&v=4" class="mr-2"></b-avatar> Jacson
        </router-link>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
