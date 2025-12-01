# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

## Deploying to GitHub Pages (project site)

This project is set up to deploy to GitHub Pages using the `gh-pages` package.

Steps to deploy:

1. Make sure the repository on GitHub is public (or use a user/organization site).
2. Confirm `homepage` in `package.json` is set to your GitHub Pages URL — for this repo it should be:

	```json
	"homepage": "https://ademiamar.github.io/x-adv"
	```

3. Install dependencies and build & deploy:

```bash
npm install
npm run build
npm run deploy
```

This runs `npm run build` and then publishes the `build` folder to the `gh-pages` branch. After a minute or two your site will be available at the `homepage` URL.

If you've previously deployed and want to update the live site, just re-run `npm run deploy` after making changes and pushing commits.

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Serving the app with Node.js / Express (local or Node host)

If you'd prefer to serve the built site with a small Node.js server (useful for testing or deploying to a Node-capable host like Heroku, Render, or a VPS), this repo includes a simple Express server (`server.js`).

How it works:

- The `server.js` file serves the static files from the `build` folder and falls back to `index.html` for client-side routing.

Quick local steps (Windows PowerShell):

```powershell
npm ci
npm run build
npm run serve:prod
```

- `serve:prod` will run `npm run build` and then start the server with `node server.js`.
- The server listens on the `PORT` environment variable or defaults to `3000`.

Deploying to a Node host (high level):

1. Push all code (or build on the host).
2. Ensure the host runs `node server.js` or the `start-server` script. The host will provide `PORT`.

If you want, I can add a Procfile for Heroku or a Dockerfile to containerize the app.
I added a `Dockerfile` and `.dockerignore` so you can build a container that serves the production build using the included `server.js` Express app.

### Docker (build and run locally)

Build the container locally (from repo root):

```powershell
docker build -t x-adv:latest .
```

Run it, exposing port 3000:

```powershell
docker run -p 3000:3000 x-adv:latest
```

The container uses `node server.js` and will serve the production `build` files.

### Heroku (quick notes)

If you want to deploy to Heroku (or similar PaaS) you can add a `Procfile` with:

```
web: node server.js
```

Then push to a Heroku app (Heroku will run `npm ci` and `npm run build` by default if you set the environment to buildpacks).
