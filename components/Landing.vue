<template>
	<div id="landing">
		<main>
			<Panels v-bind:panels="panels"/>
		</main>
	</div>
</template>
<script>
	import Panels from './Panels'
	export default {
		name: 'Landing', 
		components: {
			Panels
		},
		data (){
			return {
				panels : [
				  { title: "Theatre", id:"theatre-area", prev: "digital-prev", next: "film-next", content: "I am the most alive on stage. Here you can find out about my performance history, the plays I've written, produced and am working on at the moment."},
				  { title: "Film", id:"film-area", prev: "theatre-prev", next: "digital-next", content: "Have a look at the short films I have been a part of as a creator, producer and performer."}, 
				  { title: "Digital", id:"digital-area", prev: "film-prev", next: "theatre-next", content: "an A/R comic book or an interactive film, check out my work that lies at the intersection of performance and tech."}
				], 
			} 
		}
	}
</script>
<style>
</style>

