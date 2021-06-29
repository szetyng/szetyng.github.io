<template>
  <v-container>
		<v-row justify="center">
			<v-col cols="12" md="10" lg="8">
				<OutlinedCard>
					<template>
						<v-card-title class="title-text">{{ article.title }}</v-card-title>
						<v-card-subtitle class="text-caption font-weight-bold">Post published at: {{ article.createdAt | formatDate }}</v-card-subtitle>
						<v-divider></v-divider>

						<v-card-text class="black--text content-text"><nuxt-content :document="article" /></v-card-text>
						
					</template>
				</OutlinedCard>
				<!-- <h1 class="text-center display-1 font-weight-regular">{{ article.title }}</h1>
				<p class="text-subtitle-1">{{ article.description }}</p>
				<p class="text-caption font-weight-black">Post last updated at: {{ article.updatedAt | formatDate }}</p>
				<Author :author="article.author"></Author>
				<img v-if="article.img" :src="require(`~/assets/blog-images/${article.img}`)" alt="article.alt">
				<nav>
					<ul>
						<li v-for="link of article.toc" :key="link.id" :class="{ 'py-0': link.depth === 2, 'ml-2 pb-0': link.depth === 3 }">
							<nuxt-link :to="`#${link.id}`">{{ link.text }}</nuxt-link>
						</li>
					</ul>
				</nav>

				<nuxt-content :document="article" />


				<PrevNext :prev="prev" :next="next"></PrevNext> -->
				
			</v-col>
		</v-row>
  </v-container>
</template>


<script>
export default {
	components: {
		// Author: () => import('@/components/Author'),
		PrevNext: () => import('@/components/PrevNext'),
		OutlinedCard: () => import('@/components/OutlinedCard'),
	},
	async asyncData({ $content, params }) {
		// params.slug is the string after `blog/`
		const article = await $content('articles', params.slug).fetch();

		const [prev, next] = await $content('articles')
			.only(['title', 'slug'])
			.sortBy('createdAt', 'asc')
			.surround(params.slug)
			.fetch();


		return { article, prev, next };

	},

	filters: {
		formatDate: dt => {
			const options = { year: 'numeric', month: 'long', day: 'numeric'};

			return new Date(dt).toLocaleDateString('en', options);
		}
	}
};
</script>


<style >
.nuxt-content h1 {
	font-weight: bold;
	font-size: 22px;
	letter-spacing: 0.025em;
	margin-bottom: 10px;
}

.nuxt-content h2 {
	font-weight: bold;
	font-size: 20px;
	letter-spacing: 0.02em;
	margin-bottom: 10px;
}

.nuxt-content h3 {
	font-weight: bold;
	font-size: 18px;
	letter-spacing: 0.01em;
	margin-bottom: 10px;
}


.nuxt-content-highlight {
  position: relative; 
	margin-bottom: 20px;
}

.nuxt-content-highlight .filename {
	position: absolute;
	right: 0;
	top: 0;
	--text-opacity: 1;
	color: #cbd5e0;
	color: rgba(203,213,224,var(--text-opacity));
	font-weight: 300;
	z-index: 10;
	margin-right: .5rem;
	margin-top: .25rem;
	font-size: .875rem;
}

.nuxt-content-highlight code {
	background-color: transparent;
}
</style>