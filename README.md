# MEALED_DOT [Fitness and Food Social Hub]
# Mealed Dot

Mealed Dot is a social media platform designed to connect people through their shared love of food, fitness, and healthy living. Users can discover and share recipes, fitness guidelines, and ideas with a community of like-minded individuals. The platform offers a range of features to enhance user experience, including user login and registration, profile searching, hashtag-based post categorization, following other users, reposting, commenting, liking posts, and image uploads.

## Technologies Used

### MongoDB ![MongoDB Icon](https://img.icons8.com/color/48/000000/mongodb.png)
 user data, posts, comments, and other information related to the platform.

### Mongoose ![Mongoose Icon](https://img.icons8.com/color/48/000000/mongoose.png)
 schema-based solution to model application data.

### Express ![Express Icon](https://img.icons8.com/color/48/000000/express.png)
Front and Back end Connection

### React ![React Icon](https://img.icons8.com/color/48/000000/react-native.png)
Front End

### Node.js ![Node.js Icon](https://img.icons8.com/color/48/000000/nodejs.png)
Server-side Code 

### Passport ![Passport Icon](https://img.icons8.com/color/48/000000/passport.png)
Passport is authentication middleware for Node.js. 

### Multer 
for handling multipart/form-data, primarily used for uploading files.

### Nodemon 
Nodemon is a utility that monitors for changes in files and automatically restarts the server. It is particularly useful during development.

### Jsonwebtoken ![JWT Icon](https://img.icons8.com/color/48/000000/json.png)
 authentication and authorization in web applications.

### Cors 

### Bcrypt
password hashing

## Features

- **Search Functionality:** Users can search for profiles and posts using hashtags or keywords.
- **User Authentication:** Users can register and log in securely using authentication mechanisms like username/password or JWT.
- **Profile Management:** Users can create and manage their profiles, including profile pictures and personal information.
- **Social Interaction:** Users can follow other users, view their posts, repost, comment, and like posts to engage with the community.
- **Image Uploads:** Users can upload images via links to accompany their posts, recipes, or fitness guidelines.
- **Responsive Design:** The platform is built with a responsive design to ensure a seamless experience across devices.


## Contribution

Contributions are welcome! Feel free to open issues or pull requests for any improvements or features you'd like to add.

## License
## Installation

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) and npm (Node Package Manager)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. **Clone the repository:**

    ```bash
    git clone <repository_URL>
    ```

2. **Navigate to the project directory:**

    ```bash
    cd <project_directory>
    ```

3. **Install server dependencies:**

    ```bash
    nodemon server.js
    ```

4. **Navigate to the client directory:**

    ```bash
    cd client
    ```

5. **Install client dependencies:**

    ```bash
    npm install
    ```

## Configuration

1. **MongoDB Setup:**
   - Make sure MongoDB is installed and running.
   - Create a MongoDB database.

2. **Server Configuration:**
   - Create a `.env` file in the root directory.
   - Add the following environment variables to the `.env` file:

   ```plaintext
   MONGODB_URI=your_mongodb_uri


