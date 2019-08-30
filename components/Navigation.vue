<template>
	<div id="navigation">
		<nav>
			<ul>
		 	<li id="home"><router-link :to="{name: 'Landing'}">Home</router-link></li>
			<li id="theatre"><router-link :to="{name: 'Theatre'}">Theatre</router-link></li>
		    <li id="film"><router-link :to="{name: 'Film' }">Film</router-link></li>
		    <li id="digital"><router-link :to="{name: 'Digital'}">Digital</router-link></li>
		    <li id="intersect"><router-link :to="{name: 'Intersect'}">Intersect</router-link></li>
		    <li id="gallery"><router-link :to="{name: 'Gallery'}">Gallery</router-link></li>
		     <li id="blog"><router-link :to="{name: 'Blog'}">Blog</router-link></li>
		      <li id="connect"><router-link :to="{name: 'Connect'}">Connect</router-link></li>
			</ul>
		</nav>
	</div>
	
</template>
<script>
	export default {
		name: 'Navigation',
		data() {
			return {
				msg: 'Navigate around yo'
			};
		}
	}
	
</script>
<style>
	
	#navigation {
		width: 70%;
		margin: 2em 0;
	}

	nav {
		margin: 0 2em;
	}

	nav ul {
		display: flex;
		list-style-type: none;
		justify-content: space-around;


	}

	li a {
		text-decoration : none;
		color: #39053f;
		font-size: .95em;
    	font-weight: bold;
	}
	
	li a:hover {
    		color: yellow;
	}

	.md #navigation {
		width: 100%;
		display: flex;
		flex-grow: 1;
	}
	
	.md nav {
		display: flex;
		width: 100%;
	}
</style> 
