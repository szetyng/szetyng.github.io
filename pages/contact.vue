<template>
	<v-container>
		<v-layout>
			<v-row>
				<v-col>
					<v-card>
						<v-img
							class="white--text align-end"
							height="300px"
							:src="require('~/assets/images/contact6.png')"
						>
							<v-card-title>Contact me</v-card-title>
						</v-img>

						<v-card-actions>
							<v-btn
								v-for="contact in contacts"
								:key="contact.title"
								link
								:href="contact.link"
								:color="contact.color"
							>
								{{ contact.title }} <v-icon right>{{ contact.icon }}</v-icon>
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
		</v-layout>
	</v-container>
</template>


<script>
export default {
	data() {
		return {
			contacts: [
				{title: "Github", link: "https://github.com/szetyng", icon: "mdi-code-tags", color: "grey"},
				{title: "LinkedIn", link: "https://www.linkedin.com/in/leeszetyng/", icon: "mdi-text-box-multiple-outline", color:"green"},
				{title: "Email", link: "mailto:lee.szetyng@gmail.com", icon: "mdi-email-outline", color: "cyan"},
			]
		}
	}
}
</script>


<style scoped>

</style>