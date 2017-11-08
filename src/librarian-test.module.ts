import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [

    ],
    exports: [

    ],
    imports: [
        CommonModule
    ]
})
export class LibrarianTestModule {
    static forRoot() {
        return {
            ngModule: LibrarianTestModule,
            providers: []
        };
    }
}
