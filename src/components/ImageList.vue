<template>
  <div>
    <div
      v-if="isLoggedIn"
      class="image-container"
    >
      <img
        v-for="image in allImages"
        :key="image.link"
        :src="image.link"
        :alt="image.account_url"
      >
    </div>
    <h2 v-else>Login to get started!</h2>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ImageList',
  computed: mapGetters(['allImages', 'isLoggedIn']),
  created() {
    this.fetchImages();
  },
  methods: mapActions(['fetchImages']),
};
</script>

<style scoped>
  .image-containter {
    column-count: 3;
    column-gap: 0;
  }
  img {
    max-width: 100%;
    padding: 5px;
  }
</style>
