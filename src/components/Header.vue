<template>
  <div class="ui secondary pointing menu">
    <router-link
      class="item active"
      to="/"
    >Image Storage</router-link>
    <div class="right menu">
      <div
        v-if="isLoggedIn"
        class="horizontal"
      >
        <router-link
          to="/"
          class="ui item"
        >Gallary</router-link>
        <router-link
          to="/upload"
          class="ui item"
        >Upload</router-link>
        <a
          href="#"
          class="ui item"
          @click="logout"
        >Logout</a>
      </div>
      <div v-else>
        <a
          href="#"
          class="ui item"
          @click="login"
        >Login</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Header',
  computed: mapGetters(['isLoggedIn']),
  methods: mapActions(['login', 'logout']),
};
</script>

<style scoped>
  .horizontal {
    display: flex;
    flex-direction: row;
  }
</style>
