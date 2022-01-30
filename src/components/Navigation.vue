<template>
  <v-app-bar app flat>
    <v-container class="py-0 fill-height">
      <v-avatar class="mr-10 pa-1" color="secondary">
        <v-img src="@/assets/bluejay_logo.png" alt="Logo" contain @click="navigateHome" />
      </v-avatar>
      <h1 class="font-weight-light" @click="navigateHome">Jeff</h1>
      <h1 class="font-weight-thin" @click="navigateHome">Welder</h1>
      <v-spacer />
      <!-- <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="link in links"
          :key="link.path"
          active-class="router-link-active"
          text
          :to="link.path"
        >{{ link.name }}</v-btn>
      </v-toolbar-items> -->
      <v-spacer />
      <!-- <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer">
      </v-app-bar-nav-icon>
      <v-navigation-drawer class="hidden-md-and-up" v-model="drawer" right app absolute>
        <v-list nav dense>
          <v-list-item-group active-class="text--accent-4">
            <v-list-item
              v-for="link in links"
              :key="link.path"
              :to="link.path"
              @click="drawer = false"
            >{{ link.name }}</v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer> -->
    </v-container>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Navigation',

  data: () => ({
    appBarColor: 'white',
    drawer: false,
    links: [
      {
        name: 'Home',
        path: 'home',
      },
    ],
  }),
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    navigateHome() {
      if (this.$route.path !== '/') this.$router.push({ name: 'Home' });
    },
  },
});
</script>
