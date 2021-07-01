import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class GetDataService {
  records$: Subject<any> = new Subject<any>();
  total$: Subject<string> = new Subject<string>();
  year$: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) {}

  async getData(year: string) {
    const result = await this.http.get<any>(
      'https://jsonmock.hackerrank.com/api/football_competitions?year=' + year
    ).toPromise();
    this.records$.next(result?.data);
    this.total$.next(result?.total);
    this.year$.next(year);
  }
}
