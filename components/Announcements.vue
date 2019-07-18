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
</style>

