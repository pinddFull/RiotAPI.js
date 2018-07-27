
import { RegionType } from '../configuration/region'

export enum HTTPMethod {
    option  = "OPTION",
    get     = "GET",
    head    = "HEAD",
    post    = "POST",
    put     = "PUT",
    patch   = "PATCH",
    delete  = "DELETE",
}

export interface ContextType {
    path: string
    method: HTTPMethod
    regionType: RegionType
    params?: { [key: string]: any }
}