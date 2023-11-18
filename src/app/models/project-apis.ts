import { Project } from "./project";

export interface ProjectApi {
    id: number;
    project: Project;
    product: string;
    apikey: string;
    createdon: string;
}