<?php

function status_project($status){
    switch($status){
        case 1:
            return "Opportunity";
        break;
        case 2:
            return "Successful";
        break;
        case 3:
            return "Unsuccessful";
        break;
        default:
            return "Opportunity";
        break;
    }
}

function status_project_list(){
    $arr = [1=>'Opportunity',2=>"Successful",3=>"Unsuccessful"];
    return $arr;
}

function count_project_status($status){
    $count = \App\Models\Project::where('status',$status)->count();
    
    return $count;
}