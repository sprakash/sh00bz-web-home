<template>
	<div>
	<h1>Hello Film Page</h1>
	</div>
</template>
<script>
	export default {
		name: 'Film',
		created() {
            this.msg = this.$route.params.isSlideshow;
        },
		data() {
			return {
				msg: 'Welcome to the film section'
			}
		}
	}
</script>
<style scoped>
body {
	background: orange;
}

h1 {
	color: green;
	font-size: 40px;
}

	
</style>