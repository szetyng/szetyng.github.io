<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="12" md="8">
				<OutlinedCard>
						<template>
						<v-card-title class="title-text">{{ article.title }}</v-card-title>
						<v-card-subtitle class="text-caption font-weight-bold">Post last updated at: {{ article.updatedAt | formatDate }}</v-card-subtitle>
						<v-divider color=""></v-divider>
						
						<v-card-text class="black--text">
							<nuxt-content :document="article" />
						</v-card-text>

						
						</template>
				</OutlinedCard>

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
	components: {
		OutlinedCard: () => import('@/components/OutlinedCard')
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


