<template>
	<div id="landing">
		<main>
			<Panels v-bind:panels="panels"/>
		</main>
		<header>
						<h1>Shubhra Prakash</h1>
						<Navigation/>
					</header>
					<section>
						<div id="announcements">
							<Announcements/>
						</div>
					</section>
					<section id="bio">
						<Bio/>
					</section>
	</div>

</template>
<script>
	import Panels from './Panels'
	import Navigation from './Navigation'
	import Bio from './Bio'
	import Announcements from './Announcements'
	export default {
		name: 'Landing', 
		components: {
			Panels,
			Announcements,
			Bio,
			Navigation
		},
		data (){
			return {
				panels : [
				  { title: "Theatre", id:"theatre-area", prev: "digital-prev", next: "film-next", content: "I am the most alive on stage, have a look at the shows I've acted in, the work I've created for stage and what lies ahead for me as a theatre maker. "},
				  { title: "Film", id:"film-area", prev: "theatre-prev", next: "digital-next", content: "Have a look at the short films I have been a part of as a creator, producer and performer."}, 
				  { title: "Digital", id:"digital-area", prev: "film-prev", next: "theatre-next", content: "an A/R comic book or an interactive film, here is work that lies at the intersection of performance and tech."}
				], 
			} 
		}
	}
</script>
<style>
</style>

