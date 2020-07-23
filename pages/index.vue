<template>
	<v-container>
	<v-parallax
		:src="require('~/assets/images/startup3.jpg')"
		class="parallax"
		height="100%"
		jumbotron
	>
		<span class="text-h2 font-weight-thick text-center grey--text text--darken-4">Sze Tyng Lee</span>
		<br>
		<span class="text-h4 font-weight-light text-center grey--text text--darken-4">Software developer.</span>




	</v-parallax>
	</v-container>
</template>


<script>
export default {
	name: "Homepage",
	head() {
		return {
			title: "Home",
			meta: [
				{hid: 'description', name: 'description', content: "Homepage for Sze Tyng Lee's website"}
			]
		}
	},
	data() {
		return {
		}
	}
}
</script>


<style scoped>
.parallax {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
  height: 100%; 
  /* width:100%;
	background-attachment: scroll;
  background-position: center;
  background-repeat: no-repeat;
	background-size: cover; */
}
</style>