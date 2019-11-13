<template>
	<div id="shows-gallery">
		<section class="show-container">

			<!-- 
			-->
			
			<ul class="show-gallery-list">
				   <li v-for="dataItem in myJson['Theatre']" >

				   	  Hello here's the image

<!--    					 <img v-bind:src="require("'+{{dataItem.coverImage}}+'")" alt="hey">
 -->


<!--  						<img src="/assets/moonOwl.jpg" width="10%" height="auto">
 -->						 <div class="loadShows"  v-bind:style="{ 'background-image': 'url('+dataItem.coverImage+ ')' }"></div>



<!--  						:src=“require(’@/assets/’ +img.fileName)”
 -->				   
				</li> 
			</ul>
			
			<!-- -->

		</section>
	</div>
</template>
<script>
	import json from '/assets/json/theatre.json'
	import images from '/assets/posters/moonOwl.jpg'
	export default {
		name: 'ShowGallery',
		props: {
			shows: {
				type: Array,
				required: true
			}
		},
		components: {
			
		},
		data() {
			return {
				headers: ['name','type','role','director','location','year'],
				myJson: json,
				sortKey: 'name',
				images
			}
		},
		computed: {
			
		},
		methods: {
             sortBy: function(sortKey) {
                            this.reverse = (this.sortKey == sortKey) ? ! this.reverse : false;
            }
			
		}
		
		
	}
	
</script>
<style>
	.loadShows {
		width: 200px;
		height: 100px;
		background-repeat: no-repeat;
		border:2px solid yellow;
		margin: 2em;
	}
</style>

	