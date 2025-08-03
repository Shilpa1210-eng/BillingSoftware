import axios from 'axios';

axios.get('http://localhost:8080/api/v1.0/categories')


export const addCategory = async (category) => {
    return await axios.post('/api/v1.0/categories', category);
}

export const deleteCategory = async (categoryId) => {
    return await axios.delete(`/api/v1.0/categories/${categoryId}`);
}

export const fetchCategories = async () => {
    return await axios.get('/api/v1.0/categories');
}
