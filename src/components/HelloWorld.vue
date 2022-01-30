<template>
  <v-container>
    <!-- <v-row class="text-center"> -->
    <v-row>
      <v-col>
        <vue-markdown :source="fileContents" @rendered="update"></vue-markdown>
      </v-col>
    </v-row>
  </v-container>
</template>

// https://miaolz123.github.io/vue-markdown/

<script lang="ts">
import Vue from 'vue';
import VueMarkdown from 'vue-markdown';
import Prism from 'prismjs';
// import 'prismjs/themes/prism.css';
import 'prism-themes/themes/prism-one-light.min.css';
import 'prismjs/components/prism-c.min';
import 'prismjs/components/prism-javascript.min';
import Home from '../markdown/home.md';

export default Vue.extend({
  name: 'HelloWorld',
  components: { VueMarkdown },
  data: () => ({
    message: '# Hello World!',
    fileContents: Home,
  }),
  methods: {
    update() {
      this.$nextTick(() => {
        Prism.highlightAll();
      });
    },
  },
});
</script>
