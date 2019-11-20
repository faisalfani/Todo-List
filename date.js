//jshint esversion:6

//declare an export object that gonna called on app.js
module.exports = {
  //defining first object data getDate which is a function
  getDate: () => {
    const today = new Date();

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long"
    };

    return today.toLocaleDateString("en-US", options);
  },
  //defining second object data getDay which is an another function
  getDay: () => {
    const today = new Date();

    const options = {
      weekday: "long"
    };

    return today.toLocaleDateString("en-US", options);
  }
};