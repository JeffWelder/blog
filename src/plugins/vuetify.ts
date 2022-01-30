import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#049eec',
        secondary: '#8fdcff',
        accent: '#57809f',
        error: '#b71c1c',
      },
      dark: {
        primary: '#049eec',
        secondary: '#02203d',
      },
    },
  },
});
