<template>
  <NanshanIndex/>
  <RouterView></RouterView>
</template>

<script>
import NanshanIndex from './components/NanshanIndex.vue';

export default {
  name: 'App',
  components: {
    NanshanIndex
  }
}
</script>
