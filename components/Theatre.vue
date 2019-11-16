<template>
	<div id="theatre-content">
	<span class="slicinItup"> 
        <h1>Theatre</h1>
    Here you can have a look at my work on stage, read blogs I've written about my experience with each show, check out gallery of photos and media based on shows and get an idea of my training and skill set.             <span id="theatre-download">Click to Download Printable Version</span> </span>


<!-- 	<ul class="twoviews">
		<li><input type="radio" name="twoview" v-model="showsView" value="resume"/>Resume View</li>
		<li><input type="radio" name="twoview" v-model="showsView" value="gallery"/>Gallery View</li>
	</ul>
 -->

		<div id="content-theatre">
            <section v-show="showsView === 'resume'">
                <ShowList v-bind:shows="shows"/>
            </section>

            
             <section v-show="showsView === 'gallery'">
                <ShowGallery v-bind:shows="shows"/>
            </section>  
		
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
                showsView: 'resume'
			} 
		}
	}
</script>
<style lang="scss">

.sm #content {
    flex-direction: column !important;
}

.md #grouped {
    width: 100% !important;
}

#theatre {

    &-content {
        .md & {
            align-content  : center;
        }

    }
    
    &-download {   
        color: coral;
        text-decoration: underline;
        font-size: .85em;
        cursor: pointer;
    }
}

header h1 {
    background: none;
}

input[type="radio"] {
    margin-right: 1em;
    vertical-align: baseline;
}

.slicinItup {
    font-size: 0.85em;
    padding: 1em;
    text-align: left;
    display: block;
    line-height: 1.95em;
    color: #3b323c;
    letter-spacing: 0.105em;
    text-transform: lowercase;
    background-color: white;
    margin-bottom: 1em;
    border-bottom: 1px solid darkslateblue;

    h1 { 
        text-transform: capitalize;
        margin: 0 0 1em 0;
        font-size: 1.5em;
        color: #19abdc;
        letter-spacing: .15em;
        font-weight: normal;

    }

}

.twoviews {
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 2em auto 0;
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

    .md & {
        font-size: 1em;
        flex-direction: row;
    }

}

#trainingSkills { 
    margin: 2em 5em;
}
	
.trainingList {
    line-height: 2em;
    margin-bottom: 2em;
    display: block;
    font-size: .8em;

    .sm &,
    .md & {
        text-align: left;
        font-size: .85em;
    }
}

.skills {
    margin-top: 2em;
}

.skillsList {
    line-height: 2em;
    margin-bottom: 2em;
    display: block;
    font-size: .8em;

    .sm &,
    .md & {
        text-align: left;
        font-size: .85em;
    }
}  

#trainingSkills h1,
.skills h1 {
    font-size: .85em;
    margin-left: 0;
    width: 95%;
    background-color: #7ed1eb47;
    padding: .25em 1em;
    line-height: 2em;

    .sm &,
    .md & {
        font-size: 1em;
    }
}

</style>