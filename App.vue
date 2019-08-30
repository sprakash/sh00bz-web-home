<template>
	<div id="topest" :class="$mq">
		<div id="content">
			<section id="grouped">
				<section id="content-fill">
					<router-view/>
					<Landing/>
				</section>
				<section>
					<div id="announcements">
						<Announcements/>
					</div>
				</section>
				<section id="bio">
					<Bio/>
				</section>
			</section>
			<header>
				<h1>Shubhra Prakash</h1>
				<Navigation/>
			</header>
		</div>
  </div>
</template>
<script>
	import Navigation from './components/Navigation'
	import Landing from './components/Landing'
	import Bio from './components/Bio'
	import Announcements from './components/Announcements'
	export default {
		name: 'App', 
		components: {
			Announcements,
			Bio,
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
		background-color: #f7fcfe;
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
		line-height: 1.5em;
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
		height: 59vh;
		width: 100%;
	}

	header {
		display: flex;
		justify-content: space-between;
		color: #24020a;
		border-top: 1px solid darkgrey;
		background: linear-gradient(270deg, #f970b1, #e67a83, #7dd2ec);
		background-size: 100% 100%;
		color: #39053f;
	}

	.md ul {
		flex-direction: column;
		justify-content: space-between;
		width: 100%;
		text-align: center;
		font-size: 1.25em;
	}
	.md header {
		flex-direction: column-reverse;
		justify-content: normal;
		width: 20%;
	}
	.md .grouped {
		width: 80%;
	}
	.md  #content{
		flex-direction: row;
	}
	.md #content-fill {
		height: 64vh;
	}

</style>

