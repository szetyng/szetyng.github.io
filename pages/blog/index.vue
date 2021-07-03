<template>
	<v-container>
		<v-row justify="center">
				<v-col cols="12" md="10" lg="8">
					<OutlinedCard>
						<template>
							<v-card-title class="title-text">Blog</v-card-title>
							<v-divider></v-divider>

							<v-data-iterator
								:items="articles"
							>
								<template>
									<v-card 
										v-for="article of articles" :key="article.slug"
										outlined flat nuxt
										:to="{ name: 'blog-slug', params: { slug: article.slug } }"
										class="my-4 mx-4"
									>
										<!-- <img :src="article.img" /> -->
			
										<v-card-title>{{ article.title }}</v-card-title>
										<v-card-subtitle>{{ article.description }}</v-card-subtitle>
									</v-card>
								</template>
							</v-data-iterator>
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


