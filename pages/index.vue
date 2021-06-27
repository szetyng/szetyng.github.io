<template>
	<v-container fill-height>
		<v-row justify="center" align="center">
			<v-col cols="12" md="8" class="text-center">
				<OutlinedCard>
					<template>
						<v-container fluid>
						<v-row justify="center" align="center" no-gutters>
							<v-col cols="12" md="4">
								<v-row no-gutters justify="center" align="center">
									<v-col cols="12" class="text-center">
									<v-img contain width="15em" class="rounded-circle profile-pic" :src="require(`@/assets/images/bios/szetyng-sq.png`)"></v-img>
									</v-col>
								</v-row>
								<v-row no-gutters justify="center" align="center">
									<v-card-title class="text-center title-text">Sze Tyng Lee</v-card-title>
								</v-row>
								<v-row no-gutters justify="center" align="center" class="subtitle-row">
									<v-card-subtitle class="">Software Developer</v-card-subtitle>
								</v-row>
							</v-col>
							<v-col cols="12" md="8">
								<v-card-text class="black--text text-justify"> 
									<p>
									Hi, I'm Sze Tyng! I'm a software developer currently based in Kuala Lumpur, Malaysia. This portfolio
									website started off as an assignment in the third year of my undergraduate studies, when I had very
									little web dev knowledge and built it using the Jekyll framework. I have since redesigned it from scratch 
									in Nuxt.js + Vue.js! 
									</p>

									<p>
									You can find out more about me by getting in touch via any of the platforms linked below! 
									</p>
								</v-card-text>

								<v-card-actions class="hidden-xs-only">
									<v-btn
										v-for="contact in contacts"
										:key="contact.title"
										link
										:href="contact.link"
										:color="contact.color"
										text
										outlined
									>
										{{ contact.title }} <v-icon right>{{ contact.icon }}</v-icon>
									</v-btn>
				
								</v-card-actions>

								<v-card-actions class="hidden-sm-and-up">
									<v-spacer></v-spacer>

									<v-btn
										v-for="contact in contacts"
										:key="contact.title"
										link
										:href="contact.link"
										:color="contact.color"
										dark large
										icon text
									>
										<v-icon large>{{ contact.icon }}</v-icon>
									</v-btn>
									<v-spacer></v-spacer>

								</v-card-actions>
							</v-col>
						</v-row>

						<!-- <v-row justify="center" align="center">
							<v-col cols="12" class="text-center">
								<v-img width="30em" class="rounded-circle" :src="require(`@/assets/images/bios/szetyng-sq.png`)"></v-img>
							</v-col>
						</v-row>
						
						<v-row justify="center" align="center">
							<v-col cols="12" class="text-center"><v-card-title class="text-center">Sze Tyng Lee</v-card-title></v-col>
						</v-row>

						<v-divider></v-divider>
						

						<v-card-text class="text-center black--text text--darken-1"> 

							Hi! I'm Sze Tyng, a software developer currently based in Kuala Lumpur, Malaysia. I have an M.Eng
							in Electrical and Electronic Engineering from Imperial College London. My CV is available upon 
							request, just shoot me an email 
						</v-card-text> -->

						<!-- <v-card-actions >
							<v-btn
								nuxt
								:to="'/contact'"
								outlined
								text
							>
								Contact Me
								<v-icon right>mdi-card-account-details</v-icon>
							</v-btn>
						</v-card-actions> -->
						</v-container>
					</template>
				</OutlinedCard>
	
			</v-col>
		</v-row>


		<v-row justify="center" align="center">
			<v-col cols="12" md="8" class="text-center">
				<OutlinedCard>
					<template>
						<v-row justify="center" align="center">
							<v-card-title class="title-text">Skills</v-card-title>
						</v-row>
						<!-- <v-card-title class="title-text">Skills</v-card-title>
						<v-divider></v-divider> -->
						
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
						</v-row>
					</template>
				</OutlinedCard>
			</v-col>
		</v-row>


			





	</v-container>
</template>


<script>
export default {
	name: 'Homepage',
	head() {
		return {
			title: 'Home',
			meta: [
				{hid: 'description', name: 'description', content: 'Homepage for Sze Tyng Lee\'s website'}
			],
			link: [
				{ rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css' }
			]
		};
	},
	components: {
		OutlinedCard: () => import('@/components/OutlinedCard'),
	},
	data() {
		return {
			brief: '\
				Software developer. M.Eng Electrical and Electronic Engineering\
			',
			icons: [
				// {name: 'android', link: 'devicon-android-plain'},
				// {name: 'bootstrap', link: 'devicon-bootstrap-plain-wordmark'},
				{name: 'cplusplus', link: 'devicon-cplusplus-plain-wordmark'},
				{name: 'fsharp'},
				{name: 'git', link: 'devicon-git-plain'},
				{name: 'googlecloudplatform'},
				{name: 'javascript', link: 'devicon-javascript-plain'},
				{name: 'nodejs', link: 'devicon-nodejs-plain-wordmark'},
				{name: 'postgresql', link: 'devicon-postgresql-plain-wordmark'},
				{name: 'python'},
				{name: 'vuejs', link: 'devicon-vuejs-plain-wordmark'},
				
			],
			contacts: [
				{title: 'Github', link: 'https://github.com/szetyng', icon: 'mdi-github', color: 'grey darken-2'},
				{title: 'Twitter', link: 'https://twitter.com/szetyng', icon: 'mdi-twitter', color: 'blue lighten-1'},
				{title: 'LinkedIn', link: 'https://www.linkedin.com/in/leeszetyng/', icon: 'mdi-linkedin', color:'blue darken-2'},
				{title: 'Email', link: 'mailto:lee.szetyng@gmail.com', icon: 'mdi-email-outline', color: 'green darken-2'},
			]
		};
	}
};
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
	font-size: 50px;
	text-align: center;
	/* padding-top: 10px; */
	/* letter-spacing: 5px;	 */
}

.dev-icon {
	display: inline-block;
}

.dev-icon:hover, .svg-icon:hover {
	cursor: default;
}

.profile-pic {
	margin-left: auto;
	margin-right: auto;
}

.subtitle-row {
	margin-top: -30px;
}
</style>