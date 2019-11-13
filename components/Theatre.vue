<template>
	<div>
	<h1>{{msg}}</h1>
	<span class="slicinItup"> The world says, "Theatre is dying"... Two thousand years or so and it still seems to be around. Oh well, must be an incredibly slow death.  As for the rest of us who can't help loving it to pieces, performing, writing, putting up shows, doing whatever it takes, to revel in the magic, that is theatre. </span>
    <hr/>

	<ul class="twoviews">
		<li><input type="radio" name="twoview" v-model="showsView" value="resume"/>Resume View</li>
		<li><input type="radio" name="twoview" v-model="showsView" value="gallery"/>Gallery View</li>
	</ul>


		<div id="content-theatre">
            <section v-show="showsView === 'resume'">
                <ShowList v-bind:shows="shows"/>
            </section>

            
             <section v-show="showsView === 'gallery'">
                <ShowGallery v-bind:shows="shows"/>
            </section>  
		
        </div>

        <div id="trainingSkills">
            <h1>TRAINING / LABS / WORKSHOPS</h1>
            <ul class="trainingList">
                <li>Where Film &amp; Anthropology Intersect, Workshop on Documentary Filmmaking with Harjant Gill. New Delhi</li>
                <li>Documentary Theatre and Teaching Artist Training with Ping Chong & Company. New York.</li>
                <li>Singing in Hindustani Classical, private coaching with Sandip Bhattacharjee. New York and India.</li>
                <li>On Camera Scene Study with Courtney Burr at Margie Haber Studio, Los Angeles. </li>
                <li>Film Acting Technique with Nancy Berwid at FirstTake Acting Studio, San Francisco. </li>
                <li>Musical Theatre Summer Conservatory with Marc Jacobs at Notre Dame De Namur University, Silicon Vallery.</li>
                <li>Voice/Singing for Musical Theatre, Private Coaching with Michael Pesce, New York City.</li>
                <li>Acting Shakespeare’s Verse, Private coaching with Deloss Brown, New York City. 
</li>
                <li>Classical Commedia D’ell Arte with Stanley Allan Sherman at Roving Classical Commedia, New York City.
</li>
<li>Hindustani Classical Music, private coaching with Sandip Bhattacharjee, New York City. 
</li>
            </ul>
            <hr/>

            <h1 class="skills">SKILLS</h1>
            <ul class="skillsList">
                <li>Open Water Scuba Certification.</li>
                <li>Dialects/Accents : South East London, African American, Russian and French.</li>
                <li>Fluent (Speak, read, write and sing) in Hindi. Conversational Bengali and French.</li>
            </ul>

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
                showsView: 'resume',
				shows : [
				  {fileName:'moonOwl.jpg'},{fileName:'sundayswithChitraAndChaitali.jpg'}
				]
			} 
		}
	}
</script>
<style lang="scss" scoped>

body {
	background: blue;
}

header h1 {
    background: none;
}

input[type="radio"] {
    margin-right: 1em;
    vertical-align: baseline;
}

.slicinItup {
    font-size: 1em;
    margin: 2em 5em;
    text-align: center;
    display: block;
    line-height: 1.95em;
    color: #3b323c;
    font-family: 'Palatino';
    letter-spacing: .105em;

}

.twoviews {
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 2em auto 0;
    font-family: 'Palatino';
    width: 50%;

    li {
        color: #e67a83;
        padding: 1em 2em;
        text-shadow: #c3e3fd 0 1px 1px 1px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1em;
        font-weight: bolder; 
    }

}

#trainingSkills { 
    font-family: 'Palatino';
    margin: 2em 5em;
}
	
.trainingList {
    line-height: 2em;
    margin-bottom: 2em;
    display: block;
}

.skills {
    margin-top: 2em;
}

.skillsList {
    line-height: 2em;
    margin-bottom: 2em;
    display: block;
}  

#trainingSkills h1,
.skills h1 {
    font-size: 1.25em;
    margin-left: 0;
    width: 95%;
    background-color: #f6f17163;
    padding: .25em 1em;
    line-height: 2em;
}

</style>