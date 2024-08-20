import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared/guard';
import { environment } from 'environments/environment';
import { HttpTokenInterceptor, ErrorInterceptor } from './shared/interceptors';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';
import { ApiService } from './shared/services/api/api.service';
import { AuthService } from './shared/services/auth/auth.service';
import { ConfirmationDialogService } from './shared/services/confirmation-dialog/confirmation-dialog.service';
import { JwtService } from './shared/services/jwt/jwt.service';
import { ConfirmationDialogComponent } from './shared/services/confirmation-dialog/confirmation-dialog.component';
import { ToastrModule } from 'ngx-toastr';
import { NgbdSortableHeader } from './shared/directives';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule,
        ToastrModule.forRoot({
            maxOpened: 1,
            progressBar: true,
            preventDuplicates: true,
            closeButton: true,
            tapToDismiss: true,
            timeOut: 4000,
            positionClass: 'toast-top-right',
        }),         
    ],
    declarations: [AppComponent, ConfirmationDialogComponent],
    providers: [
        AuthGuard,
        AuthService, 
        JwtService,
        { provide: HTTP_INTERCEPTORS, 
            useClass: HttpTokenInterceptor, 
            multi: true 
        }, 
        ErrorInterceptor,
        ApiService, 
        ConfirmationDialogService],
    bootstrap: [AppComponent]
})
export class AppModule {}
