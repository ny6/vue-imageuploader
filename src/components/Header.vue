<template>
  <div class="ui secondary pointing menu">
    <a
      class="item active"
      href="/"
    >Image Storage</a>
    <div class="right menu">
      <div v-if="isLoggedIn">
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
