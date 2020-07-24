<template>
	<v-container fill-height>
	<!-- <v-parallax
		:src="require('~/assets/images/penang.jpg')"
		class="parallax"
		height="100%"
		jumbotron
	> -->
		<v-row justify="center" align="center">
			<v-col class="text-center">
				<h2 class="text-h2 font-weight-thick text-center black--text text--darken-1">Sze Tyng Lee</h2>
				<br>
				<h4 class="text-h4 font-weight-light text-center black--text text--darken-1">Software developer.</h4>
				<br>
			</v-col>
		</v-row>


	<!-- </v-parallax> -->
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