# Iro Engineering Take-Home Exercise

💫 Welcome to the Iro take-home coding exercise! 🎉

In this exercise, your goal is to build a React form component that will connect to a Node.js/Express.js backend. The time limit for the exercise is 2 days; if you're able to finish it faster, even better. Ultimately, our goal here is to judge how you build software. If you end up learning something new in the process of the exercise, please send us a note about it and why you think it is important. 

## Getting Set Up

[Node.js](https://nodejs.org/en/) installation is a pre-requisite. We recommend using the LTS version.

1. Clone the repository.

1. Run `npm install` in the root directory of the repo to gather all dependencies.

1. Run `npm run seed` for seeding the local SQLite database. 
**Warning: This will drop the database if it exists**. The database lives in a local file `database.sqlite3`.

1. Finally to start the server/React client combo, run `npm start`.

❗️ **Make sure you commit all changes to the master branch!**

## Technical Notes

- The server is running with [nodemon](https://nodemon.io/) which will automatically restart for you when you modify and save a file.
- The frontend was bootstrapped with [Create React App](https://facebook.github.io/create-react-app/docs/getting-started)
- The database provider is SQLite, which will store data in a file local to your repository called `database.sqlite3`. The ORM [Sequelize](http://docs.sequelizejs.com/) is on top of it. You should only have to interact with Sequelize.
- The API client we have set up for you is [axios](https://github.com/axios/axios). You are welcome to swap this out for your favorite client if you prefer.
- The server is running on port 3001 and all AJAX requests from the frontend will automatically proxy to that endpoint. For instance, you can `axios.get('/team')` and it will automatically hit `localhost:3001/team`.

## Acceptance Criteria

User stories for what we expect:

1. I can click a button inside the empty "NEW TEAMMATE" card at the bottom that says 'Join the team!'.

1. Clicking the 'Join the team!' button displays a form allowing me to fill out all of my team member information as per the data model (see `backend/model.js`).

1. Filling out the form will create a new team member in the database that persists on reload.

1. I can see team member cards for all of the new team members I have created.

## Going Above and Beyond the Requirements

As such, the barebones of the exercise should take 3-4 hours. So, given the time duration alotted to you, try to incorporate at least one unique feature beyond the requirements above to make your submission stand out! 🙌

## Submitting the Assignment

On completion, run `npm run bundle` in the repo root to generate `take-home-exercise`, a bundle file created from your local master branch. Send this file to us on e-mail and we'll get back to you at the earliest.

Thank you and good luck! 🙏	