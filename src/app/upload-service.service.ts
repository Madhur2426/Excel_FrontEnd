import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {

  constructor(private http:HttpClient) { }
  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post('http://localhost:8080/upload', formData,{ observe: 'response', responseType: 'text' });
  }
  getData(){    
    return this.http.get('http://localhost:8080/getdata',{ observe: 'response', responseType: 'text' })
  }
}
