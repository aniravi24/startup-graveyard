# startup-graveyard
A place where founders of failed startups can tell their story. For people thinking about starting a startup, this would be a great place to learn from people who've done it and failed.

~~
## Getting Started

Install node, npm, and MongoDB. Make sure MongoDB is running locally in the background if you are running this project locally. Create a database in your local MongoDB instance and call it whatever you want (make sure you remember it because you'll need it in a future step).

Assuming you have node, npm, and MongoDB installed and have navigated to the root folder:

First, install the dependencies using

`npm install`

Then, once the dependencies are installed, setup your environment variables as follows:

```
export DEV_ENV=dev (required)
export NODE_ENV=development (optional unless deploying, in which case set this to "production" without the quotes)
export REACT_APP_SITEURL=http://localhost:3001 (required, change the URL if necessary but the express application is running on 3001 by default)
export MONGODB_URI=YOUR_MONGO_URI (required if running locally, likely will be mongodb://localhost/YOUR_NAME_OF_DATABASE)
export PROD_MONGODB_URI=YOUR_PROD_URI_IF_DEPLOYING (optional unless deploying, if using mLab, it will give you the URI)
export REACT_APP_RECAPTCHA_SITEKEY=YOUR_RECAPTCHA_SITEKEY_FROM_GOOGLE
export RECAPTCHA_SECRETKEY=YOUR_RECAPTCHA_SECRETKEY_FROM_GOOGLE
```
If using a bash shell or similar, these lines can be put into your rc file or create an executable .sh (shell script) file with the above in it and run `source NAME_OF_SCRIPT.sh` with each terminal window/instance. Create the shell script outside of this project folder if you choose to use that method.

Then, start the project using:

`yarn dev`

The dashboard will then be available at the URL shown in terminal.

Built using the MERN (Mongo, Express, React, Node) stack and deployed to Heroku. See version 1.0 of this project at https://startupgraveyard.herokuapp.com

Created by @enaluz (mostly frontend) and @aniravi24 (mostly backend).
