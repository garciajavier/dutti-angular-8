import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly BASE_PATH = 'assets/data';

  constructor(private http: HttpClient) { }

  /**
   * Devuelve un JSON almacenado localmente
   * @param path Ubicación local
   */
  public get(path: string): Observable<any> {
    return this.http.get(this.BASE_PATH + '/' + path + '.json');
  }
}
