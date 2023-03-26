import axios, {
  AxiosInstance,
  AxiosRequestConfig,
} from 'axios';

export class RequestService {
  protected transport: AxiosInstance;

  constructor(transport: AxiosInstance) {
    this.transport = transport;
  }

  private generateBaseOptions(url: string, config = {}) {
    return {
      url: encodeURI(`${url}`),
      ...config
    };
  }

  private mapToResponse(data: any) {
    return data.data;
  }

  private request(options: any) {
    return this.transport
      .request(options)
      .then(this.mapToResponse)
      .catch((e) => {
        throw new Error(e)
      });
  }


  GET<TResponse>(url: string, config: AxiosRequestConfig = {}): Promise<TResponse> {
    return this.request({
      method: 'GET',
      ...this.generateBaseOptions(url, config)
    });
  }
}

export const requestService = new RequestService(axios);