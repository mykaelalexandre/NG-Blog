import {Injectable} from '@angular/core';
import { PostListItem } from './dataModel/PostListItem';
import { PostResource } from './PostResource';
import { Observable } from 'rxjs';

@Injectable()
export class PostService{
    constructor(private postResource: PostResource) {
        
    }

    public getAllPostItem(): Observable<PostListItem[]>{
        return this.postResource.findAll();
    }
}