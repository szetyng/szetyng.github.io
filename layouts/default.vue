<template>
  <v-app>
		<!-- Navbar in desktop - a horizontal toolbar -->
    <v-app-bar app flat class="normal-navbar hidden-xs-only">
      <v-container>
        <!-- Justify center to make sure that the 8 cols are in the middle -->
        <v-row justify="center">
          <v-col cols="12" md="8">
						<a href="/" class="title-text text-overline">{{ title }}</a>
            <v-spacer></v-spacer>
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
      </v-container>
    </v-app-bar>

		<!-- Navbar in mobile - a horizontal toolbar with title and hamburger setting -->
    <v-app-bar app flat class="mobile-navbar hidden-sm-and-up">
      <v-toolbar-title>
        <a href="/" class="title-text text-overline text-uppercase font-weight-thick">{{ title }}</a>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

		<!-- Nav drawer for mobile -->
		<v-navigation-drawer app right temporary class="nav-drawer" v-model="drawer">
			<v-list dense nav>
				<v-list-item v-for="(item, i) in links" :key="i" nuxt :to="item.link" class="link">
          <v-list-item-content>
            <v-list-item-title class="text-uppercase">
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
			</v-list>
		</v-navigation-drawer>
    

    <v-main>
      <v-container class="main-container">
        <nuxt />
      </v-container>
    </v-main>

    <v-footer absolute app padless>
      <v-row justify="center" no-gutters>
        <v-col cols="12" class="text-center">
          <v-card color="secondary" flat tile class="text-center">
            <v-card-text>
              <v-btn
                v-for="social in socials"
                :key="social.icon"
                class="mx-4"
                icon
              >
                <v-icon>{{ social.icon }}</v-icon>

              </v-btn>
            </v-card-text>

						
            <v-card-text class="footer-text">
              <span>&copy; {{ new Date().getFullYear() }} {{ footer }}</span>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      
    </v-footer>
  </v-app>
</template>

<script>
export default {
	name: 'DefaultLayout',
	data () {
		return {
			title: 'Sze Tyng Lee',
			drawer: false,
			footer: 'Copyright Sze Tyng Lee | All rights reserved',
			links: [
				{title: 'about me', link: '/about-me'},
				{title: 'projects', link: '/projects'},
				{title: 'experience', link: '/experience'},
				{title: 'blog', link: '/blog'},
				{title: 'contact me', link: '/contact'}
			],
			socials: [
				{ icon: 'mdi-github', link: ''},
				{ icon: 'mdi-twitter', link: ''},
				{ icon: 'mdi-linkedin', link: ''},
				{ icon: 'mdi-email', link: ''},
			]
		};
	},
};
</script>


<style scoped>
/* Set default background color of app, since this is default layout */
.v-application {
  background-color: #F4F4F4;
}


/* To make links in the nav drawer have more space */
.nav-drawer {
	padding: 2.5em 1.5em 0;
}

.title-text {
  font-size: 20px !important;
  font-weight: 600;
	float: left;
}

.footer-text {
	margin-top: -25px;
}

.normal-navbar {
	padding-top: 15px;
}

.mobile-navbar {
	padding-top: 8px;
}

/* All the links in the mobile horizontal navbar */
.mobile-navbar a {
  margin-left: 10px;
  text-decoration: none;
  cursor: pointer;
}

/* All the links in the mobile horizontal navbar, on hover */
.mobile-navbar a:hover {
  color: cadetblue;
}

/* All the list items in the nav drawer */
.nav-drawer .link {
  margin: 1.5em 0 0 0;
  /* padding: 0.5em 0 0 0; */
}

/* The links container in the normal navbar */
.normal-navbar .nav {
  float: right;
  font-size: 20px;
  font-weight: 400;
}

/* All the links in the normal horizontal navbar */
.normal-navbar a {
  margin-left: 10px;
  color: #333;
  text-decoration: none;
  cursor: pointer;
	text-align: right;
	letter-spacing: 1px;
}

/* All the links in the normal horizontal navbar, on hover */
.normal-navbar a:hover {
  color: cadetblue;
}


</style>
