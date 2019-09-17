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
		<nav class="mobile"><a href="#" v-on:click="openMenu()">&#9776;</a>
			<ul id="mobileNav">
				<li><a href="#" v-on:click="closeMenu()">&times;</a></li>
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
		}, 
		methods: {
			openMenu() {
				document.getElementById('mobileNav').style.display='block';
			},
			closeMenu() {
				document.getElementById('mobileNav').style.display='none';
			}
		}
	}
	
</script>
<style>
	
	#navigation {
		width: 70%;
		margin: 2em 0;
	}
	
	header {
		flex-grow: 1;
	}

	nav {
		margin: 0 2em;
	}

	nav ul {
		display: flex;
		list-style-type: none;
		justify-content: space-around;
	}

	nav a {
		text-decoration: none;
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

	.md h1,
	.sm h1 {
		font-size: 1em;
	}

	.md nav:nth-child(1),
	.sm nav:nth-child(1) {
		display: none;
	}

	nav:nth-child(2) {
		display: none;
	}

	.md nav:nth-child(2),
	.sm nav:nth-child(2) {
		float: right;
		cursor: pointer;
	}
	
	.md header,
	.sm header {
		align-items: center;
	}

	.md .mobile,
	.sm .mobile {
		display: block;
	}

	.md #navigation,
	.sm #navigation {
		flex: 2;
		padding: 0;
		margin: 0;
	}

	.mobile ul {
		top: 0;
		position: absolute;
	    z-index: 24;
	    width: 100%;
	    left: 0;
	    justify-content: space-evenly;
	    height: 100%;
	    text-align: center;
	    display: block;
	    flex-direction: column;
	}

	.mobile ul li {
		margin: .1em 0;
		background: linear-gradient(270deg, #f970b1, #e67a83, #7dd2ec);
		padding: 2em 0;
		display:block;
	}


	.mobile ul li:first-child a {
		display: block;
	    text-align: right;
		font-size: 2em;
    	margin-right: 1em;
	}

	.mobile ul li a {
		font-size: 1.85em;
	}

	#mobileNav {
		display: none;
	}
</style> 
