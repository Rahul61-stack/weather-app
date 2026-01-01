import axios from "axios";

const API_URL = process.env.BACKEND_API_URL || "http://localhost:8000";

export const getWeatherData = async (
  location: string,
  options?: {
    current?: boolean;
    range?: {
      from?: string;
      to?: string;
    };
  }
) => {
  try {
    const response = await axios.post(`${API_URL}/weather`, {
      location: location,
      range: {
        from: options?.range?.from,
        to: options?.range?.to,
      },
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};
