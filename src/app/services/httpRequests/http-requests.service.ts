import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from 'src/app/interfaces/IProduct';
import { Observable } from 'rxjs';


@Injectable()
export class HttpRequestsService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros';
  private options = {
    headers: {
      authorId: '2303366'
    }
  };

  // GET
  getAllProducts(): Observable<Array<IProduct>> {
    let url = '/bp/products';
    return this.http.get<Array<IProduct>>(this.baseUrl + url, this.options);
  }

  doesIdExist(id: string): Observable<string> {
    let url = '/bp/products/verification',
      requestOptions = {
        ...this.options,
        params: { id }
      };
    return this.http.get<string>(this.baseUrl + url, requestOptions);
  }

  // POST
  createProduct(body: IProduct): Observable<IProduct> {
    let url = '/bp/products';
    return this.http.post<IProduct>(this.baseUrl + url, body, this.options);
  }

  // PUT
  updateProduct(body: IProduct): Observable<IProduct> {
    let url = '/bp/products';
    return this.http.put<IProduct>(this.baseUrl + url, body, this.options);
  }

  // DELETE
  deleteProduct(id: string): Observable<any> {
    let url = '/bp/products',
      deleteOptions: Object = {
        ...this.options,
        responseType: 'text',
        params: { id }
      };
    return this.http.delete<any>(this.baseUrl + url, deleteOptions);
  }
}
