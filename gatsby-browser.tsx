import './src/utils/globals.css';

// const Layout = require("./src/components/layout");

// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/

// Logs when the client route changes
export const onRouteUpdate = ({ location, prevLocation }) => {
  console.log('new pathname', location.pathname);
  console.log('old pathname', prevLocation ? prevLocation.pathname : null);
};

// Wraps every page in a component
// exports.wrapPageElement = ({ element, props }) => {
//   return <Layout {...props}>{element}</Layout>;
// };

// https://dev.to/faranmustafa/splash-screen-on-gatsby-js-1gom
// export const onClientEntry = () => {
//   setTimeout(() => {
//     if (document.getElementById("loader-wrapper")) {
//       document.getElementById("loader-wrapper").style.display = "flex";
//     }
//   }, 0);
// };

// export const onInitialClientRender = () => {
//   setTimeout(() => {
//     if (document.getElementById("loader-wrapper")) {
//       document.getElementById("loader-wrapper").style.display = "flex";
//     }
//   }, 0);
// };

// export const onRouteUpdate = () => {
//   setTimeout(() => {
//     if (document.getElementById("loader-wrapper")) {
//       document.getElementById("loader-wrapper").style.display = "none";
//     }
//   }, 3500);
// };
