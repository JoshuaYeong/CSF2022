import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Subject, take, tap } from 'rxjs';
import { Todo } from '../model';

// @Injectable({providedIn: 'root'})
@Injectable()
export class TodoService {

    onNewData = new Subject<Todo[]>()

    constructor(private http: HttpClient) {}

    getTodo(userId: number) {
    //Making an invocation with query parameters
    const params: HttpParams = new HttpParams().set('userId', userId);

        return firstValueFrom(
            this.http
            .get<Todo[]>('https://jsonplaceholder.typicode.com/todos', { params })
            //Rxjs
            .pipe(tap(data => {
                console.info('in tap')
                this.onNewData.next(data)
            })))

            // .then(data => {
            //     this.onNewData.next(data)
            //     return data
            // })
    }
}
