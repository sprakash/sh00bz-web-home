<template>
	<div>
	<h1>Hello Film Page</h1>
	<header>
						<h1>Shubhra Prakash</h1>
						<Navigation/>
					</header>
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
<style lang="scss" scoped>
body {
	background: orange;
}

h1 {
	color: green;
	font-size: 40px;
}

	
</style>