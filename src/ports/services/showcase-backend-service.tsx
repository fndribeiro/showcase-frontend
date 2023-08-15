import axios, { AxiosInstance, AxiosResponse } from "axios";

import localStorageService from "@/ports/services/local-storage-service";

class ShowcaseBackendService {

  private axiosInstance: AxiosInstance;

  constructor(withToken: boolean) {
    
    this.axiosInstance = axios.create({
        baseURL: process.env.SHOWCASE_BACKEND_BASE_URL,
        headers: {
            'Content-Type': 'application/json',
        },
    });

    this.setupInterceptors(withToken);
  }

  private setupInterceptors(withToken: boolean) {

    this
        .axiosInstance
        .interceptors
        .request
        .use((request: any) => {
            if (withToken) {
              request.headers.Authorization = `Bearer ${localStorageService.getToken()}`;
            }
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

export const showcaseBackendService = new ShowcaseBackendService(true).getAxiosInstance();
export const showcaseBackendServiceNoToken = new ShowcaseBackendService(false).getAxiosInstance();
