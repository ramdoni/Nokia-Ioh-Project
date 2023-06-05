<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class UserAccess
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next,$user_access_id)
    {
        // if(is_array($user_access_id))
        //     if(!in_array($request->user()->user_access_id,$user_access_id)){
        //         return redirect()->to('/')->with('message-error','Access Denied!');
        //     }
        // else if ($request->user()->user_access_id != $user_access_id) {
        //     return redirect()->to('/')->with('message-error','Access Denied!');
        // }
        // return $next($request);
        if(is_array($user_access_id)){
            if(!in_array($request->user()->user_access_id,$user_access_id)) 
                return redirect()->to('/')->with('message-error','Access Denied!');
        }elseif($request->user()->user_access_id != $user_access_id){
            return redirect()->to('/')->with('message-error','Access Denied!');
        }else{
            return $next($request);
        }
    }
}
