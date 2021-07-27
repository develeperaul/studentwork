<template>
  <div id="q-app">
    <router-view  />
  </div>
</template>
<script>
export default {
  created() {
    if (
      localStorage.getItem('start') === null ||
      localStorage.getItem('start') === '0'
    ) { 
      localStorage.setItem('start', 0)
      this.$router.push({ name: 'screen-start' });
    } 
  },
  name: 'App',
};
</script>
