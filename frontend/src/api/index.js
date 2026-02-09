import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
});

// APIs
export const predictDisease = (formData) => API.post('/predict-disease', formData, {
  headers: { 'Content-Type': 'multipart/form-data' }
});

export const recommendCrop = (data) => API.post('/recommend-crop', data);

export const recommendFertilizer = (data) => API.post('/recommend-fertilizer', data);

export default API;
