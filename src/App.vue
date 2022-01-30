<template>
  <v-app id="inspire">
    <Navigation />
    <v-main class="grey lighten-3">
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Navigation from '@/components/Navigation.vue';

export default Vue.extend({
  name: 'App',
  components: { Navigation },
  data: () => ({
    //
  }),
});
</script>
