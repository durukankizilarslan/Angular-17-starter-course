import { AboutUsModule } from './modules/about-us/about-us.module';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

export const routes: Routes = [

    {
        path: 'home', component: HomeComponent,
    },
    {
        path: 'about-us',
        loadChildren: () =>
            import('./modules/about-us/about-us.module').then(
                (m) => m.AboutUsModule
            )
        ,
    }
];
