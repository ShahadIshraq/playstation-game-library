# PlayStation Game Library

This web application lets the user add and browse information about game library.
The frontend is a single page application created with React.js while the backend uses Express.js and MongoDb.
Moreover, docker has been used to simplify the initialization procedure.

The video demonstration of the application can be found [here](https://drive.google.com/file/d/1sQEKsXea3YYlwVGeLnucvHV3P_u6a5fW/view?usp=sharing)

### Development mode

In the development mode, we will have 2 servers running. The front end code will be served by the webpack dev server which helps with hot and live reloading. The server side Express code will be served by a node server using nodemon which helps in automatically restarting the server whenever server side code changes.

### Production mode

Production mode has not been implemented for this application

## Quick Start
Install `docker` and `docker-compose` first. Then :
```bash
# Clone the repository
git clone https://github.com/ShahadIshraq/playstation-game-library

# Go inside the directory
cd playstation-game-library

# Build image
docker-compose build

# Start development server
docker-compose up
```
The app can then be accessed from `localdev:3000`

## Technology Choices

- As the only job of this application is to store and serve data without much necessity of data processing, Node.js server has been used. This also helped bootstrap the project quickly.
- NoSQL came as a natural choice as no SQL specific joining is necessary for the mentioned use case.
- To keep things simple in the assessment part, docker has been used. You do not have to worry about installing a bunch of application specific stuff to get this running.


## Design Choices

To keep things simple and get the application done in minimum possible time, some choices were taken:
- Box arts have been saved in the database. This imposes limitations like non-shareability of the image. Moreover, letting a file server like (AWS S3) handle the images would make things faster in terms of database transactions.
- The frontend pages are heavily state dependent and the links are not shareable for specific games. Hitting back button has no value in this case also.
- No authorization and authentication have been implemented.
- There is no automated test.
- Form data validation and sanitation have not been performed.

All of these are big no-nos for production applications.
