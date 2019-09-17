<template>
	<div class="announce-area">
		<span id="announce-content">
			<h1>LATEST NEWS : </h1>
			<span>Shakespeare Replayed: Tyranny released on Amazon Prime, <a href="https://www.amazon.com/Shakespeare-Replayed-Tyranny-Shubhra-Prakash/dp/B01H1IEVMG" target="_blank">click here to watch my performance</a></span>
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
<style>
	#announcements {
		display: block;
	    text-align: center;
	    position: relative;
		background-color: whitesmoke;
		border: 1px solid grey;    
	    margin: 0 auto;
	    z-index: 9;
	}

	#announce-content {
		color: #6e0080;
		display: flex;
		font-size: .85em;
		text-align: center;
		align-items: center;
	}

	#announce-content h1 {
		text-shadow: 1px 1px yellow;
	}

	#announce-content span {
		color: #ec4024;
	}
	
	.sm #announcements {
		z-index: 23;
		line-height: 1.25em;
    	font-size: .5em;
	}

	.md #announcements {
		z-index: 23;
	}

	.sm #announce-content {
		font-size: .85em;
		padding: .5em;
	}

</style>

