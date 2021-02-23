import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {IPerson} from './Person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  person = [
    {id: 1, name: 'darwish', age: 30, gender: 'male'},
    {id: 2, name: 'darwish1', age: 20, gender: 'female'},
    {id: 3, name: 'darwish2', age: 10, gender: 'male'},
    {id: 4, name: 'darwish3', age: 60, gender: 'female'}
  ];

  private x: string = '/assets/JSONData/person.json';

  getData(): Observable<IPerson[]> {
    return this.http.get<IPerson[]>(this.x).pipe(catchError(this.showError));
  }


  showError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('client side error', errorResponse.error.message);
    } else {
      console.error('Server side error', errorResponse.error.message);
    }

    return throwError('Please Try Again, we are working to solve the issue');
  }

  constructor(private http: HttpClient) {
  }
}
