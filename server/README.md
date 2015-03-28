Files to be accessed by the application on the server. "/server" is a [special directory](https://docs.meteor.com/#/full/structuringyourapp) in Meteor that is not loaded on the client.

Since this is a public repository, sensitive information like passwords and API keys should not be stored here and should be passed to the application as environment variables set on the web server.