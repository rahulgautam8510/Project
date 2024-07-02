export const fecthPosts=()=>async(dispatch)=>{
    try{
        const response= await fetch ('https://jsonplaceholder.typicode.com/posts');
        const data=await response.json();
        dispatch({
            type: 'FETCH-POSTS',
            payload:data,
        });
    } catch(error){
        console.error('Error fetching posts:',error);
    }
};