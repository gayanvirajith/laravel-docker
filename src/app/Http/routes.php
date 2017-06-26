<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/get-200', function () {
    return response()->json(['message' => 'Hello world'], 200);
});

Route::get('/get-201', function () {
    return response()->json(['message' => 'Hello world'], 201);
});

Route::get('/get-400', function () {
    return response()->json(['message' => 'Hello world'], 400);
});

Route::get('/get-500', function () {
    return response()->json(['message' => 'Hello world'], 500);
});
