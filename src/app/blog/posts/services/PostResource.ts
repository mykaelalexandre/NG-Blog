import {Injectable} from '@angular/core';
import { ApiConfig } from '../../ApiConfig';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostDto } from './dataModel/PostDto';
import { CreatePostDto } from './dataModel/CreatePostDto';

@Injectable()
export class PostResource {
    private readonly URL = ApiConfig.url + '/posts';

    constructor(private httpClient: HttpClient) {
        
    }
    public findAll(): Observable<PostDto[]> {
        return this.httpClient.get(this.URL) as Observable<PostDto[]>;
    }

    public create(CreatePostDto: CreatePostDto): Observable<PostDto>{
        return this.httpClient.post(this.URL, CreatePostDto) as Observable<PostDto>;
    }
}