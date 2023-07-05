import axios from 'axios';

const baseURL = `https://seungyeonnnnnni.shop`;

export const getRecordRes = async () => {
  try {
    const response = await axios.get(`${baseURL}/hello`);
    return response.data;
  } catch (error) {
    console.error('Error fetching record response list:', error);
    throw error;
  }
};

export const getChatRes = async () => {
  try {
    const response = await axios.get(`${baseURL}/completion/chat`);
    return response.data;
  } catch (error) {
    console.error('Error fetching chat response list:', error);
    throw error;
  }
};
