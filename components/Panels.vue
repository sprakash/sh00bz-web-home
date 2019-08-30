<template>
	<div id="panels">
		<section class="panel-container">
			<ul class="panel-area">
				<li v-for="singlePanel in panels" class="single-panel">
					<div v-bind:id="singlePanel.id">
						<div class="panel-content">
							<h1 class="panel-header">{{singlePanel.title}}</h1>
							{{singlePanel.content}}
			
							<router-link :to="{name:singlePanel.title}"> More &raquo;</router-link>
						</div>

						<div class="button-areas">
							<div class="prev" v-bind:id="singlePanel.prev" v-on:click="previousPanel()">&#10094;</div>
				  			<div class="next" v-bind:id="singlePanel.next" v-on:click="nextPanel()">&#10095;</div>
		  				</div>
					</div>
					
				</li>
			</ul>

		</section>
	</div>
</template>
<script>
	export default {
		name: 'Panels',
		props: {
			panels: {
				type: Array,
				required: true
			}
		},
		components: {
			
		},
		data() {
			return {
				msg: 'Panels',
				visibility: 'visible'
			};
		},
		methods: {
			previousPanel() {

			},
			nextPanel() {

			},
			hideAllPanels() {
				alert('hidingall');
				$('.single-panel div').css({'visibility':'hidden'});
			}
		}
		
	}
	
</script>
<style>
	.panel-container {
		font-family: 'Palatino';
	}
	.panel-area {
		display: flex;
		flex:1;
		justify-content: space-between;
	}

	.panel-area li {
	 	min-width: 33%;
	 	height: 60vh;
	 	padding: .5em 0;
	 	background: black;
	}

	
	.single-panel div {
		animation: zoomin  ease 3s forwards;
		 -webkit-animation: zoomin  ease 3s forwards;
		 -moz-animation: zoomin  ease 3s forwards;
		 -o-animation: zoomin  ease 3s forwards;
		 -ms-animation: zoomin  ease 3s forwards;
	}

	.panel-header {
		color: whitesmoke;
		text-align: left;
    	font-size: 1.5em;
    	letter-spacing: .5em;
    	margin: 0 0 1em;
    	font-weight: lighter;
	}
	
	.panel-content:hover{
		 animation: fadein ease 1s forwards;
		 -webkit-animation: fadein ease 1s forwards;
		 -moz-animation: fadein ease 1s forwards;
		 -o-animation: fadein ease 1s forwards;
		 -ms-animation: fadein ease 1s forwards;
	} 

	#theatre-area
	.panel-content {
		background-color: rgba(109, 0, 42, 0.9);
	}

	#film-area
	.panel-content {
		background-color: rgba(11, 0, 109, 0.9);
	}

	#digital-area
	.panel-content {
		background-color: rgba(57, 109, 0,  0.9);
	}

	.panel-content {
		padding: 2em;
	    line-height: 2em;
	    font-family: Helvetica;
	    font-size: 1em;
	    width: 70%;
	    height: 45vh;
	    color: #ecda4c;
	    letter-spacing: .2em;
	    font-weight: lighter;
	    cursor: pointer;
	    opacity: 0;
	    box-shadow: 1px 1px #374a47;
	}

	.panel-content a {
		font-family: Palatino;
	    font-size: 1em;
	    letter-spacing: .1em;
	    cursor: pointer;
	    color: #fff;
	    font-style: italic;
	}
	
	.button-areas {
		display: none;
	}
	/* Next & previous buttons */
	.prev, .next {
	  cursor: pointer;
	  position: absolute;
	  width: auto;
	  padding: 16px;
	  color: white;
	  font-weight: bold;
	  font-size: 18px;
	  transition: 0.6s ease;
	  border-radius: 0 3px 3px 0;
	  user-select: none;
	}

	/* Position the "next button" to the right */
	.next {
	  right: 0;
	  border-radius: 3px 0 0 3px;
	}

	/* On hover, add a black background color with a little bit see-through */
	.prev:hover, .next:hover {
	  background-color: rgba(0,0,0,0.8);
	}

	.categories {
 		display: flex;
	    flex-direction: row;
	    justify-content: space-between;
	    padding: 1.5em;
	    margin-top: auto;
	}


	.fontwala {
		text-align: center;
	}


	#theatre-area{
		background-image: url('/assets/mandolin.jpg');
	    background-repeat: no-repeat;
	    height: 100%;
	    display: inline-block;
	    width: 100%;
	    background-size: cover;
    	background-position: 50% 50%;
	}

	#film-area{
		background-image: url('/assets/randomfoxlogo.png');
	    background-repeat: no-repeat;
	    height: 100%;
	    display: inline-block;
	    width: 100%;
	    background-size: cover;
    	background-position: 50% 50%;
	}

	#digital-area {
		background-image: url('/assets/digital.jpg');
		background-repeat: no-repeat;
	    height: 100%;
	    display: inline-block;
	    width: 100%;
	    background-size: cover;
    	background-position: 50% 50%;
	}


	/* Zoom in Keyframes */
	@-webkit-keyframes zoomin {
	 100%{  transform: scale(1.04);} 
	}
	@keyframes zoomin {
	 	 100%{  transform: scale(1.04);} 

	} 
	@-webkit-keyframes zoominMid {
	 100%{  transform: scale(1);} 
	}
	@keyframes zoominMid {
	 	 100%{  transform: scale(1);} 

	} 

	/*End of Zoom in Keyframes */

	/* Zoom out Keyframes */
	@-webkit-keyframes zoomout {
	  	 100%{  transform: scale(1.04);} 

	}
	@keyframes zoomout {
	  	 100%{  transform: scale(1.04);} 

	}/*End of Zoom out Keyframes */

	@keyframes fadein {
	    from { opacity: 0; }
	    to   { opacity: 1; }
	}

	/* Firefox < 16 */
	@-moz-keyframes fadein {
	    0% { opacity: 0; }
	    100%  { opacity: 1; }
	}

	/* Safari, Chrome and Opera > 12.1 */
	@-webkit-keyframes fadein {
	    0% { opacity: 0; }
	    100%  { opacity: 1; }
	}

	/* Internet Explorer */
	@-ms-keyframes fadein {
	   0% { opacity: 0; }
	    100%  { opacity: 1; }
	}

	/* Opera < 12.1 */
	@-o-keyframes fadein {
	    0% { opacity: 0; }
	    100%  { opacity: 1; }
	}
		
	.md .panel-content {
		margin-left: 4em;
		z-index: 13;
	}

	.md .panel-area li {
		position: absolute;
		width: 78.4%;
	}
	
	.md .button-areas {
		display: flex;
		position: relative;
	    top: -5.5em;
	    height: 48px;
	    margin-left: 1em;
	    width: 95.5%;
	}


</style> 
