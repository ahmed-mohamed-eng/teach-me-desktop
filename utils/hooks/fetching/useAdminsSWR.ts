import useSWR from "swr";
import axios from "axios";
import { CreateAdminDto } from "@/utils/dto/admin.dto";

const adminsFetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function useAdminsSWR(queries?: Map<string, string>) {
  const urlQueries = getURLQueries(queries);

  const { data, error, isLoading } = useSWR<CreateAdminDto[]>(
    `/api/admins?${urlQueries}`,
    adminsFetcher
  );

  return {
    data,
    error,
    isLoading,
  };
}

function getURLQueries(queries?: Map<string, string>) {
  if (!queries?.size) {
    return "";
  }

  let urlQueries = "";
  for (const [key, value] of queries.entries()) {
    urlQueries += `${key}=${value}&`;
  }
  urlQueries = urlQueries.replace(/&\s*$/, "");

  return urlQueries;
}
