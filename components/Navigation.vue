<template>
	<div id="navigation">
		<nav>
			<ul>
		 	<li id="home"><router-link :to="{name: 'Landing'}">Home</router-link></li>
			<li id="theatre"><router-link :to="{name: 'Theatre'}">Theatre</router-link></li>
		    <li id="film"><router-link :to="{name: 'Film' }">Film</router-link></li>
		    <li id="digital"><router-link :to="{name: 'Digital'}">Digital / Intersect</router-link></li>
		      <li id="fontwala"><a href="http://sprakash.github.io/portfolio/fontwala.html" target="_blank">Fontwala</a></li>
		   <li id="gallery"><a href="http://www.instagram.com/sh000bz.artist">Gallery</a></li>
		     <li id="blog"><a href="http://shubhraprakash.blogspot.com" target="_blank">Blog</a></li>
 	  	 		<li id="connect"><router-link :to="{name: 'Connect'}">Connect</router-link></li>
			</ul>
		</nav>
		<nav class="mobile"><a href="#" v-on:click="openMenu()">&#9776;</a>
			<ul id="mobileNav">
				<li><a href="#" v-on:click="closeMenu()">&times;</a></li>
			 	<li id="home"><router-link :to="{name: 'Landing'}">Home</router-link></li>
				<li id="theatre"><router-link :to="{name: 'Theatre'}">Theatre</router-link></li>
			    <li id="film"><router-link :to="{name: 'Film' }">Film</router-link></li>
			    <li id="digital"><router-link :to="{name: 'Digital'}">Digital / Intersect</router-link></li>
			    <li id="fontwala"><a href="http://sprakash.github.io/portfolio/fontwala.html" target="_blank">Fontwala</a></li>
			    <li id="gallery"><a href="http://www.instagram.com/sh000bz.artist">Gallery</a></li>

  				<li id="blog"><a href="http://www.shubhraprakash.blogspot.com" target="_blank"/>Blog</a></li>    
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
<style lang="scss">
	
	#navigation {
		width: 70%;
		margin: 1em 0;

		.sm & {
			flex: 2;
			padding: 0;
			margin: 0;
		}

		.md & {
			flex: 2;
			padding: 0;
			margin: 0;
		}
	}
	
	header {
		flex-grow: 1;
		opacity: .9;

		.sm & {
			align-items: center;
			position: static;
		}

		.md & {
			align-items: center;
		}

		h1 {
			span {
				font-size: 2em;
			}
		}
	}

	nav {
		margin: 0 2em;

		ul {
			display: flex;
			list-style-type: none;
			justify-content: space-around;

			 li { 

				a {
					font-weight: bolder;
					letter-spacing: .085em;

					&:hover {
						color: yellow !important;
					}
				}
			 }
		}

		a {
			text-decoration: none;
		}

		&:nth-child(1) {

			.sm & {
				display:none;
			}

			.md & {
				display:none;
			}
		}

		&:nth-child(2) {
			display: none;

			.sm & {
				float: right;
				cursor: pointer;
			}

			.md & {
				float: right;
				cursor: pointer;
			}
		}
	}

	li { 

		a {
			text-decoration : none;
			color: #39053f !important;
			font-size: .95em;
	    	font-weight: lighter;

	    	&:hover {
	    		color: yellow;
	    	}
    	}
	}
	
	h1 {
		.sm & {
			font-size: 1em;
		}

		.md & {
			font-size: 1em;
		}
	}

	.mobile {

		.sm & {
			display: block;
		}

		.md & {
			display: block;
		}

		ul {
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

		     li {
		     	margin: .1em 0;
				background: linear-gradient(270deg, #f970b1, #e67a8399, #4ba8f3);
				/** background: linear-gradient(270deg, #f970b1, #e67a83, #7dd2ec); */
				padding: 2em 0;
				display:block;

				&:first-child {

					a {
						display: block;
					    text-align: right;
						font-size: 2em;
				    	margin-right: 1em;
					}
				}

				a {
					font-size: 1.85em;
				}
		     }
		}
	}

	#mobileNav {
		display: none;
		position: fixed;
	}
</style> 
