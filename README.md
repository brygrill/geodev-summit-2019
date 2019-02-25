# Harrisburg GeoDev Summit 2019

Authentication and Authorization with ArcGIS Online Oauth 2 and the ArcGIS REST API

## Outline
Everyone is welcome to fork the [CodeSandbox project](https://codesandbox.io/s/53m9km4lj4) and follow along, all you need is a browser and Github account. For future reference, [here is a step-by-step guide](https://link.medium.com/AdENWN1pwU) based on this presentation.

### Auth/OAuth2
Discuss the basics of authentication and authorization and the difference between the two. Review the OAuth2 authorization framework.

### Register AGOL App
We will learn how to register and configure an application within ArcGIS Online so we can implement OAuth. If you have an AGOL account, feel free to log in and create your own app.

### Review React App
To better understand the logic to prompt a user to sign in, we will review the structure of the sample [React](https://github.com/facebook/react) app.

### User Login
Review the structure of the authorize endpoint, add configuration from our AGOL app, and learn what happens when the endpoint URL is not structured properly.

### Token exchange
Using the [qs](https://github.com/ljharb/qs) package, we will extract the token from the URL returned by AGOL and save it for later use. We will also use the [`Window.location`](https://developer.mozilla.org/en-US/docs/Web/API/Window/location) object to reset the URL.

### ArcGIS REST API Endpoints
With our access token, we will learn how to use the [axios](https://github.com/axios/axios) package to request resources from the ArcGIS REST API.

### App Improvements
Outline improvements we could make to the app, such as saving the token and paginated requests.

### Useful Links
- https://developers.arcgis.com/rest/users-groups-and-items/authentication.htm
- https://developers.arcgis.com/rest/users-groups-and-items/quick-reference.htm
- https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2
- https://developer.okta.com/blog/2017/06/21/what-the-heck-is-oauth
- https://medium.com/google-cloud/understanding-oauth2-and-building-a-basic-authorization-server-of-your-own-a-beginners-guide-cf7451a16f66
