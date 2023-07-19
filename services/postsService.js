import axios from 'axios';

export const postsService = {
    fetchPosts,
    getPostById,
    fetchHomeData,
    addPost,
    editPost,
    deletePost
}

async function fetchPosts() {
    try {
        const response = await axios.get('http://localhost:8000/api/posts')
        return response.data
    } catch (err) {
        console.log(err)
    }
}
async function addPost(post) {
    try {
        const response = await axios.post('http://localhost:8000/api/posts',
            post, {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        return response.data
    } catch (err) {
        console.log(err)
    }
}
async function deletePost(id) {
    try {
        const response = await axios.delete(`http://localhost:8000/api/posts/${id}`)
        return response.data
    } catch (err) {
        console.log(err)
    }
}
async function editPost(post) {
    try {
        console.log(post)
        const response = await axios.put('http://localhost:8000/api/posts',
            post, {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        return response.data
    } catch (err) {
        console.log(err)
    }
}

async function fetchHomeData() {
    try {
        const response = await axios.get('http://localhost:8000/api/hp_data')
        return response.data
    } catch (err) {
        console.log(err);
    }
}

async function getPostById(id) {
    try {
        const response = await axios.get(`http://localhost:8000/api/posts/${id}`)
        return response.data
    } catch (err) {
        console.log(err)
    }
}