<?php

use App\Http\Controllers;
use Illuminate\Support\Facades\Route;

Route::get('/', Controllers\HomeController::class)->name('home');

Route::get('/dashboard', Controllers\DashboardController::class)->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('setting/danger', Controllers\DangerAreaController::class)->name('settings.danger-area');
    Route::get('setting/password', Controllers\PasswordController::class)->name('settings.password');
    Route::get('settings/profile', [Controllers\ProfileController::class, 'edit'])->name('settings.profile');
    Route::patch('settings/profile', [Controllers\ProfileController::class, 'update'])->name('profile.update');
    Route::delete('settings/profile', [Controllers\ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
