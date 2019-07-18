<template>
	<div>
	<h1>{{msg}}</h1>
	<span>Lovin it too much</span>
	</div>
</template>
<script>
	export default {
		name: 'Theatre',
		created() {
            this.msg = this.$route.params.isSlideshow;
        },
		data() {
			return {
			}
		}
	}
</script>
<style scoped>
body {
	background: blue;
}
h1 {
	color: yellow;
	font-size: 40px;
}
	
</style>