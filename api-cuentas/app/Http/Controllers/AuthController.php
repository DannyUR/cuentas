<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request){
        $credencials = $request->only("email","password");
        try{
            if(! $access_token = JWTAuth::attempt($credencials)){
                return response()
                    ->json(["error"=>"Credenciales invalidas"]);
            }
            $user = Auth::user();//user loggeado
            return response()->json([
                "token"=>$access_token,
                "user"=>$user
            ]);
        }catch(JWException $e){
            return response()->json([
                "error"=>"Credenciales invalidas"
            ]);
        }
    }
}
