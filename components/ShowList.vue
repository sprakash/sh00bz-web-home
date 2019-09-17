<template>
	<div id="shows">
		<section class="show-container">
			<ul class="show-area">

				<li>
					<div>
						SHOW 1
					</div>
					<div>
						SHOW 2
					</div>

				</li>
			</ul>
			
			<!-- -->

		</section>
	</div>
</template>
<script>
	export default {
		name: 'ShowList',
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