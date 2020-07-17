<template>
	<div>

			<Hero
			/>


		<main-section>
			<Portfolio />
		</main-section>

	</div>
</template>

<script>
import Hero from "../components/Hero.vue";
import Portfolio from "../components/Portfolio.vue";

export default {
	name: "Homepage",
	components: {
		Hero,
		Portfolio
	},
	data() {
		return {
		}
	}
}
</script>


<style scoped>
body, html {
  height: 100%;
}
</style>