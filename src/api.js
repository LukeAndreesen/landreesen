import axios from 'axios';

const API_URL = 'http://localhost:5000/compute'; // Adjust the URL if needed

export const sendNumberToBackend = async (number) => {
    try {
        const response = await axios.post(
            API_URL,
            { input: number },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        
        return response.data.result;
    } catch (error) {
        console.error('Error sending number to backend:', error);
        return null;
    }
};