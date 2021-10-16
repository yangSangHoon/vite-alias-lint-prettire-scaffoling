import { useEffect, useState } from "react";
import {
  getProjects,
  getProject,
  postProject,
  putProject,
  deletetProject,
} from "../index";
import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
} from "react-query";
import { BaseError } from "~/api/model/response/errorModel";
import { CommonResponse } from "~/api/model/response/responseModel";
import { ProjectRequestModel } from "~/api/model/request/projectRequest";
import QueryId from "./QueryId";

function useProjectQuery() {
  const getProjectQuery = (id: number) => {
    return useQuery(QueryId.Project, () => getProject(id), {
      refetchOnWindowFocus: false,
      cacheTime: 0,
    });
  };

  const usePostProject: UseMutationResult<
    CommonResponse,
    BaseError,
    ProjectRequestModel
  > = useMutation(postProject, {
    onSuccess: () => {},
  });

  const usePutProject: UseMutationResult<
    CommonResponse,
    BaseError,
    ProjectRequestModel
  > = useMutation(putProject, {
    onSuccess: () => {},
  });

  const useDeletetProject: UseMutationResult<
    CommonResponse,
    BaseError,
    number
  > = useMutation(deletetProject, {
    onSuccess: () => {},
  });

  const postProjectQuery = (data: ProjectRequestModel) => {
    usePostProject.mutateAsync(data);
  };

  const putProjectQuery = (data: ProjectRequestModel) => {
    usePutProject.mutateAsync(data);
  };

  const deleteProjectQuery = (projectId: number) => {
    useDeletetProject.mutateAsync(projectId);
  };

  return {
    getProjectQuery,
    postProjectQuery,
    putProjectQuery,
    deleteProjectQuery,
  };
}

export default useProjectQuery;
