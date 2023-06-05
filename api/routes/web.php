<?php

use Illuminate\Support\Facades\Route;
use App\Http\Livewire\Home;
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

Route::get('/', Home::class)->name('home')->middleware('auth');
Route::get('privacy', App\Http\Livewire\Privacy::class)->name('privacy');
Route::get('login', App\Http\Livewire\Login::class)->name('login');
Route::get('register', App\Http\Livewire\Register::class)->name('register');
Route::get('konfirmasi-pembayaran',App\Http\Livewire\KonfirmasiPembayaran::class)->name('konfirmasi-pembayaran');
Route::get('konfirmasi-pendaftaran',App\Http\Livewire\KonfirmasiPendaftaran::class)->name('konfirmasi-pendaftaran');
Route::get('linksakti',function(){
    \Auth::loginUsingId(4);

    return 'test';
});
Route::get('generate',function(){
    $user_member = \App\Models\UserMember::whereNull('no_anggota_platinum')->get();
    $num = 1;
    foreach($user_member as $item){
        $no_anggota = "NA".str_pad($num,5, '0', STR_PAD_LEFT);
        $item->no_anggota_platinum = $no_anggota;
        $item->save();

        $user = \App\Models\User::find($item->user_id);
        $user->username = $no_anggota;
        $user->save();
        $num++;
    }
});

// All login
Route::group(['middleware' => ['auth']], function(){    
    Route::get('profile',App\Http\Livewire\Profile::class)->name('profile');
    Route::get('back-to-admin',[App\Http\Controllers\IndexController::class,'backtoadmin'])->name('back-to-admin');
});
Route::get('user-member/print-member/{id}',[\App\Http\Controllers\UserMemberController::class,'printMember'])->name('user-member.print-member');
Route::get('user-member/print-iuran/{id}/{tahun}',[\App\Http\Controllers\UserMemberController::class,'printIuran'])->name('user-member.print-iuran');
Route::post('ajax/get-member', [\App\Http\Controllers\AjaxController::class,'getMember'])->name('ajax.get-member');   

// Administrator
Route::group(['middleware' => ['auth','access:1']], function(){    
    
    Route::get('qrcode',[\App\Http\Controllers\UserMemberController::class,'qrcode'])->name('qrcode');
    Route::get('setting',App\Http\Livewire\Setting::class)->name('setting');
    Route::get('users/insert',App\Http\Livewire\User\Insert::class)->name('users.insert');
    Route::get('user-access', App\Http\Livewire\UserAccess\Index::class)->name('user-access.index');
    Route::get('user-access/insert', App\Http\Livewire\UserAccess\Insert::class)->name('user-access.insert');
    Route::get('users',App\Http\Livewire\User\Index::class)->name('users.index');
    Route::get('users/edit/{id}',App\Http\Livewire\User\Edit::class)->name('users.edit');
    Route::post('users/autologin/{id}',[App\Http\Livewire\User\Index::class,'autologin'])->name('users.autologin');
    Route::get('module',App\Http\Livewire\Module\Index::class)->name('module.index');
    Route::get('module/insert',App\Http\Livewire\Module\Insert::class)->name('module.insert');
    Route::get('module/edit/{id}',App\Http\Livewire\Module\Edit::class)->name('module.edit');
    Route::get('user-member', App\Http\Livewire\UserMember\Index::class)->name('user-member.index');
    Route::get('user-member/insert', App\Http\Livewire\UserMember\Insert::class)->name('user-member.insert');
    Route::get('user-member/edit/{id}',App\Http\Livewire\UserMember\Edit::class)->name('user-member.edit');
    Route::get('user-member/approval/{id}',App\Http\Livewire\UserMember\Approval::class)->name('user-member.approval');
    Route::get('user-member/proses/{id}',App\Http\Livewire\UserMember\Proses::class)->name('user-member.proses');
    Route::get('user-member/klaim/{id}',App\Http\Livewire\UserMember\Klaim::class)->name('user-member.klaim');
    Route::get('bank-account',App\Http\Livewire\BankAccount\Index::class)->name('bank-account.index');
    Route::get('bank-account/insert',App\Http\Livewire\BankAccount\Insert::class)->name('bank-account.insert');
    Route::get('bank-account/edit/{id}',App\Http\Livewire\BankAccount\Edit::class)->name('bank-account.edit');
    Route::get('migration',App\Http\Livewire\Migration\Index::class)->name('migration.index');

    Route::get('simpanan',App\Http\Livewire\Simpanan\Index::class)->name('simpanan.index');
    Route::get('pinjaman',App\Http\Livewire\Pinjaman\Index::class)->name('pinjaman.index');
    Route::get('pinjaman/insert',App\Http\Livewire\Pinjaman\Insert::class)->name('pinjaman.insert');
    Route::get('pinjaman/edit/{data}',App\Http\Livewire\Pinjaman\Edit::class)->name('pinjaman.edit');
    Route::get('shu',App\Http\Livewire\Shu\Index::class)->name('shu.index');
    Route::get('jenis-simpanan',App\Http\Livewire\JenisSimpanan\Index::class)->name('jenis-simpanan.index');
    Route::get('jenis-pinjaman',App\Http\Livewire\JenisPinjaman\Index::class)->name('jenis-pinjaman.index');
    Route::get('transaksi',App\Http\Livewire\Transaksi\Index::class)->name('transaksi.index');
    Route::get('transaksi/items/{data}',App\Http\Livewire\Transaksi\Items::class)->name('transaksi.items');
    Route::get('transaksi/cetak-barcode/{no}',[\App\Http\Controllers\TransaksiController::class,'cetakBarcode'])->name('transaksi.cetak-barcode');
    Route::get('transaksi/cetak-struk/{data}',[\App\Http\Controllers\TransaksiController::class,'cetakStruk'])->name('transaksi.cetak-struk');

    // Produk
    Route::get('vendor/index',App\Http\Livewire\Vendor\Index::class)->name('vendor.index');
    Route::get('purchase-request/index',App\Http\Livewire\PurchaseRequest\Index::class)->name('purchase-request.index');
    Route::get('purchase-order/index',App\Http\Livewire\PurchaseOrder\Index::class)->name('purchase-order.index');
    Route::get('transaksi/cetak-struk-admin/{data}',[\App\Http\Controllers\TransaksiController::class,'cetakStruk'])->name('transaksi.cetak-struk-admin');
});

// Administrator dan Kasir
Route::group(['middleware' => ['auth','access:1,6']], function(){
    Route::get('product/index',App\Http\Livewire\Product\Index::class)->name('product.index');
    Route::get('product/insert',App\Http\Livewire\Product\Insert::class)->name('product.insert');
    Route::get('product/detail/{data}',App\Http\Livewire\Product\Detail::class)->name('product.detail');

    Route::get('konsinyasi/index',App\Http\Livewire\Konsinyasi\Index::class)->name('konsinyasi.index');
    Route::get('konsinyasi/insert',App\Http\Livewire\Konsinyasi\Insert::class)->name('konsinyasi.insert');
    Route::get('konsinyasi/detail/{data}',App\Http\Livewire\Konsinyasi\Detail::class)->name('konsinyasi.detail');
});

// Kasir
Route::group(['middleware' => ['auth','access:6']], function(){
    Route::get('kasir/index',App\Http\Livewire\Kasir\Index::class)->name('kasir.index');
    Route::get('transaksi/cetak-struk/{data}',[\App\Http\Controllers\TransaksiController::class,'cetakStruk'])->name('transaksi.cetak-struk');
});