import axios from "axios";

const getUsers=async(userId)=>{

    const {data:users}=await(axios("https://jsonplaceholder.typicode.com/users/"+userId));
    console.log(users);

};
    
const getPosts=async(userId)=>{
    
    const {data:posts}=await(axios("https://jsonplaceholder.typicode.com/posts?id=" + userId));
    console.log(posts);

};
    

async function getData(userId){

   try{
    const users= await getUsers(userId);
    const posts=await getPosts(userId);
    return users+posts;
   }catch(error){
    console.log(error);
  }
}

export default getData