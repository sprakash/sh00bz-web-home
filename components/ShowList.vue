<template>
	<div id="shows">
		<section class="show-container">
			<table class="show-area" align="center">
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
			</table>


		<div>
			 <v-expansion-panels accordion multiple>
			    <v-expansion-panel v-for="(panelItem,i) in myJson['Theatre']" :key="i">
			      <v-expansion-panel-header>{{panelItem.role}} in {{panelItem.name}} | {{panelItem.type}} | {{panelItem.year}}</v-expansion-panel-header>
			      <v-expansion-panel-content>
			       <ul>
			       	<li>Type : {{panelItem.type}}</li>
			       	<li>Role : {{panelItem.role}}</li>
			       	<li>Director : {{panelItem.director}}</li>
			       	<li>Company : {{panelItem.company}}</li>
			       	<li>Year : {{panelItem.year}}</li>
			       </ul>
			      </v-expansion-panel-content>
			    </v-expansion-panel>
			  </v-expansion-panels>
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
				sortKey: 'name'
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

	.show-container {
		margin: 0 auto;
	}
	
</style>