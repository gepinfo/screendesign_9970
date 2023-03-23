import * as mongoose from 'mongoose';
import appsdataModel from '../models/daomodels/appsdata';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class appsdataDao {
    private appsdata = appsdataModel;
    constructor() { }
    
    public async GpCreate(appsdataData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into appsdataDao.ts: GpCreate');

    let temp = new appsdataModel(appsdataData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from appsdataDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(appsdataData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into appsdataDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.appsdata.aggregate(([
                        { $match: { $and: [{ created_by: appsdataData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from appsdataDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}