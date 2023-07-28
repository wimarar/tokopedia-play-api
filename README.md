# tokopedia-play-api
This repository contains a Tokopedia Play Clone, a video streaming platform where users can watch videos and interact with the platform. The application provides the following features:

User can open two pages:

Home Page: Displays a list of videos with thumbnails from YouTube.
Video Detail Page: Shows the details of a selected video, including related products, embedded YouTube video, list of comments, and a form to submit a comment.
User Interaction:

Users can click on each video to view its details.
Users can submit comments on the video detail page.
Users can view their comments in the list of comments after successfully submitting.

## Database Structure
The application uses MongoDB as the database to store various entities. The database contains the following collections:

videos: Stores information about the videos, such as video title, description, URL, and related product IDs.

products: Stores details about products related to each video, including product name, price, and description.

comments: Stores comments posted by users for each video, along with the user's name and comment text.

The relationships between the collections are as follows:

Each video may have multiple related products stored as an array of product IDs.
Each video may have multiple comments associated with it, stored as an array of comment objects.

## API Structure
The API follows the RESTful standard and uses the following routes:

/api/videos
GET: Retrieves a list of videos with their details.
POST: Creates a new video with the provided video data.

/api/videos/:videoId
GET: Retrieves the details of a specific video by its ID.
PUT: Updates the details of a specific video by its ID.
DELETE: Deletes a specific video by its ID.

/api/products
GET: Retrieves a list of products with their details.
POST: Creates a new product with the provided product data.

/api/products/:productId
GET: Retrieves the details of a specific product by its ID.
PUT: Updates the details of a specific product by its ID.
DELETE: Deletes a specific product by its ID.

/api/comments
POST: Submits a new comment for a specific video. The comment data should include the video ID, user's name, and comment text.
/api/comments/:commentId
DELETE: Deletes a specific comment by its ID.


## How to Run in Local
To run the Tokopedia Play Clone application on your local machine, follow these steps:

- Install Node.js and npm on your machine (Node.js version 14 or later is recommended).

- Clone this repository to your local machine.

- Navigate to the project directory using the terminal or command prompt.

- Create a .env file in the project root directory and set the following environment variables:

PORT=3000
MONGODB_URI=mongodb://localhost:27017/my_database
Replace mongodb://localhost:27017/my_database with the connection string to your MongoDB database.

- Install the project dependencies by running:
npm install

Start the application by running:
npm start
The server should start running at http://localhost:3000. You can access the application in your web browser.

Ensure that you have MongoDB installed and running on your local machine with the correct connection string specified in the .env file.
