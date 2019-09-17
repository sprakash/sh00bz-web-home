<template>
	<div id="topest" :class="$mq">
		<div id="content">
			<main>
				<section id="grouped">
					<section id="content-fill">
						<router-view/>
						<Landing/>
					</section>
				</section>
			</main>
			
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

	html, body {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
	}
	body {
		background-color: whitesmoke;
		font-family: Roboto, Helvetica, Arial, sans-serif;
		min-height: 100vh;
		display: flex;
		flex-direction: row;
		/*background-image: url('/assets/ranjha.jpg');
		background-repeat: no-repeat;
		background-size: cover;*/
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
		height: 100%;
	}

	.sm #content {
		flex-direction: column-reverse;
	}

	#content-fill {
/*		height: 59vh;
*/		width: 100%;
	}

	header {
		display: flex;
		justify-content: space-between;
		color: #24020a;
		border-top: 1px solid darkgrey;
		background: linear-gradient(270deg, #f970b1, #e67a83, #7dd2ec);
		background-size: 100% 100%;
		color: #39053f;
		align-items: center;
	}

	.md header ul {
		flex-direction: row;
	}

	.md ul {
		flex-direction: column;
		justify-content: space-evenly;
		width: 100%;
		text-align: center;
		font-size: 1.25em;
	}

	.sm header {
		z-index: 25;
	}

	.md .grouped {
		width: 80%;
	}
	.md  #content{
		flex-direction: row;
		flex-wrap: nowrap;
	}
	
	#content,
	#topest {
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}

	#grouped {
		flex-grow: 1;
		flex-shrink: 0;
	}

	#content {
		flex-shrink: 0;
	}
	/*.md #content-fill {
		height: 64vh;
	}
	.sm #content-fill {
		height: 48vh;
	}*/

</style>

