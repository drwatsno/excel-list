import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormLoadComponent } from './form-load/form-load.component';
import { RequestService } from './shared/request.service';
import { StoreService } from './shared/store.service';

import { FileForLoadComponent } from './form-load/file-for-load/file-for-load.component';
import { FileItemComponent } from './form-load/file-for-load/file-item/file-item.component';
import { ListProcessedFilesComponent } from './list-processed-files/list-processed-files.component';
import { UploadFileItemComponent } from './list-processed-files/upload-file-item/upload-file-item.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    FormLoadComponent,
    FileForLoadComponent,
    FileItemComponent,
    ListProcessedFilesComponent,
    UploadFileItemComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RequestService, StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
