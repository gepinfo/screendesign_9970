import { Request, Response } from 'express';
import {appsdataDao} from '../dao/appsdataDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let appsdata = new appsdataDao();

export class appsdataService {
    
    constructor() { }
    
    public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into appsdataService.ts: GpCreate')
     let  appsdataData = req.body;
     appsdata.GpCreate(appsdataData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from appsdataService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into appsdataService.ts: GpGetNounCreatedBy')
     let  appsdataData = { created_by: req.query.createdby };
     appsdata.GpGetNounCreatedBy(appsdataData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from appsdataService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}