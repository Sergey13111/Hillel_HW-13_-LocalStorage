// 1,2
import storage from "./storage.js";


const getPosts = async () => {
    try {
        const post = storage.get("post");

        storage.set("theme", "light");
        const theme = storage.get("theme");
        // console.log("theme", theme);
        storage.remove("theme");

        if (post) {
        console.log(post);
        } else {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const post = await response.json();
        console.log(post);
        storage.set("post", post);
        }
    } catch (error) {
        return console.log(error);
    } 
};

getPosts();

// 3
import isValidDateFormat from "./date-format.js";


