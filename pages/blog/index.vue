<template>
	<v-container>
		<v-row justify="center">
				<v-col cols="12" md="10" lg="8">
					<OutlinedCard>
						<template>
							<!-- TODO: this should be a data iterator -->
							<v-card-title class="title-text">Blog</v-card-title>
							<v-divider></v-divider>

							<v-card outlined flat class="my-4 mx-4" v-for="article of articles" :key="article.slug" nuxt :to="{ name: 'blog-slug', params: { slug: article.slug } }">

							<!-- <img :src="article.img" /> -->
			
								<v-card-title>{{ article.title }}</v-card-title>
								<v-card-subtitle>{{ article.description }}</v-card-subtitle>


							</v-card>
						</template>
					</OutlinedCard>
			</v-col>
		</v-row>
	</v-container>
</template>


<script>
export default {
	name: 'BlogHomepage',
	components: {
		OutlinedCard: () => import('@/components/OutlinedCard')
	},
	async asyncData({ $content, }) {
		const articles = await $content('articles')
			.only(['title', 'description', 'img', 'slug', 'author'])
			.sortBy('createdAt', 'asc')
			.fetch();

		return {
			articles,
		};
	},
};
</script>


