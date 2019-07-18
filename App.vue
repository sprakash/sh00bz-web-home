<template>
	<div id="content">
		<section id="content-fill">
			<router-view/>
			<Landing/>
		</section>
		<header>
			<h1>Shubhra Prakash</h1>
			<Navigation/>
		</header>
	</div>
</template>
<script>
	import Navigation from './components/Navigation'
	import Landing from './components/Landing'
	export default {
		name: 'App', 
		components: {
			Navigation,
			Landing
		},
		data (){
			return { } 
		}
	}
</script>
<style>

	body {
		background-color: whitesmoke;
		font-family: Roboto, Helvetica, Arial, sans-serif;
		margin: 0;
		padding: 0;
	}

	main {
		flex: 1;
		min-height: 83vh;
	}


	h1 {
		margin: 0.67em 1em;
	}

	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	#content {
		display: flex;
		flex-direction: column;
	}

	#content-fill {
		height: 88vh;
		width: 100%;
	}

	header {
		display: flex;
		justify-content: space-between;
		color: #24020a;
		border-top: 1px solid darkgrey;

		background: linear-gradient(270deg, #f970b1, #e67a83, #7dd2ec);
background-size: 100% 100%;

	}
</style>

