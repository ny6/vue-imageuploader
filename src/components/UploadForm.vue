<template>
  <div class="dropper">
    <input
      type="file"
      multiple
      accept="image/*"
      @change="uploadImages($event.target.files)"
    >
    <span>Drag files here!</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'UploadForm',
  methods: mapActions(['uploadImages']),
};
</script>

<style scoped>
  .dropper {
    align-items: center;
    border: 1px dashed #000;
    border-radius: 5px;
    display: flex;
    height: 30vh;
    justify-content: center;
    position: relative;
  }
  .dropper:hover {
    background-color: #eee;
  }
  input {
    height: 30vh;
    opacity: 0;
    position: absolute;
    width: 100%;
  }
</style>
