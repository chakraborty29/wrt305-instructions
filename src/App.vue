<template>
  <div class="container">
    <Navbar />
    <hr />
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue';
export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
@import '../node_modules/bulma';

hr {
  border: 1px dashed black;
}

:root {
  --bg: #071e36;
  --card-bg: black;
  // --card-bg: #041221;
}

html,
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue',
    sans-serif;
}

.container {
  margin-top: 2em;
  margin-bottom: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
