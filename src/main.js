import './style.scss';
import Vue from 'vue';
import genres from './util/genres';

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
            <h2>Filter Results</h2>
                <div class="filter-group">  
                    <check-filter v-for="genre in genres" v-bind:title="genre"></check-filter>
                </div>
            </div>
            `,
            components: {
                'check-filter': {
                    template: `
                    <div 
                        v-bind:class="{'check-filter': true, 'active': checked }" 
                        v-on:click="checked = !checked"
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
                    }
                }
            },
            data() {
                return { genres };
            }
        }
    }
});