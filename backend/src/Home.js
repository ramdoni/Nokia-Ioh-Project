import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

export default function Home(){

    useEffect(()=>{

    },[])

    const history = useNavigate();

    const goTo = (link)=>{
        history(link)
    }

    return (
        <div className="clearfix row">
            <div className="col-lg-2" onClick={()=>goTo('employee')}>
                <div className="card top_counter currency_state">
                    <div className="body">
                        <div className="icon"><img src="assets/icons/employee.png" width="35" /></div>
                        <div className="content">
                            <h6 className="number">Employee</h6>
                            <div className="text">0</div>
                        </div>
                    </div>                        
                </div>
            </div>
            <div className="col-lg-2" onClick={()=>goTo('employee')}>
                <div className="card top_counter currency_state">
                    <div className="body">
                        <div className="icon"><img src="assets/icons/group.png" width="35" /></div>
                        <div className="content">
                            <h6 className="number">Group</h6>
                            <div className="text">0</div>
                        </div>
                    </div>                        
                </div>
            </div>
            <div className="col-lg-2" onClick={()=>goTo('employee')}>
                <div className="card top_counter currency_state">
                    <div className="body">
                        <div className="icon"><img src="assets/icons/question.png" width="35" /></div>
                        <div className="content">
                            <h6 className="number">Question</h6>
                            <div className="text">0</div>
                        </div>
                    </div>                        
                </div>
            </div>
        </div>);
}
