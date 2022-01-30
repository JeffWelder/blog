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
          <!-- <vue-markdown># H1 HELLO WORLD
            i am a ~~tast~~ **test**.</vue-markdown> -->
            <vue-markdown>{{ fileContents }}</vue-markdown>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import VueMarkdown from 'vue-markdown';
import Test from '../markdown/test.md';

export default Vue.extend({
  name: 'HelloWorld',
  components: { VueMarkdown },
  data: () => ({
    message: '# Hello World!',
    fileContents: '',
  }),
});
</script>
