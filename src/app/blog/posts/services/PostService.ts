import {Injectable} from '@angular/core';
import { PostDto } from './dataModel/PostDto';
import { PostResource } from './PostResource';
import { Observable } from 'rxjs';
import { CreatePostDto } from './dataModel/CreatePostDto';

@Injectable()
export class PostService{
    deletePost(id: any) {
        throw new Error("Method not implemented.");
    }
    constructor(private postResource: PostResource) {
        
    }

    public getAllPostItem(): Observable<PostDto[]>{
        return this.postResource.findAll();
    }

    public createPost(createpostDto: CreatePostDto): Observable<PostDto>{
        return this.postResource.create(createpostDto);
    }
}