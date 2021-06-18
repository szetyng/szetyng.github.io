<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="12" md="10">
				<h1 class="text-center display-1 font-weight-regular">{{ article.title }}</h1>

				<nuxt-content :document="article" />

				<p class="text-caption font-weight-black">Post last updated at: {{ article.updatedAt | formatDate }}</p>
			</v-col>
		</v-row>
	</v-container>
</template>


<script>
export default {
	head() {
		return {
			title: 'About',
			meta: [
				{hid: 'description', name: 'description', content: 'About Sze Tyng Lee'}
			]
		};
	},
	async asyncData ({ $content, }) {
		const article = await $content('about-me').fetch();

		return { article };
	},

	filters: {
		formatDate: dt => {
			const options = { year: 'numeric', month: 'long', day: 'numeric'};

			return new Date(dt).toLocaleDateString('en', options);
		}
	}
};
</script>


<style scoped>

</style>