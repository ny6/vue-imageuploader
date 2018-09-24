<template>
  <div>
    <img
      v-for="image in allImages"
      :key="image.account_id"
      :src="image.link"
      :alt="image.account_url"
    >
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ImageList',
  computed: mapGetters(['allImages']),
  created() {
    this.fetchImages();
  },
  methods: mapActions(['fetchImages']),
};
</script>
