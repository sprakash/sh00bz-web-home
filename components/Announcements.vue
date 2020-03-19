<template>
	<div class="announce-area">
		<span id="announce-content">
			<h1>LATEST NEWS : </h1>
			<span>Shakespeare Replayed: Tyranny released on Amazon Prime, <a href="https://www.amazon.com/Shakespeare-Replayed-Tyranny-Shubhra-Prakash/dp/B01H1IEVMG" target="_blank">click here to watch my performance</a></span>
			<span class="svgStylin">
				<span>
					  <a href="http://twitter.com/durkhaima" target="_blank"><img src="/assets/icons/twitter.svg"></a>
				</span>
				<span>
					  <a href="http://facebook.com/5000roses" target="_blank"><img src="/assets/icons/fb.svg"></a>
				</span>
				<span>
					  <a href="https://www.linkedin.com/in/shubhraprakash/" target="_blank"><img src="/assets/icons/linkedin.svg"></a>
				</span>
				<span>
					  <a href="http://instagram.com/sh000bz.artist" target="_blank"><img src="/assets/icons/insta.svg"></a>
				</span>
				<span>
					  <a href="https://github.com/sprakash/sh00bz-web-home" target="_blank"><img src="/assets/icons/github.svg"></a>
				</span>
			</span>
		</span>
	</div>
</template>
<script>
	
	export default {
		name: 'Announcements', 
		created () {},
		data (){
			return {
				
			} 
		}
	}
</script>
<style lang="scss">
	#announcements {
		display: block;
	    text-align: center;
	    position: relative;
		background-color: whitesmoke;
		border: 1px solid grey;    
	    margin: auto;
	    z-index: 9;
	}

	#announce-content {
		color: #6e0080;
		display: flex;
		font-size: .85em;
		text-align: center;
		align-items: center;
		justify-content: space-between;

		h1 {
			text-shadow: 1px 1px yellow;
		}

		span {
			color: deeppink;
		}

		a {
			color: deepskyblue;
		}
	}


	.sm {

		#announcements {
			z-index: 23;
			line-height: 1.25em;
	    	font-size: .5em;
    	}

    	#announce-content {
			font-size: .85em;
			padding: .5em;

			span {
				width: 30%;
			}
		}
	}

	.md #announcements {
		z-index: 23;
	}

	.svgStylin {
		text-align: right;
		position:relative;
		right:0;
		display: flex;

		 span {

		 	padding: 0 .5em;
			margin: 0 .25em;

		 	img {
		 		width: 1.5em;
		 		height: 1.5em;
		 		background-color: #efbbec85;
		 	}

		 	 &:hover {
		 	    border: 1px solid #00BCD4;
			    border-radius: 10px;
			    background-color: #00bcd436;
		 	}
		 	
		 }

		
	}


</style>

