# Frontend of the project-REACT.

### Creating REACT App.
To crate a react app you need to run a command in your folder : npx create-react-app my-app.
Instead of 'my-app' you can use '.' if you are already in your frontend directory else you can can write your directory name. In my case I used 'cyp-frontend-REACT'.
After creating aan environment you can start building the frontend. The public folder contains a index.html where you can change the favicon and browser related editing like authors, etc.
Then you can build the related components to your site. 
But before this you need to downlaod the required dependencies for this frontend.
##### Dependencies:
1. Axios - a popular library for making HTTP requests: `npm install axios`
2. Chakra UI - a set of accessible and customizable UI components for React:  `npm install @chakra-ui/react`
3. Emotion - a library for writing CSS styles in JavaScript:  `npm install @emotion/react @emotion/styled`
4. Font Awesome - a library for adding scalable vector icons to your project:  `npm install font-awesome`
5. Framer Motion - a library for creating animations in React: `npm install framer-motion`
6. React Draggable - a library for adding draggable elements to your React app: `npm install react-draggable`
7. React Router DOM - a library for handling routing in React apps: `npm install react-router-dom`
#  
### Discussion on CHAKRA-UI
Chakra UI is a versatile and accessible component library for React applications. With Chakra UI, you can quickly build beautiful and responsive user interfaces while following best practices and maintaining accessibility standards. It provides a wide range of customizable and pre-built components, such as buttons, forms, modals, and more, which can be easily integrated into your project. Chakra UI also offers built-in theming and styling capabilities using Emotion, allowing you to effortlessly customize the look and feel of your application. Whether you're a beginner or an experienced developer, Chakra UI simplifies the process of building elegant and functional user interfaces, saving you time and effort in your React projects. The required styles for a component are given inline only. You can check the site (https://chakra-ui.com/) to get a basic understanding of including the ui in your project.
#
### Best way to keep your files.
You can arrange your components in a seperate components folder. Also I arranged all my crops images in a seperate folders so that it is easy to import them in a minimal lines of code. I created a index.js in the crop_folder in the assets folder where I kept my all downloaded images. I imported the images and exported their names. Then I created a constants folder where I imported those crop names from crop_folder. Then I exported the list of objects from index.js in constants folder. This made a clear code in the cropModal component.
#
### Final lines
Now after creating all the components, you can connect the react frontend to your flask backend. In SubmitModal.js file I used axious to send a post request to the backend server where I passed all the values and mentioned the content-type. Then after getting a response from the server I displayed the respective predicted yield.
# 
### Conclusion
I created this frontend which is user-friendly and intuitive. The main feature is that I auto-save the changes made by the user save them in the localStorage in the browser.
