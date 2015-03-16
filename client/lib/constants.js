// Define App Constants

if (Meteor.App) {
  throw new Meteor.Error('Meteor.App already defined? see client/lib/constants.js');
}

Meteor.App = {
  NAME: 'EarthRef.org',
  DESCRIPTION: 'EarthRef.org is the web site for Earth Reference Data and Models'
};
