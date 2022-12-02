import { useParams, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Spinner from "../../atoms/Spinner";
import { useEffect, useRef, useState } from "react";
import MoboFilter from "../Filter/MoboFilter";
import BarComponent from "../../molecules/BarComponent";
import ItemsComponent from "../../molecules/ItemsComponent";
import { useFetchQuery } from "hooks/useFetchQuery";

// *Styles
import { ComponentSt } from "styles/components/organisms/ComponentSt";
import { StoreInterface } from "interfaces/storeTemplate";
import { useSelector } from "react-redux";
import { componentSelectedTemplate } from "json/ComponentSelectedTemplate";
import { componentSelectedQuery } from "json/ComponentSelectedQuery";
import { componentSelectedFilter } from "json/ComponentSelectedFilter";
import Hex from "components_simulator/molecules/Hex";
import ErrorFetch from "../ErrorFetch";

const Component = () => {
  const itemsComponentRef = useRef<any>(null);
  //   const componentSelected = location.pathname.replace("/simulator/component/", ""); //TODO problema al usar OUTLET
  const componentSelected = "mobo";
  const app = useSelector((store: StoreInterface) => store.app);

  // !States
  const [filterModal, setFilterModal] = useState(false);

  // !JSON TEMPLATE
  const template = { ...componentSelectedTemplate[componentSelected] };
//   template.socket = app.socket.toLowerCase();
  const queriesTemplate = componentSelectedQuery[componentSelected];
  const FilterTemplate = componentSelectedFilter[componentSelected];

  // !Set Window Location
  const setWindowModal = () => {
    setFilterModal(false);
  };

  // !CUSTOM HOOK
  const {
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
  } = useFetchQuery(componentSelected, template);
  //   console.log(itemsComponentRef.current?.scrollTop);
  // !UseEffect
  useEffect(() => {
    window.addEventListener("popstate", setWindowModal);
    return () => {
      window.removeEventListener("popstate", setWindowModal);
    };
  }, [componentSelected]);

  if (isLoading) {
    return <Spinner bgColor="black" />;
  }
  //   if (isRefetching) {
  //     return <Spinner bgColor="black" />;
  //   }
  if (isError) {
        return <ErrorFetch />;
}

  return (
    <ComponentSt>
      <BarComponent
        componentSelected={componentSelected}
        filterModal={filterModal}
        setFilterModal={setFilterModal}
        queries={queries}
        setQueries={setQueries}
        refetch={refetch}
      />
      <Hex />
      <ItemsComponent
        itemsComponentRef={itemsComponentRef}
        componentSelected={componentSelected}
        data={data}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
      {filterModal && (
        <FilterTemplate
          itemsComponentRef={itemsComponentRef}
          setFilterModal={setFilterModal}
          queries={queries}
          setQueries={setQueries}
          template={template}
          queriesTemplate={queriesTemplate}
        />
      )}
      <Outlet />
    </ComponentSt>
  );
};
export default Component;
