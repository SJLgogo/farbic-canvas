import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'canvas', pathMatch: 'full' },
    { path: 'canvas', loadChildren: () => import('../routes/canvas/canvas.module').then(m => m.CanvasModule) },
];
