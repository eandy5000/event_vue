    <template>
            <div id="movie-list">
            Movie List 
                <div v-for="movie in filteredMovies" class="movie">
                    {{ movie.title }}
                </div>
            </div>
    </template>
    <script>
          import genres from '../util/genres';
          export default {
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
        }
    </script>