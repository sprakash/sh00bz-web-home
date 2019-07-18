<template>
	<div>
	<h1>{{msg}}</h1>
	<span>Lovin it</span>
	</div>
</template>
<script>
	export default {
		name: 'Digital',
		created() {
            this.msg = this.$route.params.isSlideshow;
        },
		data() {
			return {
				msg: 'Welcome to the Digital section'
			}
		}
	}
</script>
<style scoped>
	body{
	background: magenta;
}
h1 {
	color: white;
	font-size: 40px;
}

</style>