import axios from 'axios';

export const addCategory = async (category) => {
    return await axios.post('localhost:8080/api/v1.0/categories', category);
}

export const deleteCategory = async (categoryId) => {
    return await axios.delete(`localhost:8080/api/v1.0/categories/${categoryId}`);
}

export const getCategories = async () => {
    return await axios.get('localhost:8080/api/v1.0/categories');
}