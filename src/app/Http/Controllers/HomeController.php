<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Response;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{

    public function get200() {
      return Response::json(['message' => 'Hello world'], 200);
    }


    public function get201() {
      return Response::json(['message' => 'Hello world'], 201);
    }


    public function get400() {
      return Response::json(['message' => 'Hello world'], 400);
    }


    public function get500() {
      return Response::json(['message' => 'Hello world'], 500);
    }


}
