# WEBPACK ENVIRONMENT FOR STATIC WEBSITES

This project will set you an environment project to develop static websites. The idea is that you can develop with JS, SCSS/SASS/CSS, and HTML locally, serve it on a localhost to then minify your code, and upload it to a web host for static websites.

To use it you can run `npm i` or `yarn` to install all the needed dependencies.

---

## Developer mode

In order to run the **developer mode** just run `npm run watch` or `yarn watch`. This will use the `webpack.dev.js` configuration file, if you want to change anything for your **DEV** environment you can modify that file.

## Production mode

In order to run the **production mode** just run `npm run build` or `yarn build`. This will use the `webpack.prod.js` configuration file, if you want to change anything for your **PROD** environment you can modify that file.

This command will create a `dist` folder with a `public` folder inside it with all the files minified. It is inside this public folder to make it easier if you want to deploy your web page on a firebase hosting.

### NOTE

> The `webpack.dev.js` and `webpack.prod.js` files are very similar because I like to develop as close to a production environment as possible, feel free to do any changes if you want.\
> Also, remember, if you want to use CSS, not SCSS/SASS, change the SCSS rule on the `webpack.common.js` file.

---

## How to develop

To create a new page add a new HTML file inside the `src/pages` folder, add a SCSS/SASS/CSS file on the `src/scss/pages` folder to the new pages, and a JS file inside the `src/js/pages` folder to that new page. On the JS file you will import the SCSS/SASS/CSS files needed, as follows:

```javascript
import '../../scss/pages/portfolio.scss';
```

Then, on the `webpack.common.js` file add a new entry with the name of the new page and the JS file you created, for example:

```javascript
portfolio: './src/js/pages/portfolio.js',
```

and finally, on the `src/index.js` add a new `HtmlWebpackPlugin` to the **module.exports** with the files you just created, like this:

```javascript
new HtmlWebpackPlugin({
  inject: 'body',
  chunks: ['portfolio'],
  filename: 'portfolio.html',
  template: 'src/pages/portfolio.html',
}),
```
