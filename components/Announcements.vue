<template>
	<div class="announce-area">
		<span id="announce-content">
			<h1>LATEST NEWS : </h1>
			<span>Amazon Prime</span>
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
		background-color: rgb(140, 201, 216, .9);	    
		width: 85%;
	    margin: 0 auto;
	}

	#announce-content {
		color: #6e0080;
		display: flex;
		font-size: .65em;
		text-align: center;
		align-items: center;
	}

	#announce-content h1 {
		text-shadow: 1px 1px yellow;
	}

	.md #announcements {
		top: -25px;
		z-index: 9;
	}
</style>

