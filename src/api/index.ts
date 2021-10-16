import { get, post, put, del } from './client';
import { projectsMapper, projectMapper } from './mapper/projectMapper';
import { ProjectListRequestModel, ProjectRequestModel } from './model/request/projectRequest';

export const basePath = `https://${process.env.SERVER_TYPE}.wanted.co.kr/gigs/`;
export const baseUrl = `https://nextweek.wanted.co.kr/gigs/api-v2/admin/`;

export const getProjects = async (params: ProjectListRequestModel) => {
    const response = await get(`${baseUrl}projects`, params);

    return projectsMapper(response.data);
};

export const getProject = async (id: number) => {
    const response = await get(`${baseUrl}project/${id}`);
    return projectMapper(response.data);
};

export const postProject = async (data: ProjectRequestModel) => {
    const response = await post(`${baseUrl}project`, data);
    return response.data;
};

export const putProject = async (data: ProjectRequestModel) => {
    const response = await put(`${baseUrl}project/${data.id}`, data);
    return response.data;
};

export const deletetProject = async (id: number) => {
    const response = await del(`${baseUrl}project/${id}`);
    return response.data;
};
