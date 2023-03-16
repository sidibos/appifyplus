<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AppController;
use App\Http\Controllers\RoleController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome');
 });

Route::get('/app', [AppController::class, 'index'])
->middleware(['auth', 'verified'])->name('app-home');

Route::get('/create-app', [AppController::class, 'create'])
->middleware(['auth', 'verified'])->name('create.app');

Route::post('/create-app', [AppController::class, 'store'])
->middleware(['auth', 'verified'])->name('create.app');

Route::get('/app/edit/{app}', [AppController::class, 'edit'])
->middleware(['auth', 'verified'])->name('app.edit');

Route::get('/roles', [RoleController::class, 'index']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
