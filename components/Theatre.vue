<template>
	<div>
	<h1>{{msg}}</h1>
	<span class="slicinItup"> The world says, "Oh theatre! it's a dying art form."... Hmmm, two thousand years or more, must be an incredibly slow death.  For the rest of us, who can't help it, I suppose we will continue loving it to pieces, keep performing, writing, putting up shows, doing whatever it takes, to revel in the magic, that is theatre. </span>

	<ul>
		<li>Pick Resume View if you like nice ordered text.</li>
		<li>Pick Gallery View if you want images.</li>
	</ul>
	<a href="#">Training & Skills</a>

		<div id="content-theatre">
            <section>
                <ShowList v-bind:shows="shows"/>
            </section>
            <section>
                <ShowGallery v-bind:shows="shows"/>
            </section>
		</div>

        <div id="trainingSkills">
            TRAINING 
Documentary Theatre and Teaching arts training with Ping Chong and Company, New York City.
On camera scene study with Courtney Burr, Margie Haber Studio, Los Angeles.
Film Acting Technique, Nancy Berwid, First take Acting Studio, San Francisco.
Musical Theatre Summer Conservatory with Marc Jacobs at Notre Dame De Namur University, Bay Area. 
Voice for Musical Theatre Singing, private coaching with Michael Pesce, New York City. 
Acting Shakespeare’s Verse, private coaching with Deloss Brown, New York City. 
Classical Commedia D’ell Arte with Stanley Allan Sherman at Roving Classical Commedia, New York City.
Hindustani Classical Music, private coaching with Sandip Bhattacharjee, New York City. 

SKILLS 
Open water scuba certification 
Dialects/Accents : South East London, African American, Russian, French.
Fluent (Speak, read, write and sing) in Hindi. Conversational Bengali and French.  


        </div>

		<header>
						<h1>Shubhra Prakash</h1>
						<Navigation/>
					</header>
	</div>


</template>
<script>
	import Navigation from './Navigation'
    import ShowList from './ShowList'
    import ShowGallery from './ShowGallery'
	export default {
		name: 'Theatre',
		components: {
			Navigation,
            ShowList,
            ShowGallery
		},
		created() {
            this.msg = this.$route.params.isSlideshow;
        },
		data (){
			return {
				shows : [
				  { title: "Theatre", id:"theatre-area", prev: "digital-prev", next: "film-next", content: "I am the most alive on stage, have a look at the shows I've acted in, the work I've created for stage and what lies ahead for me as a theatre maker. "},
				  { title: "Film", id:"film-area", prev: "theatre-prev", next: "digital-next", content: "Have a look at the short films I have been a part of as a creator, producer and performer."}, 
				  { title: "Digital", id:"digital-area", prev: "film-prev", next: "theatre-next", content: "an A/R comic book or an interactive film, here is work that lies at the intersection of performance and tech."}
				], 
			} 
		}
	}
</script>
<style scoped>
body {
	background: blue;
}

	
</style>