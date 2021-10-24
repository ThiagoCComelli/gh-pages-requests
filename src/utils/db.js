import axios from 'axios'

const getPosts = async (url) => {
    try {
        const result = await axios.get(url)
        return result
    } catch {
        return null
    }
}

const newPost = async (url) => {
    try {
        const result = await axios.post(url)
        return result
    } catch {
        return null
    }
}

export {getPosts,newPost}