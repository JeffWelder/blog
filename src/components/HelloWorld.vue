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
        <vue-markdown :source="fileContents"></vue-markdown>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import VueMarkdown from 'vue-markdown';
import Home from '../markdown/home.md';

export default Vue.extend({
  name: 'HelloWorld',
  components: { VueMarkdown },
  data: () => ({
    message: '# Hello World!',
    fileContents: Home,
  }),
});
</script>
