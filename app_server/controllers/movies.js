

const movies = [
    {
      id: 1,
      title: 'Saw X (2023)',
      releaseDate: '2023-09-29 (IE)',
      certification: '18',
      genres: ['Horror', 'Thriller'],
      runtime: '1h 58m',
      userScore: '73%',
      tagline: 'Witness the return of Jigsaw.',
      overview:
        "Between the events of 'Saw' and 'Saw II', a sick and desperate John Kramer travels to Mexico for a risky and experimental medical procedure in hopes of a miracle cure for his cancer, only to discover the entire operation is a scam to defraud the most vulnerable. Armed with a newfound purpose, the infamous serial killer returns to his work, turning the tables on the con artists in his signature visceral way through devious, deranged, and ingenious traps.",
      people: [
        { name: 'Kevin Greutert', role: 'Director' },
        { name: 'Pete Goldfinger', role: 'Writer' },
        { name: 'Josh Stolberg', role: 'Writer' }
      ],
      photoPath: 'saw-x.jpg',
      reviews: [
        {
          name: 'Marta',
          date: 'July 26, 2022',
          content: "Disappointed. Tom Hiddleston is not to blame. He is awesome as the God of Mischief, the story just wasn't compelling.It was all a little muddled from start to finish. Tom always delivers as Loki and it is enjoyable to watch if you can piece together the chaotic nature of the story. I did enjoy the variants especially the alligator."
        },
      ]
    },
    {
        id: 2,
        title: 'Expend4bles (2023)',
        releaseDate: '2023-09-22 (IE)',
        certification: '16',
        genres: ['Action', 'Adventure', 'Thriller'],
        runtime: '1h 43m',
        userScore: '64%',
        tagline: "They'll die when they're dead.",
        overview:
          "Armed with every weapon they can get their hands on and the skills to use them, The Expendables are the world’s last line of defense and the team that gets called when all other options are off the table. But new team members with new styles and tactics are going to give “new blood” a whole new meaning.",
        people: [
          { name: 'Tad Daggerhart', role: 'Screenplay, Story' },
          { name: 'Kurt Wimmer', role: 'Screenplay, Story' },
          { name: 'Dave Callaham', role: 'Characters' },
          { name: 'Scott Waugh', role: 'Director' },
          { name: 'Max Adams', role: 'Screenplay' },
          { name: 'Spenser Cohen', role: 'Store' }
        ],
        photoPath: 'expendables-4.jpg',
        reviews: [
          {
            name: 'Marta',
            date: 'July 26, 2022',
            content: "Disappointed. Tom Hiddleston is not to blame. He is awesome as the God of Mischief, the story just wasn't compelling.It was all a little muddled from start to finish. Tom always delivers as Loki and it is enjoyable to watch if you can piece together the chaotic nature of the story. I did enjoy the variants especially the alligator."
          },
        ]
      },
      {
        id: 3,
        title: 'Nowhere (2023)',
        releaseDate: '2023-09-29 (ES)',
        certification: '16',
        genres: ['Thriller', 'Drama'],
        runtime: '1h 49m',
        userScore: '76%',
        tagline: 'Attempting to survive in the middle of nowhere is her only option.',
        overview:
          "EA young pregnant woman named Mia escapes from a country at war by hiding in a maritime container aboard a cargo ship. After a violent storm, Mia gives birth to the child while lost at sea, where she must fight to survive.",
        people: [
          { name: 'Indiana Lista', role: 'Screenplay, story' },
          { name: 'Albert Pinto', role: 'Director' },
          { name: 'Miguel Ruz', role: 'Screenplay' },
          { name: 'Seanne Winslow', role: 'Screenplay' },
          { name: 'Ernest Riera', role: 'Screenplay' },
          { name: 'Teresa de Rosendo', role: 'Screenplay' }
        ],
        photoPath: 'nowhere.jpg',
        reviews: [
          {
            name: 'Marta',
            date: 'July 26, 2022',
            content: "Disappointed. Tom Hiddleston is not to blame. He is awesome as the God of Mischief, the story just wasn't compelling.It was all a little muddled from start to finish. Tom always delivers as Loki and it is enjoyable to watch if you can piece together the chaotic nature of the story. I did enjoy the variants especially the alligator."
          },
        ]
      },    {
        id: 4,
        title: 'The Equalizer 3 (2023)',
        releaseDate: '2023-09-01 (IE)',
        certification: '16',
        genres: ['Action', 'Thriller', 'Crime'],
        runtime: '1h 49m',
        userScore: '73%',
        tagline: 'Justice knows no borders.',
        overview:
          "Robert McCall finds himself at home in Southern Italy but he discovers his friends are under the control of local crime bosses. As events turn deadly, McCall knows what he has to do: become his friends' protector by taking on the mafia.",
        people: [
          { name: 'Michael Sloan', role: 'Characters' },
          { name: 'Richard Lindheim', role: 'Characters' },
          { name: 'Antoine Fuqua', role: 'Director' },
          { name: 'Richard Wenk', role: 'Writer' }
        ],
        photoPath: 'equalizer.jpg',
        reviews: [
          {
            name: 'Marta',
            date: 'July 26, 2022',
            content: "Disappointed. Tom Hiddleston is not to blame. He is awesome as the God of Mischief, the story just wasn't compelling.It was all a little muddled from start to finish. Tom always delivers as Loki and it is enjoyable to watch if you can piece together the chaotic nature of the story. I did enjoy the variants especially the alligator."
          },
        ]
      },
      {
        id: 5,
        title: 'Loki',
        releaseDate: 'Jun 09, 2021',
        certification: '12A',
        genres: ['Action', 'Thriller'],
        runtime: '2h 44m',
        userScore: '73%',
        actions: ['Action 1', 'Action 2', 'Action 3', 'Action 4', 'Action 5', 'Action 6'],
        tagline: 'We all share the same fate',
        overview:
          "Ethan Hunt and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands...",
        people: [
          { name: 'Christopher McQuarrie', role: 'Director, Writer' },
          { name: 'Erik Jendresen', role: 'Writer' }
        ],
        photoPath: 'loki.jpg',
        reviews: [
          {
            name: 'Marta',
            date: 'July 26, 2022',
            content: "Disappointed. Tom Hiddleston is not to blame. He is awesome as the God of Mischief, the story just wasn't compelling.It was all a little muddled from start to finish. Tom always delivers as Loki and it is enjoyable to watch if you can piece together the chaotic nature of the story. I did enjoy the variants especially the alligator."
          },
        ]
      },
      {
        id: 6,
        title: 'Muzzle (2023)',
        releaseDate: '2023-09-29 (US)',
        certification: 'R',
        genres: ['Action', 'Crime', 'Drama', 'Thriller'],
        runtime: '1h 40m',
        userScore: '62%',
        tagline: 'Vengeance unleashed.',
        overview:
          "LAPD K-9 officer Jake Rosser has just witnessed the shocking murder of his dedicated partner by a mysterious assailant. As he investigates the shooter’s identity, he uncovers a vast conspiracy that has a chokehold on the city in this thrilling journey through the tangled streets of Los Angeles and the corrupt bureaucracy of the LAPD.",
        people: [
          { name: 'John Stalberg Jr.', role: 'Director' },
          { name: 'Carlyle Eubank', role: 'Writer' }
        ],
        photoPath: 'muzzle.jpg',
        reviews: [
          {
            name: 'Marta',
            date: 'July 26, 2022',
            content: "Disappointed. Tom Hiddleston is not to blame. He is awesome as the God of Mischief, the story just wasn't compelling.It was all a little muddled from start to finish. Tom always delivers as Loki and it is enjoyable to watch if you can piece together the chaotic nature of the story. I did enjoy the variants especially the alligator."
          },
        ]
      },
      {
        id: 7,
        title: 'Mortal Kombat Legends: Cage Match (2023)',
        releaseDate: '2023-10-17 (US)',
        certification: 'R',
        releaseIE: '2023-07-10',
        genres: ['Animation', 'Action', 'Fantasy'],
        runtime: '1h 20m',
        userScore: '74%',
        tagline: 'Neon lights... Suits with shoulder pads... Jumping from explosions in slow motion...',
        overview:
          "In 1980s Hollywood, action star Johnny Cage is looking to become an A-list actor. But when his costar, Jennifer, goes missing from set, Johnny finds himself thrust into a world filled with shadows, danger, and deceit. As he embarks on a bloody journey, Johnny quickly discovers the City of Angels has more than a few devils in its midst.",
        people: [
          { name: 'Ethan Spaulding', role: 'Director' },
          { name: 'Jeremy Adams', role: 'Writer' }
        ],
        photoPath: 'MortalKombatLegendsCageMatch.jpg',
        reviews: [
          {
            name: 'Marta',
            date: 'July 26, 2022',
            content: "Disappointed. Tom Hiddleston is not to blame. He is awesome as the God of Mischief, the story just wasn't compelling.It was all a little muddled from start to finish. Tom always delivers as Loki and it is enjoyable to watch if you can piece together the chaotic nature of the story. I did enjoy the variants especially the alligator."
          },
        ]
      },
      {
        id: 8,
        title: "Five Nights at Freddy's (2023)",
        releaseDate: '2023-10-25 (IE)',
        certification: '15A',
        releaseIE: '2023-07-10',
        genres: ['Horror', 'Thriller'],
        runtime: '1h 50m',
        userScore: '85%',
        tagline: 'Can you survive five nights?',
        overview:
          "Recently fired and desperate for work, a troubled young man named Mike agrees to take a position as a night security guard at an abandoned theme restaurant: Freddy Fazbear's Pizzeria. But he soon discovers that nothing at Freddy's is what it seems.",
        people: [
          { name: 'Emma Tammi', role: 'Director, Screenplay' },
          { name: 'Scott Cawthon', role: 'Screenplay' }
          ,
          { name: 'Seth Cuddeback', role: 'Screenplay' }
        ],
        photoPath: 'FiveNightsatFreddy.jpg',
        reviews: [
          {
            name: 'Marta',
            date: 'July 26, 2022',
            content: "Disappointed. Tom Hiddleston is not to blame. He is awesome as the God of Mischief, the story just wasn't compelling.It was all a little muddled from start to finish. Tom always delivers as Loki and it is enjoyable to watch if you can piece together the chaotic nature of the story. I did enjoy the variants especially the alligator."
          },
        ]
      },
      {
        id: 9,
        title: '57 Seconds (2023)',
        releaseDate: 'Jun 09, 2021',
        certification: 'R',
        genres: ['Thriller', 'Science Fiction', 'Action'],
        runtime: '1h 39m',
        userScore: '56%',
        tagline: 'Rewind the past. Avenge the future.',
        overview:
          "When a tech blogger lands an interview with a tech guru and stops an attack on him, he finds a mysterious ring that takes him back 57 seconds into the past.",
        people: [
          { name: 'Rusty Cundieff', role: 'Director, Screenplay' },
          { name: 'Macon Blair', role: 'Screenplay' }
        ],
        photoPath: '57Seconds.jpg',
        reviews: [
          {
            name: 'Marta',
            date: 'July 26, 2022',
            content: "Disappointed. Tom Hiddleston is not to blame. He is awesome as the God of Mischief, the story just wasn't compelling.It was all a little muddled from start to finish. Tom always delivers as Loki and it is enjoyable to watch if you can piece together the chaotic nature of the story. I did enjoy the variants especially the alligator."
          },
        ]
      },
      {
        id: 10,
        title: 'Ballerina (2023)',
        releaseDate: '2023-10-05 (KR)',
        certification: '18',
        genres: ['Action', 'Crime', 'Thriller'],
        runtime: '1h 33m',
        userScore: '69%',
        tagline: 'Merciless and ruthless, to hell.',
        overview:
          "Grieving the loss of a best friend she couldn't protect, an ex-bodyguard sets out to fulfill her dear friend's last wish: sweet revenge.",
        people: [
          { name: 'Lee Chung-hyun', role: 'Director' },
        ],
        photoPath: 'Ballerina.jpg',
        reviews: [
          {
            name: 'Marta',
            date: 'July 26, 2022',
            content: "Disappointed. Tom Hiddleston is not to blame. He is awesome as the God of Mischief, the story just wasn't compelling.It was all a little muddled from start to finish. Tom always delivers as Loki and it is enjoyable to watch if you can piece together the chaotic nature of the story. I did enjoy the variants especially the alligator."
          },
        ]
      },
  ];


/* GET 'home' page */
const home = function(req, res) {
    res.render("index", {
        title: "Home",
        movies
    });
};

/* GET 'Movie Info' page */
const movieInfo = function(req, res) {
    const movieId = req.params.id;
    const selectedMovie = movies.find(movie => movie.id === parseInt(movieId));
    if (!selectedMovie) {
        // Handle the case where the movie with the provided ID is not found
        return res.status(404).send("Movie not found");
      }
      res.render("movie-detail", {
        title: "Movie Info",
        movie: selectedMovie,
      });
};

/* GET 'Favourite Movies' */
const favouriteMovies = function(req, res) {
    res.render("favourite-movies", {
        title: "Favourite Movies"
    });
};


module.exports = {
    home,
    movieInfo,
    favouriteMovies
}