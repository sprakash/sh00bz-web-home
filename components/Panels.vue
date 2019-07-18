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
					</div>
				</li>
			</ul>

		</section>
		<section class="bio">
		<div id="announcements">
			<Announcements/>
		</div>
		<div class="longbio">
		Welcome. Here is a look at my work which involves stage, film and the web. I continue to explore my creative self as a performer, writer and producer. I aspire to work on projects that combine the crafts of stage and film with web technologies.  Please feel free to reach out to me (click here). 

		I think it’s important for us as human beings to continue to aspire and to dream. I aspire next to create my most ambitious work yet : Fontwala inspired by the story of my uncle’s life as an artist, entreprenuer and visionary of Indian letterforms. Read all about Fontwala here.  
	
		</div>

		 <div class="quote">“How we spend our days is how we spend our lives.”  - Annie Dillard </div>

		</section>
	</div>
	
</template>
<script>
	import Announcements from './Announcements'
	export default {
		name: 'Panels',
		props: {
			panels: {
				type: Array,
				required: true
			}
		},
		components: {
			Announcements
		},
		data() {
			return {
				msg: 'Panels'
			};
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

	.categories {
 		display: flex;
	    flex-direction: row;
	    justify-content: space-between;
	    padding: 1.5em;
	    margin-top: auto;
	}

	.bio {
		position: absolute;
	}

	.bio .longbio {
	  text-align: justify;
	  line-height: 2em;
	  padding:.5em 2em;
	}

	.longbio,
	.fontwala {
		font-family: Helvetica;
	    font-size: .85em;
	    padding: 1.5em 3em 0;
	    word-spacing: .2em;
	}

	.fontwala {
		text-align: center;
	}

	.quote {
		font-family: Palatino;
	    font-style: italic;
	    text-align: right;
	    display: block;
	    font-size: 1em;
	    font-weight: bold;
	    margin-bottom: 1em;
	    padding: .5em 2em;
	}

	#theatre-area{
		background-image: url('/assets/mandolin.jpg');
	    background-repeat: no-repeat;
	    height: 100%;
	    display: inline-block;
	    width: 100%;
	    background-size: cover;
    	background-position: -140px 0;
	}

	#film-area{
		background-image: url('/assets/randomfoxlogo.png');
	    background-repeat: no-repeat;
	    height: 100%;
	    display: inline-block;
	    width: 100%;
	    background-size: cover;
    	background-position: -5px 0;
	}

	#digital-area {
		background-image: url('/assets/digital.jpg');
		background-repeat: no-repeat;
	    height: 100%;
	    display: inline-block;
	    width: 100%;
	    background-size: cover;
    	background-position: 0 -134px;
	}

	#announcements {
		display: block;
	    text-align: center;
	    position: relative;
		background-color: rgb(140, 201, 216, .9);	    
		width: 85%;
	    margin: 0 auto;
		top: -15px;
	}


	/* Zoom in Keyframes */
	@-webkit-keyframes zoomin {
	 100%{  transform: scale(1.04);} 
	}
	@keyframes zoomin {
	 	 100%{  transform: scale(1.04);} 

	} /*End of Zoom in Keyframes */

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
		
</style> 
