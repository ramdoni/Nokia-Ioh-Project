<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Employee;

class EmployeeController extends Controller
{
    public function index()
    {
        $data = Employee::orderBy('id','DESC')->get();
        
        return response()->json(['status'=>200,'message'=>'success','data'=>$data], 200);
    }

    public function select2()
    {
        $temp = Employee::get();

        $data = [];
        foreach($temp as $k =>$item){
            $data[$k]['label'] = $item->name .' / '. $item->phone;
            $data[$k]['value'] = $item->id;
        }

        return response()->json(['status'=>200,'message'=>'success','data'=>$data], 200);
    }

    public function store(Request $r)
    {
        $this->validate($r,[
            'name' => 'required',
            'phone' => 'required'
        ]);

        $data = new Employee;
        $data->nik = $r->nik;
        $data->name = $r->name;
        $data->phone = $r->phone;
        $data->email = $r->email;
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