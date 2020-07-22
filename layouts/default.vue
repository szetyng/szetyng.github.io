<template>
  <v-app>
    <v-app-bar app>
      <v-btn 
        text
        :to="'/'"
      >
        <v-toolbar-title>{{ title }}</v-toolbar-title>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          v-for="(item, i) in links"
          :key="i"
          :to="item.link"
          :title="item.title"
          text
        >{{ item.title }}</v-btn>
      </v-toolbar-items>
    </v-app-bar>

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
      footer: 'Copyright Sze Tyng Lee | All rights reserved',
      links: [
        {title: "About me", link: "/about-me"},
        {title: "Projects", link: "/projects"},
        {title: "Experience", link: "/experience"},
        {title: "Blog", link: "/blog"},
        {title: "Contact me", link: "/contact"}
      ]
    }
  }
}
</script>
