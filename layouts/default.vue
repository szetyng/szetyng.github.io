<template>
  <v-app>
    <v-container class="normal-navbar hidden-xs-only">
      <v-row justify="center">
        <v-col cols="12" md="10">
          <div class="site-info">
            <a href="/" class="site-title">{{ title }}</a>
          </div>
          
          <div class="nav">
            <a 
              v-for="(item, i) in links"
              :key="i"
              :href="item.link"
            >
              {{ item.title }}
            </a>
          </div>
          
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="10">
          <v-divider></v-divider>
        </v-col>

      </v-row>
      

    </v-container>


    <v-container class="mobile-navbar hidden-sm-and-up">
      <v-row justify="center">
        <v-col cols="12" md="10">
          <div class="site-info">
            <a href="/" class="site-title">{{ title }}</a>
          </div>
          
          <div class="nav">
            <a 
              v-for="(item, i) in links"
              :key="i"
              :href="item.link"
            >
              {{ item.title }}
            </a>
          </div>
          
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="10">
          <v-divider></v-divider>
        </v-col>

      </v-row>
      

    </v-container>

    

    <!-- <v-app-bar app>
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
    </v-app-bar> -->

    <v-main>
      <v-container class="main-container">
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
        {title: "about me", link: "/about-me"},
        {title: "projects", link: "/projects"},
        {title: "experience", link: "/experience"},
        // {title: "blog", link: "/blog"},
        {title: "contact me", link: "/contact"}
      ]
    }
  },
  computed: {
    smallScreen() {
      console.log('HEHEH am i an XS screen?', this.$vuetify.breakpoint.xs);
      return this.$vuetify.breakpoint.xs 
    }
  }
}
</script>


<style scoped>
.main-container {
  margin-top: -30px;
}

.normal-navbar .site-info {
  float: left;
  margin-top: 23px;
  font-size: 20px;
  font-weight: 600;
}

.mobile-navbar .site-info {
  text-align: center;
  display: block;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  font-size: 20px;
  font-weight: 600;
}

.normal-navbar .nav {
  float: right;
  margin-top: 23px;
  font-size: 20px;
  font-weight: 400;
}

.mobile-navbar .nav {
  float: none;
  margin-top: 9px;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
}

.nav a, .site-info a {
  margin-left: 10px;
  color: #333;
  text-decoration: none;
  cursor: pointer;
}


.normal-navbar .nav a {
  text-align: right;
  letter-spacing: 1px;
}

.nav a:hover, .site-info a:hover {
  color: cadetblue;
}

.mobile-navbar .nav a {
  color: cadetblue;
}


</style>
