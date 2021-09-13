import { Component } from '@angular/core';
import { AgSection } from '../../../ag-form-builder/src/lib/models/agSection.model';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.scss'],
    template: `
        <div class="wrapper">
            <mat-tab-group color="accent" backgroundColor="primary" mat-align-tabs="center">
                <mat-tab class="ag-flex ag-justify-center">
                    <ng-template mat-tab-label> <mat-icon fontSet="material-icons-outlined" class="ag-mx-5">build</mat-icon> AG Form Builder </ng-template>
                    <lib-ag-form-builder class="demo-wrapper" (emittedFormInfo)="handleFormInfo($event)"></lib-ag-form-builder>
                </mat-tab>

                <mat-tab>
                    <ng-template mat-tab-label>
                        <mat-icon fontSet="material-icons-outlined" class="ag-mx-5">calendar_view_month</mat-icon> AG Form Viewer
                    </ng-template>
                    <lib-ag-form-viewer class="demo-wrapper"></lib-ag-form-viewer>
                </mat-tab>
            </mat-tab-group>

            <mat-toolbar color="primary" class="ag-flex ag-justify-between  ag-items-center">
                <h1>AG Form Builder/Viewer</h1>

                <footer>
                    <a href="https://www.npmjs.com/package/ag-form-builder" target="_blank" matTooltip="NPM">
                        <img src="../assets/images/npm.png" alt="NPM" />
                    </a>

                    <a href="https://github.com/hossein13m/angular-form-builder" target="_blank" matTooltip="GitHub">
                        <img src="../assets/images/github.png" alt="GitHub" />
                    </a>
                </footer>
            </mat-toolbar>
        </div>
    `,
})
export class AppComponent {
    public handleFormInfo(event: { name: string; sections: Array<AgSection> }): void {
        console.log(event);
    }
}
