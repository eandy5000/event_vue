import './style.scss';
import Vue from 'vue';

new Vue({
    el: '#app',
    components: {
        'movie-list': {
            template: `
            <div id="movie-list">
            Movie List 
                <div v-for="movie in movies" class="movie">
                    {{ movie.title }}
                </div>
            </div>`,
            data() {
               return {
                 movies: [
                    {title: 'one'},
                    {title: 'two'},
                    {title: 'three'},
                    {title: 'four'}
                ]
               }
            }
        },
        'movie-filter': {
            template: `
            <div id="movie-filter">
            Movie filter
            </div>
            `,
            components: {
                template: `
                
                `
            }
        }
    }
});