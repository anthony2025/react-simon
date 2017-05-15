A React version of the classic game from the 80's.

## Live at
[react-simon-game.firebaseapp.com](https://react-simon-game.firebaseapp.com)

## Technologies
  * Built in [React] using ES6+ syntax
  * RxJS's Observables and the future [Web Animations API][web-animations-api], with a [polyfill][animations-polyfill]
  * Redux store for managing the game logic
  * [CSS Modules][css-modules] and native CSS Variables for locally scoped styles
  * Flexbox and CSS Grid for layout
  * Webpack config powered by an [nwb] boilerplate
  * [Firebase] for easy single page hosting

![Screenshot](/public/screenshot.png?raw=true)

## Future
  * Unit and snapshot testing
  * implementation in [MobX] planned

## Prerequisites
[Node] >= 6.x.x must be installed.
<br />
[Yarn] >= 0.20.x must be installed.

## Development
- `$ yarn install` in the app's root directory will install everything needed for development.
- `$ yarn start` will run the app's development server at <http://localhost:3000> with hot module reloading.

## Production
- `$ yarn build` creates a production build by default.
   To create a development build, set the `NODE_ENV` environment variable to `development` while running this command.
- `$ yarn run clean` will delete built resources.

[web-animations-api]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API
[animations-polyfill]: https://github.com/web-animations/web-animations-js
[react]: https://github.com/facebook/react
[redux]: https://github.com/reactjs/redux
[mobx]: https://mobx.js.org/
[nwb]: https://github.com/insin/nwb
[firebase]: https://firebase.google.com/docs/reference/rest/database/
[css-modules]: https://github.com/css-modules/css-modules
[node]: http://nodejs.org/
[yarn]: http://yarnpkg.com/
