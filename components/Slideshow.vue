<!-- Will expect a bunch of images and then create a slideshow out of those -->

<template>
	<div>
		<div id="sliding-yo" class="slide-gallery">
			HEY HEY HEY 
			{{msg}}
			<ul v-if="msg === true">
				<li v-for="singleImage in GalleryImagesStore.theatreImages">{{singleImage}} STUFF </li>
			</ul>
		</div>
	</div>
</template>
<script>
	import GalleryImagesStore from "../store/GalleryImagesStore"
	export default {
		name: 'Slideshow',
		created() {
            this.msg = this.$route.params.isSlideshow;
        },
		data () {
			return {
				GalleryImagesStore: GalleryImagesStore.data
			}
		},
		methods: {
			loadGallery(galleryName) {
				GalleryImagesStore.methods.loadGallery(galleryName)
			}
		},
	}
</script>
<style>
	
</style>