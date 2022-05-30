import * as log from 'loglevel';
log.enableAll();

export const InformationofLog = (data)=>{
    log.info(data);
}
export const WarningofLog = (data)=>{
    log.warn(data);
}
export const ErrorofLog = (data)=>{
    log.error(data);
}