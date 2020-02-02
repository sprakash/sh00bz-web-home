<template>
	<div>
	<header>
		<h1><span>S</span>hubhra <span>P</span>rakash</h1>
		<Navigation/>
	</header>
	<section class="slicinItup" id="gallery-content"> 
		<section id="gallery-title">
		        <h1>Gallery</h1>
		        
		 <span> click on an image to get more info </span>
		</section>

		<hr/>

		<section class="photo-areas">
			<section>
				<h2>posters</h2>
				<section class="photo-posters">
				<!--embed insta code for showposters-->

				</section>

			</section>
			<section>
				<h2>production shots</h2>
				<section class="photo-productionShots">
				<!--embed insta code for productionShots-->

				</section>
			</section>
			<section>
				<h2>backstage photos</h2>
				<section class="photo-backstage">
				<!--embed insta code for backstage-->

				</section>
			</section>
			
		</section>
	</section>


	</div>
</template>
<script>
	import Navigation from './Navigation'

	export default {
		name: 'Gallery',
		components: {
			Navigation
        },
		created() {
		 },
		data() {
			return {
				msg: 'Welcome to the Gallery section'
			}
		},
		methods: {

			getImgUrl(item) {
			}
		}
	}
</script>
<style lang="scss">
	.photo {
		
		&-areas {
			display: flex;
			flex-direction: row;
			justify-content: space-between;

			section {
				width: 30%;
				padding: .5em;
				border: 1px solid lightgrey;

				h2 {
					text-align: center;
					align-items: center;
				}
			}
		}

		&-collection {
			img {
				display: inline-block;
			}
		}
		
	}
</style>