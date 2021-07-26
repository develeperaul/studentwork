<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  created() {
    console.log(localStorage.getItem('start'));
    if (
      localStorage.getItem('start') === null ||
      localStorage.getItem('start') === '0'
    ) {
      this.$router.push({ name: 'screen-start' });
    }
  },
  name: 'App',
};
</script>
