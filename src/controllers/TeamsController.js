const teams = [
  {
    name: 'Boston Celtics',
    titles: 17,
    arenaOrStadium: 'TD Garden',
    founded: '1946',
    conference: 'Eastern',
  },
  {
    name: 'Los Angeles Lakers',
    titles: 17,
    arenaOrStadium: 'Crypto.com Arena',
    founded: '1946',
    conference: 'Western',
  },
  {
    name: 'Golden State Warriors',
    titles: 6,
    arenaOrStadium: 'Chase Center',
    founded: '1946',
    conference: 'Western',
  },
  {
    name: 'Chicago Bulls',
    titles: 6,
    arenaOrStadium: 'United Center',
    founded: '1966',
    conference: 'Eastern',
  },
  {
    name: 'San Antonio Spurs',
    titles: 5,
    arenaOrStadium: 'AT&T Center',
    founded: '1967',
    conference: 'Western',
  },
  {
    name: 'Philadelphia 76ers',
    titles: 3,
    arenaOrStadium: 'Wells Fargo Center',
    founded: '1946',
    conference: 'Eastern',
  },
];

const getAll = (_request, response) => response.status(200).json(teams);

module.exports = {
  getAll,
};
