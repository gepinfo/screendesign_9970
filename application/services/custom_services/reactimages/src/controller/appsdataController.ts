import { Request, Response } from 'express';
import { appsdataService } from '../service/appsdataService';
import { CustomLogger } from '../config/Logger'
let appsdata = new appsdataService();

export class appsdataController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    appsdata.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into appsdataController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from appsdataController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    appsdata.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into appsdataController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from appsdataController.ts: GpGetNounCreatedBy');
    })}


}