<template>
	<div id="shows">
		<section class="show-container">
			<div class="show-filter">
			<!-- <table class="show-area" align="center">
				<th v-for="column in headers">
					<div v-on:click="sortBy(column)">{{column}}</div>
				</th>
				
				<tr v-for="dataItem in myJson['Theatre']">
					<td>
						{{dataItem.name}}
					</td>
					<td>
						{{dataItem.type}}
					</td>
					<td>
						{{dataItem.role}}
					</td>
					<td>
						{{dataItem.director}}
					</td>
					<td>
						{{dataItem.company}}
					</td>
					<td>
						{{dataItem.year}}
					</td>
				</tr>
			</table> -->

			 
				<div class="show-content">
					<span class="show-instruction">click title to learn more about each show</span>
					 <v-expansion-panels accordion multiple>
					    <v-expansion-panel v-for="(entry,i) in myJson['Theatre']"
							    v-if="entry[sortKey] === showFilter || showFilter === 'All'"
							    :item="entry"
					     		:key="i">
					      <v-expansion-panel-header>
					      	<span class="show-header">
						      	<span class="show-name">{{entry.name}}</span> 
						      	<span class="show-details">
						      	<span class="show-role"> Role : {{entry.role}} </span><span class="show-year">{{entry.year}} </span><span class="show-location">{{entry.location}}</span></span>
						    </span>

					      </v-expansion-panel-header>
					      <v-expansion-panel-content>
					      	<div class="show-expanded"> 
						       <ul>
						       	<li>Type : {{entry.type}}</li>
						       	<li>Playwright : {{entry.playwright}}</li>
						       	<li>Director : {{entry.director}}</li>
						       	<li>Company : {{entry.company}}</li>
						       	<li class="show-expanded-blurb">{{entry.blurb}}</li>
						       </ul>
						       <div class="show-links"> 
						       		<span>Read blog</span>
						       		<span>Show Gallery</span> 
						       </div>
						   </div>
					      </v-expansion-panel-content>
					    </v-expansion-panel>
					  </v-expansion-panels>
		    	</div>

		    	<div class="show-side">
				<div class="word-cloud">
					<span>filter</span>
					<ul>
							<li
							  v-for="(entry, index) in showFilterList"
							  :item="entry"
							  :key="index"
							  @click="showFilter = entry;"
							  :class="{ showActive: entry == showFilter }"
							>
							  {{ entry }}
						</li>
					</ul>
				</div>


			<div id="skillset">
			 <div id="trainingSkills">
            <h1>TRAINING</h1>
            <ul class="trainingList">
               
                <li>Documentary Theatre and Teaching Artist Training with Ping Chong & Company. New York.</li>
                <li>Indian Classical Singing (Kirana Gharana), private coaching w/ Sandip Bhattacharjee. New York and India.</li>
                <li>On Camera Scene Study with Courtney Burr at Margie Haber Studio, Los Angeles. </li>
                <li>Film Acting Technique with Nancy Berwid at FirstTake Acting Studio, San Francisco. </li>
                <li>Musical Theatre Summer Conservatory w/ Marc Jacobs, Notre Dame De Namur University, Silicon Vallery.</li>
                <li>Voice/Singing for Musical Theatre, Private Coaching with Michael Pesce, New York City.</li>
                <li>Acting Shakespeare’s Verse, Private coaching with Deloss Brown, New York City. 
</li>
                <li>Classical Commedia D’ell Arte with Stanley Allan Sherman at Roving Classical Commedia, New York City.
</li>

            </ul>

            <h1>LABS / WORKSHOPS</h1>
            <ul class="trainingList">
            	<li>Participant @ Where Film &amp; Anthropology Intersect, Workshop on Documentary Filmmaking with Harjant Gill. New Delhi 2019</li>
            	<li>Participant @ <a href="https://www.tfiny.org/events/detail/immigration_co_lab_nyc" target="_blank">IMMIGRATION CO/LAB | NYC - Tribeca Film Institute</a>. New York City 2017</li>
            </ul>

            <h1>TALKS / PRESENTATIONS </h1>
            <ul class="trainingList">
            	<li><a href="https://www.docville.be/nl/film/webdox-40-user-engagement" target="_blank">Presenter @ WebDox Conference (User Engagement) Leuven, Belgium 2015</a></li>
            	<li><a href="http://www.sawcc.org/new-films-2015/" target="_blank">Presenter / Filmmaker @ South Asian Women's Creative New Films 2015</a></li>
            </ul>

            <h1 class="skills">SKILLS</h1>
            <ul class="trainingList">
                <li>Open Water Scuba Certification.</li>
                <li>Dialects/Accents : South East London, African American, Russian and French.</li>
                <li>Fluent (Speak, read, write and sing) in Hindi. Conversational Bengali and French.</li>
            </ul>

        </div>

    </div>










				
			</div>

		</div>

		</section>
	</div>
</template>
<script>
	import json from '/assets/json/theatre.json'

	export default {
		name: 'ShowList',
		props: {
			shows: {
				type: Array,
				required: true
			}
		},
		components: {
			
		},
		data() {
			return {
				headers: ['name','type','role','director','location','year'],
				myJson: json,
				sortKey: 'type',
				sortTag: 'tags',
			 	showFilterList: ["All","Play", "Play with Music", "Indian Theatre","Experimental Theatre", "Documentary Theatre", "Musical", "Ensemble", "Children's Theatre", "Staged Reading"],
			 	showFilter: "All"

			}
		},		
		computed: {
			
		},
		methods: {
             sortBy: function(sortKey) {
                            this.reverse = (this.sortKey == sortKey) ? ! this.reverse : false;
            }
   
			
		}
		
	}
	
</script>
<style lang="scss" scoped>

	table {
		font-size: .75em;
		margin-top: 2em;

		.sm & {
			display: none;
		}
	}

	th {
		text-align: left;
		font-size: 1.25em;
		height: 2em;
		border-bottom: 1px solid grey;
		padding-left: 2em;

		&:nth-child(6) {
			padding-left: 1.5em;
		}

		div {
			text-transform: capitalize;
		}

		.md & {
			font-size: 1em;
		}
	}

	td {
		border-bottom: 1px solid grey;
		padding-left: 2em;

		.md & {
			font-size: 1em;
		}
	}

	.show {
		&-container {
			margin: 0 auto;
		}

		&-instruction {
			font-size: 0.75em;
		    color: gray;
		    text-align: right;
		    width: 100%;
		    display: inline-block;
		    letter-spacing: .1em;
		    font-weight: lighter;
		    margin-bottom: 0.5em;
		}

		&-filter {
			display: flex;
			flex-direction : row;
			.sm & {
				flex-direction: column;
			}
		}

		&-content {
			width: 100%;
		}

		&-expanded {
			background-color: white;
			border: 1px solid lightgray;
			border-top: none;

			&-blurb {
			    font-size: 1.2em;
			    line-height: 1.5em;
			    padding: 1em 0 .5em;
			    color: black;
			}
		}

		&-header {
			display: flex;
			flex-direction: column;
		}

		&-name {
			font-size: 1.25em;
			font-weight: 300;
			color: black;
			word-break: break-all;

			.sm & {
				display: block;
				font-size: 2 em;
				text-align:left;
			}
		}

		&-details {
			display: flex;
		}
		
		&-year {
			font-size: .25em;
			padding: 1em !important;
			margin: 0 !important;
			color: deepskyblue;
			font-weight: bold;

			.sm & {
				margin: 1em !important;
			}
		}


		&-year, 
		&-role {
		    padding: 1em 0;
		    margin: 0 1em 0 0;
		    text-transform: uppercase;
    		font-size: .05em;
    		letter-spacing: .05em;

    		.sm & {
    			display: block;
    			margin: 1em 0;
    		}
		}

		&-links {
			text-transform: uppercase;
		    font-size: .5em;
		    display: flex;
		    width: 100%;
		    justify-content: flex-end;
		    flex-direction: row;

		    span {
		    	padding: 1em 2em;
			    margin: 0 2em 2em 0;
			    background: whitesmoke;
			    color: #084086;
			    cursor: pointer;
			    font-weight: bolder;
			    border-radius: 7px;
			    letter-spacing: .15em;
			    border: 1px solid coral;
		
				&:nth-child(2) {
		    		padding: 1em 0.5em;
		    	}

		    }
		}

		&-location {
			font-size: .25em;
			text-transform: uppercase;
			color: #ff4d0b;
			padding: 1em;
			text-align: right;
			background: #fff8dcbd;
    		margin: 0 1em;
			
			.sm & {
				margin: 1em 0;
				padding: 1em 0;
			}
		}

		&-side {
			  display: flex;
    		  flex-direction: column;
		}

	}

	.word-cloud {
		display: flex;
		margin-top: 2em;
		flex-direction: column;
		width: 70%;
    	margin: 0 auto;
		

		span {
			font-weight: bolder;
		    letter-spacing: .1em;
		    color: #5352a9;
		    font-size: .85em;
		    margin-left: 2em;
		    margin-top: 1em;
		    text-align: center;
		}
		ul {
		    padding: 0.5em 1em;
		    text-align: center;
		    font-size: 0.75em;
			display: flex;
		    justify-content: center;
		    flex-wrap: wrap;
		    flex-direction: row;

			li {

				background-color: #d3d8d961;
    			color: #818db5;
				font-weight: lighter;
				padding: .5em 1em;
				text-align: center;
				font-size: .85em;
    			border: 2px solid #e9ecff;
				margin: .25em;
				cursor: pointer;	
				letter-spacing: .1em;
				text-transform: lowercase;	

				&:nth-child(1) {
					font-weight: bolder;
					letter-spacing: .25em;
				}		     
			}

		}
	}

	.v-expansion-panel {
		margin-bottom: .5em;

		button {
			padding: 1em 1.5em;
		    border-radius: 4px;
		    background-color: floralwhite;
		    font-size:.8em;
		    color: #084086;
		    text-align: justify;
		    width: 100%;
		    font-weight: light;
		    display: flex;
		    cursor: pointer;
			justify-content: space-between;

			.sm &,
		    .md & {
		    	flex-direction: column;
		    	text-align: center;
		    	flex-wrap: wrap;
		    }
		}

		ul {
			font-size: .75em;
		    padding: .5em 1.5em;
		    color: darkblue;
		    line-height: 1.5em;
		    background-color: white;
		    font-weight: lighter;
		    letter-spacing: .05em;
		}
	}

	.showActive {
		border: 2px solid #ff4d0b !important;
	}
	
</style>