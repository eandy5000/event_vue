import './style.scss';
import Vue from 'vue';
import genres from './util/genres';

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
        'movie-list': {
            template: `
            <div id="movie-list">
            Movie List 
                <div v-for="movie in filteredMovies" class="movie">
                    {{ movie.title }}
                </div>
            </div>`,
            props: ['genre', 'time'],
            methods: {
                movieGenreFilter(movie) {
                    if(!this.genre.length) {
                        return true;
                    } else {
                        return this.genre.find(foo => {return movie.genre === foo});
                    }
                }
            },
            computed: {
                filteredMovies() {
                        return this.movies.filter(this.movieGenreFilter);
                    }
            },
            data() {
               return {
                 movies: [
                    {title: 'Die Hard', genre: genres.ACTION},
                    {title: 'Home Alone', genre: genres.ADVENTURE},
                    {title: 'Three Men and a Baby', genre: genres.COMEDY},
                    {title: 'Wall-E', genre: genres.FAMILY}
                ]
               }
            }
        },

        'movie-filter': {
            template: `
            <div id="movie-filter">
            <h2>Filter Results</h2>
                <div class="filter-group">  
                    <check-filter 
                        v-for="genre in genres" 
                        v-bind:title="genre"
                        v-on:check-filter="checkFilter"
                    >
                    </check-filter>
                </div>
            </div>
            `,
            components: {
                'check-filter': {
                    template: `
                    <div 
                        v-bind:class="{'check-filter': true, 'active': checked }" 
                        v-on:click="checkFilter"
                    >
                        <span class="checkbox"></span>
                        <span class="check-filter-title">{{title}}</span>
                    </div>
                    `,
                    props: ['title'],
                    data() {
                        return {
                            checked: false
                        };
                    },
                    methods: {
                        checkFilter: function() {
                            this.checked = !this.checked;
                            this.$emit('check-filter', 'genre', this.title, this.checked);
                        }
                    }
                }
            },

            data() {
                return { genres };
            },
            methods: {
                checkFilter: function(category, title, checked) {
                    this.$emit('check-filter',category, title, checked);
                }
            }
        }
    }
});