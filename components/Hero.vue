<template>

	<v-parallax
		:src="require('~/assets/images/startup3.jpg')"
		class="parallax"
	>
	</v-parallax>

</template>


<script>
export default {
	name: "Hero"
}
</script>


<style scoped>
.parallax {
	/* position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0; */
  height: 100%; 
  width:100%;
	background-attachment: scroll;
  background-position: center;
  background-repeat: no-repeat;
	background-size: contain;
}
body, html {
  height: 100%;
}
</style>