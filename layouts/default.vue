<template>
  <v-app>
    <!-- <v-app-bar
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
    </v-app-bar> -->

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    
    <v-footer
      absolute
      app
    >
      <span>&copy; {{ new Date().getFullYear() }} {{ footer }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'Sze Tyng Lee',
      footer: 'Copyright Sze Tyng Lee | All rights reserved'
    }
  }
}
</script>
