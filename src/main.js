import './style.scss';
import Vue from 'vue';
import genres from './util/genres';

import MovieList from './components/MovieList.vue';
import MovieFilter from './components/MovieFilter.vue';

new Vue({
    el: '#app',
    methods: {
        checkFilter: function(category, title, checked) {
            if(checked) {
                this[category].push(title);
            } else {
                let index = this[category].indexOf(title);
                if (index > -1) {
                    this[category].splice(index, 1);
                }
            }
        }
    },
    data: {
        genre: [],
        time: []
    },
    components: {
        MovieList,
        MovieFilter
    }
});