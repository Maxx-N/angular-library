import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { SingleBookComponent } from './book/single-book/single-book.component';
import { BookFormComponent } from './book/book-form/book-form.component';
import { HeaderComponent } from './header/header.component';

import { AuthService } from './services/auth.service';
import { BookService } from './services/book.service';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    BookListComponent,
    SingleBookComponent,
    BookFormComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [AuthService, BookService, AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
