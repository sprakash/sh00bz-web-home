<template>
	<div>
	<header>
						<h1>Shubhra Prakash</h1>
						<Navigation/>
					</header>
<section class="slicinItup" id="film-content"> 
<section id="film-title">
        <h1>Film</h1>
        <div id="film-tag">
        <a href="http://www.randomfoxproductions.com" target="_blank"><img class="foxlogo" src="/assets/fake/randomfoxlogo.png"/></a>
        <span>
Co-Founded a production company <a href="http://www.randomfoxproductions.com" target="_blank">(Random Fox Productions)</a> of diverse filmmakers, writers and actors to create short film and interactive content. An experiment to create socially aware content and address issues such as, racism and gender discrimination. 
<hr/>

</span>
</div>
</section>
	<section id="films">
		<div>
			<h2>Actor &amp; Co-Producer</h2>
			<h3>Vanilla</h3>
			<img src="/assets/fake/vanilla.jpg"/>
			<div class="descript">
				Stella is a baker who has been running her business with a recipe for a delicious vanilla donut. Will Stella be able to accept other bakers who arrive with new recipes and flavors ? We conceptualized, shot and edited 'Vanilla' in 72 hours as part of Asian American Film Lab's 72 hr film shootout in New York. We were placed in Top Ten picks and Random Fox took home a Screenwriting excellence award.  
			</div>

		</div>
		<div>
			<h2>Director &amp; Co-Producer</h2>
			<h3>Funny Faces</h3>
			<img src="/assets/fake/funnyfaces.png"/>
			<div class="descript">
				Two female comedians have been formed into a team. The establishment has laid down the rules, only one of the two is allowed to face the audience and perform the jokes, the other must work behind the scenes. Together they must challenge both the establishment and their own beliefs on talent, beauty and being an artist. Funny Faces was a result of a 72 hour film shootout competition, a worldwide contest that is conducted annually by Asian American Film Lab in New York City, where the theme was “Two Faces”. Funny Faces placed in the top ten.


			Invited to speak at a <a href="http://www.sawcc.org/new-films-2015/">panel organized by South Asian Women's Creative Collective (SAWCC) about filmmaking as a south asian female</a> about filmmaking as a south asian female. Funny Faces was a finalist in their film competition.


			</div>

		</div>
		<div>
			<h2>Writer, Director &amp; Producer</h2>
			<h3>Three Dates</h3>
			<img src="/assets/fake/threedates.jpg"/>
			<div class="descript">
				My first short “Three Dates” was about an ethnically ambiguous man facing judgement from his dates when they discover his true ethnicity. I used comedy to point at possible stereotypes attached to particular ethnicities. Three Dates, was screened at the 2013 New York Indian Film Festival. This short film led to the creation of Random Fox Productions.
			</div>
		</div>
	</section>
	<hr/>
	<section id="miscell">
		<div>
			<h2>Subtitles &amp; Translations (Hindi to English)</h2>
			<h3>Karma Killings on Netflix</h3>
			<div class="descript"></div>
		</div>
		<div>
			<h2>Transcription</h2>
			<h3>Vamp</h3>
			<div class="descript"></div>
		</div>
	</section>
</section>
		</div>
</template>
<script>
	import Navigation from './Navigation'
	export default {
		name: 'Film',
		components: {
			Navigation,
        },
		created() {
            this.msg = this.$route.params.isSlideshow;
        },
		data() {
			return {
				msg: 'Welcome to the film section'
			}
		}
	}
</script>
<style lang="scss" scoped>

#app {
	width: 100%;
}

.slicinItup {
	padding-top: 5em;
}
	
a {
	color: orange !important; 
	font-size: 1em;
	font-weight: bolder;
}

h2 {
	font-size: 1.25em;
	color: #500606;
	text-transform: capitalize;
}

h3 {
	color: #64abf3;
}

#films {
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 0 0 2em;

	 div {
	 	width: 33%;
	 	text-align: center;

	 	 img {
	 	 	width: 95%;
	 	 }

	 	 .descript {
	 	 	width: 100%;
	 	 	text-align: justify;
	 	 	text-transform: none;
	 	 	padding: 0 1em;
	 	 	display: table-cell;
	 	 }
	 }


}

#film {
	&-tag {

		display: flex;

		a {
			width: 30%;
		}

		img {
			width: 100%;
		}
		span {
			padding: .5em 2em;
		    text-align: justify;
		    font-size: 1.25em;

    		hr {
    			margin: 2em 0;
    		}
		}
	}
}

</style>