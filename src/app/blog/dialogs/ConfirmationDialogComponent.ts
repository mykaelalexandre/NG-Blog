import { Component, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PostDto } from '../posts/services/dataModel/PostDto';
import { PostService } from '../posts/services/PostService';

@Component({
    selector: 'app-confirmation-dialog',
    template: `
    <h1 mat-dialog-title>Confirm your action!</h1>
    <div>
        <p>Are you sure you want to continue ?</p>
    </div>
    <div mat-dialog-actions>
        <button mat-button mat-dialog-close>Cancel</button>
        <button mat-button
                type="button"
                color="warn">
            Continue
        </button>
    </div>`
})

export class ConfirmationDialogComponent {



    constructor(
        private dialogref: MatDialogRef<void>,
                private postService: PostService,
                @Inject(MAT_DIALOG_DATA) public data: any
        ) {
    }

    // public submit(){
        
    //     console.log('data dialog', this.data);
    //     this.postService.deletePost(this.data.postId.id);
    //     this.dialogref.close(true); 
    // }
}