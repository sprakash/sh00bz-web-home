<template>
	<div>
		<div class="longbio">
		<span>Welcome to my website. Here you can learn about my work on stage, film and with web technologies. I explore my creative self as a performer, writer and producer.   Please feel free to reach out to me. 

		I believe human beings must dream big and challenge themselves to break limitations imposed by themselves or others. I aspire next to create my most ambitious work yet : Fontwala inspired by the story of my uncle’s life as an artist, entreprenuer and visionary of Indian letterforms. Read all about Fontwala here.</span>  
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
	#bio {
		margin: 0 2em;
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

    .dwlres {
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
	

	.longbio,
	.fontwala {
		font-family: 'Palatino';
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