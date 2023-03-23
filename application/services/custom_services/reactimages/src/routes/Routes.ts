import { Request, Response, NextFunction } from "express";
import { appsdataController } from '../controller/appsdataController';


export class Routes {
    private appsdata: appsdataController = new appsdataController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/appsdata').post(this.appsdata.GpCreate);
app.route('/appsdata/userid/created_by').get(this.appsdata.GpGetNounCreatedBy);
     }

}