/**
 * @author ${Nafiur Rashid}
 * @email ${nafiurrashid@gmail.com}
 * ${Version: 1.00}
 */
 import * as log from "loglevel";
 log.enableAll();
 
 export const InformationofLog = (data) => {
   log.info(data);
 };
 export const WarningofLog = (data) => {
   log.warn(data);
 };
 export const ErrorofLog = (data) => {
   log.error(data);
 };
 