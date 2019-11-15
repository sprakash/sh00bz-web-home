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
					<span class="show-instruction">expand to learn more about each show</span>
					 <v-expansion-panels accordion multiple>
					    <v-expansion-panel v-for="(entry,i) in myJson['Theatre']"
							    v-if="entry[sortKey] === showFilter || showFilter === 'All'"
							    :item="entry"
					     		:key="i">
					      <v-expansion-panel-header>{{entry.name}} : {{entry.type}}, {{entry.year}} | Role : {{entry.role}} </v-expansion-panel-header>
					      <v-expansion-panel-content>
					      	<div class="show-expanded"> 
						       <ul>
						       	<li>{{entry.name}}</li>
						       	<li>Type : {{entry.type}}</li>
						       	<li>Role : {{entry.role}}</li>
						       	<li>Director : {{entry.director}}</li>
						       	<li>Company : {{entry.company}}</li>
						       	<li>Year : {{entry.year}}</li>
						       </ul>
						       <div> 
						       		<span>Read blog</span>
						       		<span>Show Gallery</span> 
						       </div>
						   </div>
					      </v-expansion-panel-content>
					    </v-expansion-panel>
					  </v-expansion-panels>
		    	</div>

		    	<div>
				<div class="word-cloud">
					<span>tag cloud</span>
					<ul>
							<li
							  v-for="(entry, index) in showFilterList"
							  :item="entry"
							  :key="index"
							  @click="showFilter = entry;"
							  :class="{ active: entry == showFilter }"
							>
							  {{ entry }}
						</li>
						<!-- <li>play</li>
						<li>play with music</li>
						<li>devised / experimental</li>
						<li>indian theatre</li>
						<li>nautanki</li>
						<li>non-verbal</li>
						<li>documentary theatre</li>
						<li>musical reading</li>
						<li>workshop</li>
						<li>musical</li>
						<li>ensemble</li>
						<li>trip-hop musical</li>
						<li>children's theatre</li>
						<li>tour</li> -->
					</ul>
					<span>Download Printable Version</span>
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
		    color: #7774a5;
		    text-align: center;
		    width: 100%;
		    display: inline-block;
		    font-weight: lighter;
		    text-decoration: underline;
		    margin-bottom: 1.5em;
		}

		&-filter {
			display: flex;
			flex-direction : row;
			.sm & {
				flex-direction: column-reverse;
			}
		}

		&-content {
			width: 100%;
		}

		&-expanded {
			background-color: white;
		}

	}

	.word-cloud {
		display: flex;
		margin-top: 2em;
		flex-direction: column;
		

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
		    width: 100%;
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
					color: coral;
				}		     
			}

		}
	}

	.v-expansion-panel {

		button {
			padding: .5em 5em;
		    border-radius: 4px;
		    background-color: whitesmoke;
		    border-color: lightgrey;
		    font-size:.8em;
		    color: #084086;
		    margin: .25em 0;
		    text-align: justify;
		    width: 100%;
		    font-weight: light;
		}

		ul {
			font-size: .75em;
		    padding: 2em 6em;
		    color: #a60283;
		    line-height: 1.5em;
		    background-color: white;
		    font-weight: lighter;

		    li:nth-child(1) {
		    	font-size: 1.5em;
			    font-weight: lighter;
			    line-height: 2em;
			    text-decoration: underline;
			    color: #4d92b3;
		    }
		}
	}

	.darr {
	}
	
</style>