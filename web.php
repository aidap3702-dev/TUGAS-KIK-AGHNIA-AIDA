<?php

use App\Http\Controllers\BerandaController;
use App\Http\Controllers\PendaftaranController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProgramController;
use App\Http\Controllers\Admin\DashboardController as AdminDashboard;
use App\Http\Controllers\Admin\KelasController;
use App\Http\Controllers\Admin\VerifikasiController;
use App\Http\Controllers\Admin\SiswaController;
use Illuminate\Support\Facades\Route;

Route::get('/', [BerandaController::class, 'index'])->name('beranda');
Route::get('/daftar', [PendaftaranController::class, 'create'])->name('daftar');
Route::post('/daftar', [PendaftaranController::class, 'store'])->name('daftar.store');

Route::get('/program/{program:slug}', [ProgramController::class, 'show'])->name('program.show');

Route::middleware(['auth', 'siswa'])->prefix('dashboard')->group(function () { 
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/program', [DashboardController::class, 'program'])->name('dashboard.program');
    Route::get('/jadwal', [DashboardController::class, 'jadwal'])->name('dashboard.jadwal');
    Route::get('/pembayaran', [DashboardController::class, 'pembayaran'])->name('dashboard.pembayaran');
    Route::get('/sertifikat', [DashboardController::class, 'sertifikat'])->name('dashboard.sertifikat');
    Route::get('/profil', [DashboardController::class, 'profil'])->name('dashboard.profil');
    Route::put('/profil', [DashboardController::class, 'updateProfil'])->name('dashboard.profil.update');
});

Route::middleware(['auth', 'admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/', [AdminDashboard::class, 'index'])->name('dashboard');
    Route::resource('kelas', KelasController::class);
    Route::get('/verifikasi', [VerifikasiController::class, 'index'])->name('verifikasi');
    Route::patch('/verifikasi/{pendaftaran}', [VerifikasiController::class, 'update'])->name('verifikasi.update');

    // Daftar siswa (CRUD + ekspor)
    Route::get('/siswa/export/excel', [SiswaController::class, 'exportExcel'])->name('siswa.export.excel');
    Route::get('/siswa/export/pdf', [SiswaController::class, 'exportPdf'])->name('siswa.export.pdf');
    Route::get('/siswa', [SiswaController::class, 'index'])->name('siswa');
    Route::get('/siswa/create', [SiswaController::class, 'create'])->name('siswa.create');
    Route::post('/siswa', [SiswaController::class, 'store'])->name('siswa.store');
    Route::get('/siswa/{user}', [SiswaController::class, 'show'])->name('siswa.show');
    Route::get('/siswa/{user}/edit', [SiswaController::class, 'edit'])->name('siswa.edit');
    Route::put('/siswa/{user}', [SiswaController::class, 'update'])->name('siswa.update');
    Route::delete('/siswa/{user}', [SiswaController::class, 'destroy'])->name('siswa.destroy');
    Route::patch('/siswa/{user}/status', [SiswaController::class, 'toggleStatus'])->name('siswa.status');
    Route::get('/siswa/{user}/berkas/{jenis}', [SiswaController::class, 'berkas'])->name('siswa.berkas');
});

require __DIR__.'/auth.php';