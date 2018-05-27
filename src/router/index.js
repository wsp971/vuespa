import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/Helloworld';

import Books from '../components/Books';

import Movie from '../components/Movie';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/books',
			name: 'Books',
			component: Books
		},{
		
			path: '/',
			name: 'Movie',
			component: Movie,
			alias: '/movie'
		}
	]
})
