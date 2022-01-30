<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/bluejay_logo.png')"
          class="my-3"
          contain
          height="200"
        />
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Jeff's Blog
        </h1>
        <p>{{ message }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HelloWorld',

  data: () => ({
    message: 'Hello World!',
  }),
});
</script>
