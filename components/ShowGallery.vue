<template>
	<div id="shows-gallery">
		<section class="show-container">
			<ul class="show-gallery-list">
				   <li v-for="dataItem in myJson['Theatre']" >

					{{dataItem.name}}
				   	  <br/>					
				</li> 
			</ul>
			

		</section>
	</div>
</template>
<script>
	import json from '/assets/json/theatre.json'
	export default {
		name: 'ShowGallery',
		props: {

		},
		components: {
			
		},
		data() {
			return {
				headers: ['name','type','role','director','location','year'],
				myJson: json,
				sortKey: 'name'
			}
		},
		methods: {
            sortBy: function(sortKey) {
                    this.reverse = (this.sortKey == sortKey) ? ! this.reverse : false;
            },
            importAll(r) {
		      r.keys().forEach(key => (this.allimages.push({ pathLong: r(key), pathShort: key })));
		    }		
		}
		
	}
	
</script>
<style lang="scss">
	.loadShows {
		width: 200px;
		height: 100px;
		background-repeat: no-repeat;
		border:2px solid yellow;
		margin: 2em;
	}
</style>

	