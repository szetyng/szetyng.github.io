<template>
	<article>
		<!-- <h1 class="text-center">{{ article.title }}</h1> -->

		<nuxt-content :document="article" />

		<p>Post last updated at: {{ article.updatedAt | formatDate }}</p>
	</article>
</template>


<script>
export default {
	async asyncData ({ $content, params }) {
		const article = await $content('about-me').fetch();

		return { article }
	},

	filters: {
		formatDate: dt => {
			const options = { year: 'numeric', month: 'long', day: 'numeric'};

			return new Date(dt).toLocaleDateString('en', options)
		}
	}
}
</script>


<style scoped>

</style>