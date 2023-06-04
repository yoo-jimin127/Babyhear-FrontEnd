import axios from 'axios';

const baseURL = `http://13.209.240.190:8080`;

export const getRecordRes = async () => {
  try {
    const response = await axios.get(`${baseURL}/hello`);
    return response.data;
  } catch (error) {
    console.error('Error fetching record response list:', error);
    throw error;
  }
};