<template>
	<div>
	<h1>Hello Blog Page</h1>
	</div>
</template>
<script>
	export default {
		name: 'Blog',
		created() {
            this.msg = this.$route.params.isSlideshow;
        },
		data() {
			return {
				msg: 'Welcome to the BLOG section'
			}
		}
	}
</script>
<style lang="scss" scoped>
body {
	background: orange;
}

h1 {
	color: gold;
	font-size: 40px;
}

	
</style>