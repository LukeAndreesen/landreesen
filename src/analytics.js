// src/analytics.js
import ReactGA from "react-ga4";

export const initializeAnalytics = () => {
  ReactGA.initialize("G-XJ56LM6MNH");
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};
