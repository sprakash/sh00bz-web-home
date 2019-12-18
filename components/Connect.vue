<template>
	<div>
	<header>
       <h1>Shubhra Prakash</h1>
	   <Navigation/>
    </header>
    <section id="connect">
		<h1>Connect</h1>
		<section id="connect-sections">
		<section>
				<figure>
					<div class="contact-img"></div>
					<figcaption>Photo from Broadway style Singing Recital </br>at Musical Theatre Summer Conservatory at Notre DaNamur University, California.</figcaption>
				</figure>
				<ul>
					<li>Email me at <a class="email-link" href="mailto:prakashnitza@gmail.com">prakashnitza@gmail.com</a> </li>
					<li>Social Media : 
							<ul class="horiz-list">
								<li>Facebook</li>
								<li>Twitter</li>
								<li>Instagram</li>
								<li>LinkedIn</li>
							</ul>
					</li>
					<li>Download
							<ul>
								<li>Performer (Stage and Film) Resume</li>
								<li>Producer Resume</li>
								<li>Front End Dev Resume</li>
							</ul>

					</li>
				</ul>


			</section>
			<section class="connect-lower">
					<div class="space-fill"></div>
					<article>The site has been created by yours truly using Vue framework including the blog which has been created using Vue as well. Code can be looked at </article>
					<div><h3>references</h3>
						<ul>
							<li>https://dev.to/alexmourer/click-event-filtering-on-a-json-rendered-list-in-vuejs-3kpn</li>
						</ul>
					</div>
			</section>
		</section>
	</section>
	</div>
</template>
<script>
	import Navigation from './Navigation'
	export default {
		name: 'Connect',
		components: {
			Navigation
		},
		created() {
            this.msg = this.$route.params.isSlideshow;
        },
		data() {
			return {
				msg: 'Welcome to the CONNECT section'
			}
		}
	}
</script>
<style lang="scss" scoped>

section {
	width:100%;
	display: inline-flex;
	align-items: center;
	justify-content: space-around;
	font-family: Palatino;
}

#connect {
	display: block;
	margin-top: 5em;
	padding: 0 1em;

	 h1 { 
		text-transform: capitalize;
	    margin: 0 0 1em 0;
	    font-size: 1.5em;
	    color: #f78a1b;
	    letter-spacing: 0.15em;
	    font-weight: normal;
	 }

	 &-sections {
	 	display: flex;
	 	flex-direction: column;
	 }
}


figure {
	margin: 0;
}

figcaption {
	font-size: .7em;
	font-weight: lighter;
	font-style: italic;
	margin: 1em 0;
	color: #380ed5;
	text-align:center;
	line-height: 1.4em;
}

article {
	font-size: .7em;
	font-weight: bold;
	display: flex;
}

li {
	line-height: 2em;
}

.divide {
	width: 30%;
	margin-bottom: 2em;
}

.contact-img {
	background-image: url(/assets/piano.jpg);
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 262px;
    display:inline-block;
}

.connect-lower {
	display: flex;
	flex-direction:  column
}

.email-link {
	color: #d058c0;
}

.horiz-list{
	display: flex;
	flex-direction: row;

	li {
		padding: 0 .5em;
	}
}

.space-fill {
	height: 10vh;
	width:100%;
}

	
</style>