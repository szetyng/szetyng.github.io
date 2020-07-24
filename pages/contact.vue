<template>
	<v-container>
		<v-layout>
			<v-row justify="center">
				<v-col cols="12" md="10"> 
					<v-card>
						<v-parallax
							class="black--text text--lighten-5 align-end text-center card-image" 
							:src="require('~/assets/images/contact6.png')"
						>
						</v-parallax>
						<v-row align="end" justify="center">
						<v-col cols="12">
						
						<v-card-title class="black--text justify-center text-h4 font-weight-light mt-0 pt-0">
							Contact me
						</v-card-title>

						<v-card-actions class="hidden-xs-only">
							<v-spacer></v-spacer>
							<v-btn
								v-for="contact in contacts"
								:key="contact.title"
								link
								:href="contact.link"
								:color="contact.color"
								dark
							>
								{{ contact.title }} <v-icon right>{{ contact.icon }}</v-icon>
							</v-btn>
							<v-spacer></v-spacer>
						
						</v-card-actions>
						
						<v-card-actions class="hidden-sm-and-up">
							<v-spacer></v-spacer>

							<v-btn
								v-for="contact in contacts"
								:key="contact.title"
								link
								:href="contact.link"
								:color="contact.color"
								dark
								fab small
								elevation="0"
							>
								<v-icon>{{ contact.icon }}</v-icon>
							</v-btn>
							<v-spacer></v-spacer>

						</v-card-actions>
						</v-col>
						</v-row>
						
					</v-card>
				</v-col>
			</v-row>
		</v-layout>
	</v-container>
</template>


<script>
export default {
	name: "ContactPage",
	head() {
		return {
			title: "Contact",
			meta: [
				{hid: 'description', name: 'description', content: "Contact Sze Tyng Lee"}
			]
		}
	},
	data() {
		return {
			contacts: [
				{title: "Github", link: "https://github.com/szetyng", icon: "mdi-github", color: "grey darken-2"},
				{title: "LinkedIn", link: "https://www.linkedin.com/in/leeszetyng/", icon: "mdi-linkedin", color:"blue darken-2"},
				{title: "Email", link: "mailto:lee.szetyng@gmail.com", icon: "mdi-email-outline", color: "green darken-2"},
			]
		}
	}
}
</script>


<style scoped>
.card-image {
	max-height: 350px;
}

</style>