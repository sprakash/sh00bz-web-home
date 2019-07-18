<template>
	<div>
	<h1>Connect</h1>
	<section>
		<ul>
			<li>Email me </li>
			<li>Social Media : 
					<ul>
						<li>Facebook</li>
						<li>Twitter</li>
						<li>Instagram</li>
						<li>LinkedIn</li>
					</ul>
			</li>
			<li>Download
					<ul>
						<li>Performer (Stage and Film) Resume</li>
						<li>Producer Resume</li>
						<li>Front End Dev Resume</li>
					</ul>

			</li>
		</ul>

		<footnote>The site has been created by yours truly using Vue framework including the blog which has been created using Vue as well. Code can be looked at </footnote>
	</section>
	</div>
</template>
<script>
	export default {
		name: 'Connect',
		created() {
            this.msg = this.$route.params.isSlideshow;
        },
		data() {
			return {
				msg: 'Welcome to the CONNECT section'
			}
		}
	}
</script>
<style scoped>
body {
	background: seagreen;
}

h1 {
	color: gold;
	font-size: 40px;
}

	
</style>