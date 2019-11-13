<template>
	<div>
		<div class="longbio">
		Welcome. My work involves stage, film and web technologies where I explore my creative self as a performer, writer and producer.   Please feel free to reach out to me. 

		I believe human beings must dream big and challenge themselves to break limitations imposed by themselves or others. I aspire next to create my most ambitious work yet : Fontwala inspired by the story of my uncle’s life as an artist, entreprenuer and visionary of Indian letterforms. Read all about Fontwala here.  
		<span class="quote">“How we spend our days is how we spend our lives.”  - Annie Dillard </span>
	<span class="dwlres">Download Resume</span>
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

    .dwlres {
		text-align:left;
		font-size:.85em;
		bottom:0;
		display: block;
		margin-top: 2em;

		.sm & {
			text-align: center;
			width: 100%;
		}
	}
	

	.longbio,
	.fontwala {
		font-family: 'Palatino';
	    font-size: .93em;
	    word-spacing: .2em;
	    line-height: 2em;
	    margin: 1em 2em;
	}

	.quote {
		font-family: Palatino;
	    font-style: italic;
	    text-align: right;
	    font-size: 1em;
	    font-weight: bold;
	    display: block;
	    background-color: #e67a8329;
	    padding:.5em 2em;
	    margin-top: .5em;

	    .sm & {
			text-align: center;
			font-size: .85em;
    		margin-top: .85em;
	    }
	}

	
</style> 