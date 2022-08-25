function movies(userInput) {
    let newArr = [];
    for (let line of userInput) {
        let command = '';
        if (line.includes('addMovie')) {
            command = 'addMovie';
        } else if (line.includes('directedBy')) {
            command = 'directedBy';
        } else if (line.includes('onDate')) {
            command = 'onDate';
        }
        switch (command) {
            case 'addMovie':
                line = line.split('addMovie ');
                let movieN = line[1];
                newArr.push({ name: movieN });
                break;
            case 'directedBy':
                line = line.split(' directedBy ');
                let movieName = line[0];
                let director = line[1];
                for (let element of newArr) {
                    if (element.name == movieName) {
                        element.director = director;
                    }
                }
                break;
            case 'onDate':
                line = line.split(' onDate ');
                let movieName1 = line[0]; let date = line[1];
                for (let element of newArr) {
                    if (element.name == movieName1) {
                        element.date = date;
                    }
                }
                break;
        }
    }
    newArr.forEach(movie => {
        if (movie.name && movie.date && movie.director) {
            console.log(JSON.stringify(movie));
        }
    })
} // 100/100
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen']);
console.log('---------------- eeee stana eee xdd');

function seriali(userInput) {
    let movies = [];
    for (let element of userInput) {
        if (element.includes('addMovie ')) {
            let movie = element.split('addMovie ');
            movies.push({ name: movie[1] });
        } else if (element.includes('directedBy')) {
            let [name, director] = element.split(' directedBy ')
            movies.forEach(movie => {
                if (movie.name === name) {
                    movie.director = director;
                }
            })
        } else if (element.includes('onDate')) {
            let [name, date] = element.split(' onDate ');
            movies.forEach(movie => {
                if (movie.name === name) {
                    movie.date = date;
                }
            })
        }
    }
    movies.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    })
}
seriali([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen']);