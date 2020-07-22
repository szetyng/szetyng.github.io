<template>
	<v-container>
		<h1>Projects</h1>
		<v-data-iterator
			:items="projects"
			hide-default-footer
		>

			<template>
				<v-row>
					<v-col
						v-for="project in projects"
						:key="project.title"
						cols="12"
						sm="12" md="6"
					>
						<v-card
							min-height="300"
						>
							<v-card-title>{{ project.title }}</v-card-title>
							<v-card-text>
								{{ project.description }}

							</v-card-text>
						</v-card>

					</v-col>
				</v-row>

			</template>

		</v-data-iterator>
	</v-container>
</template>


<script>
export default {
	data() {
		return {
			projects: [
				{
					title: 'Guardrails',
					description: "\
					Designed and built a multi-agent system simulator in F# to investigate the effects of having minimal \
					recognition of rights to self-organise (i.e. guardrails) on the sustainability of electronic institutions. Using \
					the method of sociologically-inspired computing, these institutions are designed according to the \
					<a href='https://en.wikipedia.org/wiki/Elinor_Ostrom#Design_principles_for_Common_Pool_Resource_(CPR)_institution' target='_blank'>principles</a> \
					proposed by political economist, Elinor Ostrom.\
					",
					url: "https://github.com/szetyng/Guardrails",
				},
				{
					title: 'CaterPillar',
					description: "\
						  Developed a smart pill organiser to improve pill adherence and reduce medication errors among \
							the elderly. The CaterPillar system involves an electronic pillbox and Android applications for \
							tablets and smartwatches. It learns to provide adaptive reminders based on data regarding the \
							user's daily routines.\
					",
					url: "https://github.com/szetyng/CaterPillar"
				},
				{
					title: 'neuron',
					description: "\
					  Collaborated with Microsoft to create an extension for Visual Studio Code, which has since been \
						<a href='https://blogs.msdn.microsoft.com/pythonengineering/2018/11/08/data-science-with-python-in-visual-studio-code/?fbclid=IwAR3M5REwXMSCxgCCiqKez_cMJr4WVYYy1DA3UjjjnhpNGDluQiSo4GnhBk0' target='_blank'>incorporated into their Python extension</a> \
						as part of their Data Science features. It combines the \
						rich experience of using the code editor with the interactive programming model of Jupyter notebook.\
					",
					url: "https://github.com/neuron-team/vscode-ipe"
				},
				{
					title: 'Spam Detection',
					description: "\
						Applied the theory learned in Introduction to Machine Learning to classify emails as either spam or ham.\
					",
					url: "https://github.com/szetyng/machine-learning-spam"
				},
				{
					title: 'ARM Emulator',
					description: "\
						Wrote and fully tested an ARM emulator in F#. The programme is able to parse and consecutively simulate a subset of the \
						ARM UAL instructions. Aimed to recreate <a href='https://salmanarif.bitbucket.io/visual/' target='_blank'>VisUAL</a>, \
						a visual ARM emulator used in Introduction to Computer Architecture in Imperial College London as an aide in teaching the \
						ARM assembly language.\
					",
					url: "https://github.com/szetyng/HLP5"
				},
				{
					title: "AceCaddie",
					description: "\
						Used an accelerometer to build an IoT device that tracks golf scores automatically when it is \
						attached to the golf club in use. The accompanying mobile app allows friends to compete against each other.\
					",
					url: "https://github.com/szetyng/embedded"
				},
				{
					title: "SortBot",
					description: "\
						Implemented a classifier that uses machine vision to sort items into four different recycling categories \
						for a self-sorting recycling machine. Aims to encourage recyling on the Imperial College London campus by \
						awarding points to users of the machine through an accompanying mobile app.\
					",
					url: "https://github.com/szetyng/sortbot"
				},
				{
					title: "2048",
					description: "\
						Recreated the popular 2048 game in C++.\
					",
					url: "https://github.com/szetyng/2048"
				}
			]
		}
	}
	
}
</script>


<style scoped>

</style>