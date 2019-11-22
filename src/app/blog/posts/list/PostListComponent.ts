import {Component, OnInit} from '@angular/core';
import {PostService} from '../services/PostService';
import {BehaviorSubject, Observable} from 'rxjs';
import {PostDto} from '../services/dataModel/PostDto';
import {MatDialog} from '@angular/material';
import {CreatePostDialogComponent} from '../dialogs/CratePostDialogComponent';
import {finalize} from 'rxjs/operators';
import * as _ from 'lodash';
import {EditPostDto} from '../services/dataModel/EditPostDto';
import {ConfirmationDialogComponent} from '../../dialogs/ConfirmationDialogComponent';

@Component({
    selector: 'app-post-list',
    templateUrl: 'postList.html',
    styleUrls: ['postList.scss']
})

export class PostListComponent implements OnInit {
    public isLoading = false;
    public displayedColumns: string[] = ['ID', 'title', 'subTitle', 'imageUrl', 'action'];

    private postListSubject: BehaviorSubject<PostDto[]> = new BehaviorSubject(null);

    constructor(private postService: PostService,
                private matDialog: MatDialog) {
    }

    ngOnInit() {
        this.isLoading = true;
        this.postService.getAllPostItem()
            .pipe(finalize(() => this.isLoading = false))
            .subscribe((postListItem) => this.postListSubject.next(postListItem));
    }

    public getPostList(): Observable<PostDto[]> {
        return this.postListSubject.asObservable();
    }

    public editPost(editPost: EditPostDto) {
        const ref = this.matDialog.open(CreatePostDialogComponent, {
            width: '600px',
            data: {editPostDto: editPost}
        });

        ref.afterClosed().subscribe((editedPost: PostDto) => {
            if (editedPost) {
                const list = this.postListSubject.getValue();
                const postIndex = _.findIndex(list, post => post.ID === editedPost.ID);
                list[postIndex] = editedPost;

                this.postListSubject.next(_.cloneDeep(list));
            }
        });
    }

    public deletePost(postDto: PostDto) {
        console.log(`POST DELETE`, postDto);
        const ref = this.matDialog.open(ConfirmationDialogComponent, {data: postDto.ID});
        ref.afterClosed().subscribe((result) => {
            console.log('CONTINUAR', result);
            if (result) {
                this.isLoading = true;
                // this.postService.deletePost(postDto.ID)
                //     .pipe(finalize(() => this.isLoading = false))
                //     .subscribe(() => {
                //         const list = this.postListSubject.getValue();
                //         _.remove(list, post => post.ID === postDto.ID);
                //         this.postListSubject.next(_.cloneDeep(list));

                //     });
            }
        });
    }

    public createPost() {
        const ref = this.matDialog.open(CreatePostDialogComponent, {
            width: '600px',
        });

        ref.afterClosed().subscribe((newPost: PostDto) => {
            if (newPost) {
                const list = this.postListSubject.getValue();
                list.push(newPost);
                this.postListSubject.next(_.cloneDeep(list));
            }
        });
    }
}