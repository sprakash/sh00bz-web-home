/*import Vue from 'vue';
import Router from './router'
import App from './App';


const vue = new Vue ({
	el : '#app',
	router: Router,
	template : h => h(App)

});*/


import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import Digital from './components/Digital'
import Theatre from './components/Theatre'
import Film from './components/Film'
import Code from './components/Code'
import Slideshow from './components/Slideshow'
import Blog from './components/Blog'
import Connect from './components/Connect'
import Landing from './components/Landing'



Vue.use(Router)

const routes= [
    {
      path: '/digital',
      name: 'Digital',
      component: Digital,
      props: true
    },
     {
      path: '/theatre',
      name: 'Theatre',
      component: Theatre,
      props: true
    },
     {
      path: '/film',
      name: 'Film',
      component: Film,
      props: true
    },
    {
      path: '/intersect',
      name: 'Intersect',
      component: Code,
      props: false
    },
    {
    	path: '/gallery',
    	name: 'Gallery',
    	component: Slideshow,
     	props: true
    },
     {
    	path: '/blog',
    	name: 'Blog',
    	component: Blog,
     	props: false
    },
     {
    	path: '/connect',
    	name: 'Connect',
    	component: Connect,
     	props: false
    },
    {
    	path: '/',
    	name: 'Landing',
    	component: Landing,
    	props: false
    }
  ]

 const router = new  Router({
 	routes
 });


new Vue({
        el: '#app',
        router: router,
        components: { App },
        render: h => h(App),  
    })

// new Vue(App).$mount('#app')