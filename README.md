A React version of the classic game from the 80's. Built as part of the FreeCodeCamp curricula.

## Live at
[react-simon-game.firebaseapp.com](https://react-simon-game.firebaseapp.com)

## Technologies
  * Built in [React] 15.6
  * RxJS's Observables and the future [Web Animations API][web-animations-api], with a [polyfill][animations-polyfill]
  * Flexbox and CSS Grid for layout
  * [CSS Modules][css-modules] and [PostCSS-cssnext][css-next] for locally scoped styles
  * Webpack config powered by an [nwb] boilerplate
  * [Firebase] for free hosting

![Screenshot](/assets/screenshot.png?raw=true)

## Future
  * Rewrite in [Redux] ongoing in 'redux' branch
  * [MobX] implementation planned

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
[css-next]: http://cssnext.io/
[node]: http://nodejs.org/
[yarn]: http://yarnpkg.com/
