<template>
	<v-container>
		<!-- <h1>Experience</h1> -->
		<v-row justify="center">
			<v-col cols="12" md="10">
				<v-timeline>
					<v-timeline-item
						v-for="(job, i) in jobs"
						:key="i"
						:color="job.color"
						:icon="job.icon"
						large
					>
						<template v-slot:icon>
							<v-avatar>
								<img :src="require(`~/assets/images/experience/${job.imgSrc}`)">
							</v-avatar>
						</template>

						<template v-slot:opposite>
							<span
								:class="`headline font-weight-bold ${job.color}--text`"
								v-text="job.year"
							>
							</span>
						</template>

						<div class="py-4">
							<h2 :class="`headline font-weight-bold mb-4 ${job.color}--text`">{{ job.title }}</h2>
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
	name: "ExperiencePage",
	data() {
		return {
			jobs: [
				{
					year: "Nov 2019 - present",
					title: "Gamuda Engineering Pte. Ltd, Malaysia",
					subtitle: "Full-stack software developer",
					description: "\
						Creating software solutions to improve productivity in the tunnelling industry\
					",
					color: "green",
					icon: "mdi-office-building",
					imgSrc: "gamuda.png"
				},
				{
					year: "Jun 2017 - Sep 2017",
					title: "Keysight Technologies, Malaysia" ,
					subtitle: "Manufacturing Test Intern",
					description: "\
						Created a proof of concept for a new cost-saving test methodology and compiled a report \
						detailing the feasibility of said method\
					",
					color: "cyan",
					icon: "mdi-office-building",
					imgSrc: "keysight.png"
				},
				{
					year: "Oct 2015 - Jun 2019",
					title: "Imperial College London, United Kingdom",
					subtitle: "M.Eng Electrical and Electronic Engineering",
					description: "\
						First Class Honours\
					",
					color: "green",
					icon: "mdi-school",
					imgSrc: "imperial.png"
				},
				{
					year: "Jan 2014 - Jun 2015",
					title: "INTI International College Penang, Malaysia",
					subtitle: "Cambridge A-Levels",
					description: "\
						A*A*A*A* in Mathematics, Physics, Chemistry and Economics\
					",
					color: "cyan",
					icon: "mdi-school",
					imgSrc: "inti.png"
				}
			]
		}
	}
}
</script>


<style scoped>

</style>