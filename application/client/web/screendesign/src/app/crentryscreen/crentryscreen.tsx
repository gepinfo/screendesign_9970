import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./crentryscreen.scss";
import  {service}   from './crentryscreen.service';

class Crentryscreen extends React.Component<any, any> {
    test = new service ("");
    constructor(props:any){
    super(props);
    this.state={
    appsdata : {
    name: '',
    },
    
    rowData :[]
    } }


    handlechange = (e: any) => {
    if(e?.target){
    this.setState({ appsdata: { ...this.state.appsdata, [e.target.name]: e.target.value } })
    }
    }


    componentDidMount() {
    this.state.appsdata.created_by = sessionStorage.getItem('email')||'{}';
    }

    render(){
    return(
    <>
        <h2 className="screen-align">crentryscreen</h2>
        <div id="template-inkrc" className="gjs-row">
    <div id="template-ipi1x" className="gjs-cell">
        <div id="template-inukl" className="gjs-row">
            <div id="template-iovaj" className="gjs-cell">
                <div id="template-i2off">General Ledger</div>
            </div>
            <div id="template-ic6gj" className="gjs-cell">
                <input id="template-ifron" className="input form-control " />
                <div id="template-ipwzs">Robert Fox</div>
            </div>
        </div>
    </div>
</div>
<div id="template-ie78j" className="gjs-row">
    <div id="template-iqgk7" className="gjs-cell">
        <div id="template-ik4kt" className="gjs-row">
            <div id="template-iqgaq" className="gjs-cell"></div>
            <div id="template-iq3ej" className="gjs-cell"></div>
            <div id="template-ipq86" className="gjs-cell"></div>
            <div id="template-ibw7q" className="gjs-cell"></div>
        </div>
        <div id="template-i2nil" className="gjs-row">
            <div id="template-iq79g" className="gjs-cell"></div>
        </div>
    </div>
    <div id="template-iosaq" className="gjs-cell">
        <div id="template-iaz26" className="gjs-row">
            <div id="template-i5pgo" className="gjs-cell">
                <div id="template-ieu27" className="gjs-row">
                    <div id="template-idtp9" className="gjs-cell">
                        <div id="template-ign8jo">Create Entries</div>
                    </div>
                </div>
            </div>
            <div id="template-i7shl" className="gjs-cell">
                <div id="template-i8bfg" className="gjs-row">
                    <div id="template-ihrjg" className="gjs-cell">
                        <input id="template-ixvvf" placeholder="Entryname" className="input form-control "
                        />
                        <input id="template-iwzi4" placeholder="Description" className="input form-control "
                        />
                        <input placeholder="Description" id="template-iy7k7" className="input form-control "
                        />
                        <input id="template-ixvn8" placeholder="Parent_Name" className="input form-control "
                        />
                    </div>
                    <div id="template-ifltq" className="gjs-cell">
                        <input placeholder="Account Name" id="template-ivrsq" className="input form-control "
                        />
                        <input placeholder="Description" id="template-ispd6" className="input form-control "
                        />
                        <input placeholder="Debit" id="template-iino9" className="input form-control "
                        />
                        <input placeholder="Credit" id="template-im0cf" className="input form-control "
                        />
                    </div>
                    <div id="template-iksw3" className="gjs-cell">
                        <input placeholder="Amount" id="template-iwzkr" className="input form-control "
                        />
                    </div>
                    <div id="template-i9h42" className="gjs-cell">
                        <button id="template-itl74" className="button btn btn-primary ">Create</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
    );
    };
    };

    export default Crentryscreen;