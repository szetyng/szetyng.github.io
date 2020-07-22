<template>
	<v-container>
		<h1>Experience</h1>
		<v-timeline>
			<v-timeline-item
				v-for="(job, i) in jobs"
				:key="i"
				:color="job.color"
				:icon="job.icon"
				fill-dot
			>
				<template v-slot:opposite>
					<span
						:class="`headline font-weight-bold ${job.color}--text`"
						v-text="job.year"
					>
					</span>
				</template>

				<div class="py-4">
					<h2 :class="`headline font-weight-light mb-4 ${job.color}--text`">{{ job.title }}</h2>
					<h3 class="subtitle font-weight-light">{{ job.subtitle }}</h3>
					<div>
						{{ job.description }}
					</div>
				</div>
			</v-timeline-item>
		</v-timeline>
	</v-container>
</template>


<script>
export default {
	data() {
		return {
			jobs: [
				{
					year: "2019 - present",
					title: "MMC Gamuda KVMRT (T) Pte. Ltd.",
					subtitle: "Full-stack software developer",
					description: "\
						Creating software solutions to improve productivity in the tunnelling industry.\
					",
					color: "cyan",
					icon: "mdi-office-building"
				},
				{
					year: "2015 - 2019",
					title: "Imperial College London",
					subtitle: "M.Eng Electrical and Electronic Engineering",
					description: "\
						First Class Honours\
					",
					color: "green",
					icon: "mdi-school"
				}
			]
		}
	}
}
</script>


<style scoped>

</style>