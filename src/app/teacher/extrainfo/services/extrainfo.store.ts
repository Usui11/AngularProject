import { ExtraInfo } from "../models/extrainfo.model";

export interface ExInformationStore{
    extraInformations: ExtraInfo[];
    extraInformation:ExtraInfo;
}