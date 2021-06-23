<template>
	<v-row>
    <v-btn
      v-if="prev"
      color="secondary"
      outlined
      left
      large
      nuxt
      :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
    >
      <v-icon>mdi-chevron-left</v-icon>
      Previous post
    </v-btn>



    <v-spacer></v-spacer>


    <v-btn
      v-if="next"
      color="secondary"
      right
      outlined
      large
      nuxt
      :to="{ name: 'blog-slug', params: { slug: next.slug } }"
    >
      Next post
      <v-icon>mdi-chevron-right</v-icon>
      
    </v-btn>
    


	</v-row>
</template>


<script>
export default {
	props: {
		prev: {
			type: Object,
			default: () => null,
		},
		next: {
			type: Object,
			default: () => null,
		},
	},
};
</script>