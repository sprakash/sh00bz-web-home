<template>
	<div>
		<div class="longbio">
		Welcome. My work involves projects in area of stage, film and web technologies where I explore my creative self as a performer, writer and producer.   Please feel free to reach out to me (click <a href="/#/connect">here</a>). 

		I believe human beings must dream big and challenge themselves to break limitations imposed by themselves or others. I aspire next to create my most ambitious work yet : Fontwala inspired by the story of my uncle’s life as an artist, entreprenuer and visionary of Indian letterforms. Read all about Fontwala here.  
		<span class="quote">“How we spend our days is how we spend our lives.”  - Annie Dillard </span>

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
<style>

	.bio .longbio {
	  text-align: justify;
	  padding:0 1.5em;
	}

	.longbio,
	.fontwala {
		font-family: 'Palatino';
	    font-size: .93em;
	    padding: 0 3em 0;
	    word-spacing: .2em;
	    line-height: 2em;
	}

	.quote {
		font-family: Palatino;
	    font-style: italic;
	    text-align: right;
	    font-size: 1em;
	    font-weight: bold;
	    display: block;
	    background-color: #fffb0080;
	    padding:0 2em;
	}
	
</style> 