
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('сколько фильмов вы посмотрели', '');
    
        while(personalMovieDB.count == ''|| personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('сколько фильмов вы посмотрели', '');
        }
    },
    rememberMyFilms: function() {
        for(let i = 0; i < 2; i++) {
            const a = prompt('Один из посмотерных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPesonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы среденстатистический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Да вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for(let i = 1; i < 2; i++) {
            // let genre = prompt(`ваш любимый жанр под номером ${i}`);

            // if (genre == '' || genre == null) {
            //     console.log('not corect result');
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = genre;
            // }

            let genres = prompt(`ваш любимый жанр`).toLowerCase();
            if (genres == '' || genres == null) {
                console.log('not corect result');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`любимый жанр ${i + 1}, название ${item}`);
        });
    }
};
