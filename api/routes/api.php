<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group(['middleware' => 'cors', 'json.response'], function(){
	Route::post('auth-login', [\App\Http\Controllers\Api\UserController::class,'login']);
});

Route::group(['middleware' => 'auth:api'], function(){
	Route::get('user/check-token',[\App\Http\Controllers\Api\UserController::class,'checkToken']);
	Route::get('employee/index',[\App\Http\Controllers\Api\EmployeeController::class,'index']);
	Route::get('employee/index-select2',[\App\Http\Controllers\Api\EmployeeController::class,'select2']);
	Route::post('employee/store',[\App\Http\Controllers\Api\EmployeeController::class,'store']);
	Route::post('employee/delete',[\App\Http\Controllers\Api\EmployeeController::class,'delete']);
	Route::get('employee/detail/:id',[\App\Http\Controllers\Api\EmployeeController::class,'detail']);
	Route::post('user/upload-photo',[\App\Http\Controllers\Api\UserController::class,'uploadPhoto'])->name('api.user.upload-photo');
	Route::post('user/change-password',[\App\Http\Controllers\Api\UserController::class,'changePassword'])->name('api.user.change-password');

	Route::get('employee-group/index',[\App\Http\Controllers\Api\EmployeeGroupController::class,'index']);

	Route::post('excel/store-row',[\App\Http\Controllers\Api\ExcelController::class,'store']);
});