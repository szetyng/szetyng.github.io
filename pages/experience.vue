<template>
	<v-container>
		<!-- <h1>Experience</h1> -->
		<v-row justify="center">
			<v-col cols="12" md="10">
				<v-timeline class="hidden-xs-only">
					<v-timeline-item
						v-for="(job, i) in jobs"
						:key="i"
						:color="job.color"
						:icon="job.icon"
						fill-dot
						large
					>
						<template v-slot:icon>
							<v-avatar>
								<img :src="require(`~/assets/images/experience/${job.imgSrc}`)">
							</v-avatar>
						</template>

						<div class="py-4">
							<span class="overline font-weight-medium grey-text text--darken-2">
								{{ job.year }}
							</span>
							<h2 :class="`font-weight-light mb-4 ${job.color}--text`">{{ job.title }}</h2>
							<h3 class="subtitle font-weight-light">{{ job.subtitle }}</h3>
							<div>
								{{ job.description }}
							</div>
						</div>
					</v-timeline-item>
				</v-timeline>


				<v-timeline class="hidden-sm-and-up" dense>
					<v-timeline-item
						v-for="(job, i) in jobs"
						:key="i"
						:color="job.color"
						:icon="job.icon"
						fill-dot
						large
					>
						<template v-slot:icon>
							<v-avatar>
								<img :src="require(`~/assets/images/experience/${job.imgSrc}`)">
							</v-avatar>
						</template>

						<div class="py-4">
							<span class="overline font-weight-medium grey-text text--darken-2">
								{{ job.year }}
							</span>
							<h2 :class="`font-weight-light mb-4 ${job.color}--text`">{{ job.title }}</h2>
							<h3 class="subtitle font-weight-light">{{ job.subtitle }}</h3>
							<div>
								{{ job.description }}
							</div>
						</div>
					</v-timeline-item>
				</v-timeline>
			</v-col>
		</v-row>
	</v-container>
</template>


<script>
export default {
	name: 'ExperiencePage',
	head() {
		return {
			title: 'Experience',
			meta: [
				{hid: 'description', name: 'description', content: 'Sze Tyng Lee\'s experience - education and career timeline'}
			]
		};
	},
	data(){
		return {
			jobs: [
				{
					year: 'Nov 2019 - present',
					title: 'Gamuda Engineering Pte. Ltd, Malaysia',
					subtitle: 'Full-stack software developer',
					description: '\
						Creating software solutions to improve productivity in the tunnelling industry\
					',
					color: 'green',
					icon: 'mdi-office-building',
					imgSrc: 'gamuda.png'
				},
				{
					year: 'Jun 2017 - Sep 2017',
					title: 'Keysight Technologies, Malaysia' ,
					subtitle: 'Manufacturing Test Intern',
					description: '\
						Created a proof of concept for a new cost-saving test methodology and compiled a report \
						detailing the feasibility of said method\
					',
					color: 'cyan',
					icon: 'mdi-office-building',
					imgSrc: 'keysight.png'
				},
				{
					year: 'Oct 2015 - Jun 2019',
					title: 'Imperial College London, United Kingdom',
					subtitle: 'M.Eng Electrical and Electronic Engineering',
					description: '\
						First Class Honours\
					',
					color: 'green',
					icon: 'mdi-school',
					imgSrc: 'imperial.png'
				},
				{
					year: 'Jan 2014 - Jun 2015',
					title: 'INTI International College Penang, Malaysia',
					subtitle: 'Cambridge A-Levels',
					description: '\
						A*A*A*A* in Mathematics, Physics, Chemistry and Economics\
					',
					color: 'cyan',
					icon: 'mdi-school',
					imgSrc: 'inti.png'
				}
			]
		};
	},
	computed: {
		smallScreen() {
			return this.$vuetify.breakpoint.xs ;
		}
	}
};
</script>


<style scoped>

</style>