import axios, { AxiosError } from "axios";

const handleErrorResponse = (error: AxiosError) => {
  console.error("axios", AxiosError);
  const { status, data } = error.response || { status: 0, data: null };

  const showMessage = (message: string) => {
    alert(message);
  };

  if ([400, 404, 500].includes(status) && data) {
    showMessage("server issue");
  } else if (status === 401) {
    showMessage("Unauthorized");
  } else if (status === 403) {
    showMessage("Forbidden");
  }

  return Promise.reject(error);
};

axios.interceptors.response.use(
  (response: any) => response,
  (error: AxiosError) => handleErrorResponse(error)
);
