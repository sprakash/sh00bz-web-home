<template>
	<div id="topest" :class="$mq">
		<div id="content">
				<section id="grouped">
					<section id="content-fill">
						<router-view/>
						<Landing/>
					</section>
				</section>			
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
<style lang="scss">

	html, body {
		margin: 0 auto;
		padding: 0;
		width: 99%;
		height: 100%;
		background-color: black;
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
		margin: 0.67em .5em;
		line-height: 1.5em;
	}

	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;

		.md & {
			flex-direction: column;
			justify-content: space-evenly;
			width: 100%;
			text-align: center;
			font-size: 1.25em;
		}
	}


	#content {
		background-color: lightblue;
		.sm & {
			flex-direction: column-reverse;
		}
	}

	#content-fill {
		width: 100%;
		height: 100%;
		background-color: whitesmoke;
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
		bottom: 0;
		top: auto;
		z-index:999;

		.sm & {
			z-index: 25;
			bottom: 0;
		}

		ul {

			.md & {
				flex-direction: row;		
			}
		}

		.md & {
			bottom: 0;
		}
	}
	
	#topest {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		background-color: cornflowerblue;
	}

	#grouped {
		display: flex;
		flex-direction: column;
		background-color: magenta; 
		align-items: stretch;
		height: 100%;

		.md & {
			width: 80%;
		}
	}

	#content {
		height: 100%;
		.md  &{
			flex-direction: row;
			flex-wrap: nowrap;
		}
	}


	.mobile {

		a {
			color: white !important;
		}
	}

	.router-link-exact-active{
			color: #f4ff42 !important;
	}


</style>

