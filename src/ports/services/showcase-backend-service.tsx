import axios, { AxiosInstance, AxiosResponse } from "axios";

import localStorageService from "@/ports/services/local-storage-service";

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
            request.headers.Authorization = `Bearer ${localStorageService.getToken()}`;
            return request;
        });

    this   
        .axiosInstance
        .interceptors
        .response
        .use((response: AxiosResponse<any, any>) => {
            if (response.status === 401) {
              localStorageService.removeToken();
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
