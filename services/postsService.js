import axios from 'axios';

export const postsService = {
    fetchPosts,
    getPostById,
    fetchHomeData
}

async function fetchPosts() {
    try {
        const response = await axios.get('http://localhost:8000/api/posts')
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