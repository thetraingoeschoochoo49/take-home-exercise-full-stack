const { TeamMember } = require('../backend/model');

/* WARNING THIS WILL DROP THE CURRENT DATABASE */
seed();

async function seed() {
  // create table
  await TeamMember.sync({ force: true });
  // insert data
  await Promise.all([
    TeamMember.create({
      firstName: 'Harshil',
      lastName: 'Agarwal',
      title: 'CEO',
      photoUrl:
        'https://i.pinimg.com/originals/88/2f/52/882f52a63f96ce51ffe0f6883769083b.jpg',
      favoriteColor: '#4F52B1',
      story:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }),
    TeamMember.create({
      firstName: 'Mysterious',
      lastName: 'Employee',
      title: 'CTO',
      photoUrl:
        'https://i.pinimg.com/originals/88/2f/52/882f52a63f96ce51ffe0f6883769083b.jpg',
      favoriteColor: '#F2A745',
      story:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }),
    TeamMember.create({
      firstName: 'Sidhant',
      lastName: 'Raghuvanshi',
      title: 'Operations Head',
      favoriteColor: '#FF4369',
      photoUrl:
        'https://i.pinimg.com/originals/88/2f/52/882f52a63f96ce51ffe0f6883769083b.jpg',
      story:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }),
    TeamMember.create({
      firstName: 'Abhishek',
      lastName: 'Nevatia',
      title: 'COO',
      favoriteColor: '#07BB87',
      photoUrl:
        'https://i.pinimg.com/originals/88/2f/52/882f52a63f96ce51ffe0f6883769083b.jpg',
      story:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    })
  ]);
}
