<template>
	<div id="shows">
		<section class="show-container">
			<ul class="show-area">

				<li>
					<div>
						SHOW GALLERY 1
					</div>
					<div>
						SHOW GALLERY 2
					</div>

				</li>
			</ul>
			
			<!-- -->

		</section>
	</div>
</template>
<script>
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
			}
		},		
		computed: {
			
		},
		methods: {
			
		}
		
	}
	
</script>