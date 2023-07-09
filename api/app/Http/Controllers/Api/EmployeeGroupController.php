<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\EmployeeGroup;

class EmployeeGroupController extends Controller
{
    public function index()
    {
        $data = EmployeeGroup::get();
        
        return response()->json(['status'=>200,'message'=>'success','data'=>$data], 200);
    }

    public function store(Request $r)
    {
        $this->validate($r,[
            'name' => 'required',
            'phone' => 'required'
        ]);

        $data = new EmployeeGroup;
        $data->name = $r->name;
        $data->save();

        return response()->json(['status'=>200,'message'=>'success'], 200);
    }

    public function detail(Employee $id)
    {   
        return response()->json(['status'=>200,'message'=>'success','data'=>$id], 200);
    }

    public function delete(Request $r)
    {
        $this->validate($r,[
            'id' => 'required'
        ]);

        $employee  = Employee::find($r->id);
        if($employee) $employee->delete();

        return response()->json(['status'=>200,'message'=>'success'], 200);
    }
}