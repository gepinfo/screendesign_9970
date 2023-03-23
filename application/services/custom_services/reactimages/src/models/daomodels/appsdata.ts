
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const appsdataSchema = new Schema({
   created_date_at: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date_at: { type: Date, default: Date.now },
   name: String
})

const appsdataModel = mongoose.model('appsdata', appsdataSchema, 'appsdata');
export default appsdataModel;
