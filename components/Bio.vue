<template>
	<div>
		<div class="longbio">
		<span>Welcome to my website. Here you can learn about my work on stage, film and digital medium. I explore my creative self as a performer, writer and producer.   Please feel free to reach out to me. 

		I believe human beings must dream big and challenge themselves to break limitations imposed by themselves or others. I aspire next to create my most ambitious work yet : Fontwala inspired by the story of my uncle’s life as an artist, entreprenuer and visionary of Indian letterforms. Read all about Fontwala <a href="http://sprakash.github.io/portfolio/fontwala.html" target="_blank">here</a>.</span>  
		<span class="quote">“How we spend our days is how we spend our lives.”  - Annie Dillard </span>
	    <section id="bio-action"><span>Download Resume</span> <span>Subscribe to Blog</span></section>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'Bio',
		components: {
		},
		data() {
			return {
				msg: 'Bio around yo'
			};
		}
	}
</script>
<style lang="scss">
	#bio {
		 	margin: 0 2em;
    		display: flex;
    		flex-direction: column;

		&-action { 
			display: flex;
			width: 25%;
			justify-content: space-between;

			 span {
			 	text-align:left;
				font-size:.85em;
				bottom:0;
				display: block;
				margin: 1em 0 0 .15em;

				.sm & {
					text-align: center;
					width: 100%;
				}
			 }
		}
	}

	.bio .longbio {
	  text-align: justify;
	  padding:1.5em 0 0;
	}
	
	.longbio {
		 display: flex;
		 flex-direction: column;
		 flex-flow: column;

		 .sm & {
		 	font-size: .85em;
			line-height: 1.5em;
		 }
	}


	.longbio,
	.fontwala {
		font-family: 'Helvetica';
	    font-size: .93em;
	    word-spacing: .2em;
	    line-height: 2em;
	    margin: .5em;
	}

	.quote {
		font-family: Palatino;
	    font-style: italic;
	    text-align: right;
	    font-size: 1em;
	    font-weight: bold;
	    display: block;
	    background-color: #fff0f580;
	    margin: .5em 1em 0 0;
	    border:1px solid;
	    padding: 0 1em;
	
	    .sm & {
			text-align: center;
			font-size: .85em;
    		margin-top: .85em;
	    }
	}

	
</style> 