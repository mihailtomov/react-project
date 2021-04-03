const baseUrl = 'http://localhost:5000/api/articles';

const postOptions = (data) => {
    const token = localStorage['auth'];

    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    }
}

const create = (articleData) => {
    return fetch(baseUrl, postOptions(articleData))
    .then(res => res.json())
}

const getAll = (category) => {
    return fetch(`${baseUrl}/category/${category}`)
        .then(res => res.json());
}

const getOne = (articleId) => {
    return fetch(`${baseUrl}/${articleId}`)
        .then(res => res.json());
}

const postComment = (commentData) => {
    return fetch(`${baseUrl}/comments`, postOptions(commentData))
        .then(res => res.json());
}

const articleService = {
    create,
    getAll,
    getOne,
    postComment,
}

export default articleService;