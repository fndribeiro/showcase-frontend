import axios, { AxiosInstance, AxiosResponse } from "axios";

class ShowcaseBackendService {

  private axiosInstance: AxiosInstance;

  constructor() {
    
    this.axiosInstance = axios.create({
        baseURL: process.env.SHOWCASE_BACKEND_BASE_URL,
        headers: {
            'Content-Type': 'application/json',
        },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {

    this
        .axiosInstance
        .interceptors
        .request.
        use((request: any) => {
            const token = localStorage.getItem('token');
            request.headers.Authorization = `Bearer ${token}`;
            return request;
        });

    this   
        .axiosInstance
        .interceptors
        .response
        .use((response: AxiosResponse<any, any>) => {
            if (response.status === 401) {
                // Handle unauthorized response if needed
            }
            return response;
        },
    );
  }

  public getAxiosInstance(): AxiosInstance {
    return this.axiosInstance;
  }
  
}

export const showcaseBackendService = new ShowcaseBackendService().getAxiosInstance();
