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
			</v-col>
		</v-row>

		<v-row justify="center">
			<v-col cols="12" md="10">

				<v-row justify="center" align="center">
					<v-col 
						v-for="bio in bios"
						:key="bio.title"
						cols="12" md="4"
						class="text-center"
					>
						<v-avatar size="150" color="cyan">
							<img
								:src="require(`~/assets/images/bios/${bio.imgSrc}`)"
							>
						</v-avatar>	
						<h4 class="text-h5 font-weight-light text-center black--text text--darken-1">{{ bio.title }}</h4>
					</v-col>
					
				</v-row>
			</v-col>
		</v-row>


		<!-- <v-row justify="center" align="center">
			<v-col class="text-center">
				<h4 class="text-h4 font-weight-light text-center black--text text--darken-1">Software developer.</h4>
			</v-col>
		</v-row> -->


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
			bios: [
				{
					title: "Software developer",
					imgSrc: "programmer.png"
				},
				{
					title: "Travel enthusiast",
					imgSrc: "travel.png"
				},
				{
					title: "Amateur writer",
					imgSrc: "writer.png"
				}
			]
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