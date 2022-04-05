<template>
  <div class="rownav">
    <h1 class="title is-1">Build Your Own</h1>
  </div>
  <div class="rownav2">
    <h1 class="title is-1">Legos Cozy Home Set with Car</h1>
  </div>
  <div class="rownav3">
    <div>
      <a href="/">Home</a>
    </div>
    <div>
      <a href="/team">Team Biographies</a>
    </div>
    <div>
      <a href="/instructions">Instructions</a>
    </div>
    <div>
      <a href="/design">Design Memo</a>
    </div>
    <div>
      <a href="/usability">Usability Report</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {},
};
</script>

<style lang="scss">
.rownav {
  display: flex;
  justify-content: center;
}
.rownav2 {
  display: flex;
  justify-content: center;
}
.rownav3 {
  display: flex;
  justify-content: space-around;
  margin-top: 2em;
}
</style>
