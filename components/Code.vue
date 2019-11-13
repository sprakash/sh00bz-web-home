<template>
	<div>
	<h1>Hello Code Page</h1>
	</div>
</template>
<script>
	export default {
		name: 'Code',
		created() {
            this.msg = this.$route.params.isSlideshow;
        },
		data() {
			return {
				msg: 'Welcome to the code section'
			}
		}
	}
</script>
<style lang="scss" scoped>
body {
	background: blue;
}

h1 {
	color: magenta;
	font-size: 40px;
}
	
</style>