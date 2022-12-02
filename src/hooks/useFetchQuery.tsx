import axios from "axios";
import { useState } from "react";
import { useInfiniteQuery } from "react-query";

export const useFetchQuery = (componentSelected: any, template: any) => {
  const [queries, setQueries] = useState(template);
  // !Fetching Function
  const fetchData = async ({ queryKey, pageParam = 1 }: any) => {
    let concatQuery = "";
    Object.keys(queries).map((i, index) => {
      concatQuery += `&${i}=${queryKey[index + 1]}`;
    });
    const { data } = await axios.get(
      `http://localhost:4000/${queryKey[0]}?page=${pageParam}&limit=30${concatQuery}`
    );
    return data;
  };
  // !UseQuery
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
    refetch,
  } = useInfiniteQuery(
    [componentSelected, ...Object.keys(queries).map((i) => queries[i])],
    fetchData,
    {
      keepPreviousData: true,
      // cacheTime: 0,
      // staleTime: 0,

      getNextPageParam: (lastPage, allPages) => {
        if (allPages.length < lastPage.count) {
          return allPages.length + 1;
        } else {
          return undefined;
        }
      },
    }
  );
  return {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    queries,
    setQueries,
    isRefetching,
    refetch,
  };
};
