import { Component, OnInit } from "@angular/core"
import { PostService } from '../services/PostService';
import { Observable } from 'rxjs';
import { PostListItem } from '../services/dataModel/PostListItem';
import { MatDialog } from '@angular/material';
import { CreatePostDialogComponent } from '../dialogs/CratePostDialogComponent';

@Component({
    selector:'app-post-list',
    templateUrl: 'postList.html'
})

export class PostListComponent implements OnInit{
    public postList: Observable<PostListItem[]>;
    public DisplayedColumns: string[] = ['id','title', 'subTitle', 'imageUrl'];
    constructor(private postService: PostService, private matDialog: MatDialog) {

    }

    ngOnInit(){
        this.postList = this.postService.getAllPostItem();
    }

    public createPost(){
        this.matDialog.open(CreatePostDialogComponent);
    }
}
