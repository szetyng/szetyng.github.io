<template>
	<v-container fill-height>
		<v-row justify="center" align="center">
			<v-col class="text-center">
				<h2 class="text-h2 font-weight-medium text-center black--text text--darken-1">Sze Tyng Lee</h2>
			</v-col>
		</v-row>

		<v-row justify="center" align="center">
			<v-col class="text-center">
				<h2 class="text-h4 font-weight-light text-center black--text text--darken-1">Software developer</h2>
			</v-col>
		</v-row>

		<v-row justify="center" align="center">
			<v-col class="text-center" cols="12" md="6">
				<p>
					M.Eng Electrical and Electronic Engineering from Imperial College London. 
					CV available upon request.
				</p>
			<v-btn
				nuxt
				:to="'/contact'"
				dark
			>
				Contact Me
				<v-icon right>mdi-card-account-details</v-icon>
			</v-btn>
			</v-col>
		</v-row>

		<v-row justify="center">
			<v-col cols="12" md="10">
				<v-divider></v-divider>
			</v-col>
		</v-row>

		<v-row justify="center">
			<v-col cols="12" md="10">
				<v-card>
				<v-card-title class="justify-center text-h4 font-weight-light">Skills</v-card-title>
				<v-row justify="center" align="center">
					<v-col class="icons-container" v-for="icon in icons" :key="icon.name" cols="4" md="1">
						<v-tooltip 
							bottom
						>
							<template v-slot:activator="{ on, attrs }">
								<i 
									v-if="'link' in icon"
									v-bind="attrs" v-on="on"
									:class="`${icon.link} colored dev-icon`"
								>
								</i>

								<i
									v-else 
									v-bind="attrs" v-on="on"
									:class="`svg-icon icon-${icon.name}`"
								>
								</i>
							</template>

							<span>{{ icon.name }}</span>
						</v-tooltip>
					</v-col>

					
					<!-- <v-col 
						v-for="bio in bios"
						:key="bio.title"
						cols="12" md="4"
						class="text-center"
					>
						<v-avatar size="150" color="cyan">
							<img
								:src="require(`~/assets/images/bios/${bio.imgSrc}`)"
							>
						</v-avatar>	
						<h4 class="text-h5 font-weight-light text-center black--text text--darken-1">{{ bio.title }}</h4>
					</v-col> -->
					
				</v-row>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>


<script>
export default {
	name: "Homepage",
	head() {
		return {
			title: "Home",
			meta: [
				{hid: 'description', name: 'description', content: "Homepage for Sze Tyng Lee's website"}
			],
			link: [
				{ rel: 'stylesheet', href: "https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css" }
			]
		}
	},
	data() {
		return {
			brief: "\
				Software developer @ Gamuda Engineering. M.Eng Electrical and Electronic Engineering\
			",
			icons: [
				{name: 'android', link: 'devicon-android-plain'},
				{name: 'bootstrap', link: 'devicon-bootstrap-plain-wordmark'},
				{name: 'cplusplus', link: 'devicon-cplusplus-plain-wordmark'},
				{name: 'fsharp'},
				{name: 'git', link: 'devicon-git-plain'},
				{name: 'googlecloudplatform'},
				{name: 'javascript', link: 'devicon-javascript-plain'},
				{name: 'nodejs', link: 'devicon-nodejs-plain-wordmark'},
				{name: 'postgresql', link: 'devicon-postgresql-plain-wordmark'},
				{name: 'python'},
				{name: 'vuejs', link: 'devicon-vuejs-plain-wordmark'},
				
			]
		}
	}
}
</script>


<style scoped>
.svg-icon {
  height: 50px;
  width: 50px;
  display: inline-block;
}

.icon-fsharp {
  background: url("../assets/images/skills-icons/fsharp.svg");
}

.icon-python {
  background: no-repeat center/100%  url("../assets/images/skills-icons/python.svg");
}

.icon-googlecloudplatform {
	background: no-repeat center/100%  url("../assets/images/skills-icons/google-cloud-platform.svg");
}

.icons-container {
	font-size:50px;
	text-align: center;
	/* letter-spacing: 5px;	 */
}

.dev-icon {
	display: inline-block;
}

.dev-icon:hover, .svg-icon:hover {
	cursor: default;
}
</style>