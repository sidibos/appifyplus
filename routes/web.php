<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AppsController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UsersController;

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

Route::get('/apps', [AppsController::class, 'index'])
->middleware(['auth', 'verified'])->name('apps');

Route::get('/users', [UsersController::class, 'index'])
->middleware(['auth', 'verified'])->name('users');

Route::get('/create-app', [AppsController::class, 'create'])
->middleware(['auth', 'verified'])->name('create.app');

Route::post('/create-app', [AppsController::class, 'store'])
->middleware(['auth', 'verified'])->name('create.app');

Route::get('/app/edit/{app}', [AppsController::class, 'edit'])
->middleware(['auth', 'verified'])->name('app.edit');

Route::get('/roles', [RoleController::class, 'index']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
