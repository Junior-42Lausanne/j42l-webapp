import { projects } from "@/fake-data/projects";

export type Project = (typeof projects)[0];
export type Job = Project["jobs"][0];
