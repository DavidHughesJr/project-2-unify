import React from "react";
import { Dashboard, BoardCenter, BoardLeft, BoardRight } from "../Assets/muiStyles/MaterialStyles";
import HomepageTabs from "../Layout/tabs/HomeTabs";
import VerticalNav from "../Layout/navigation/VerticalNav";
import PopularCategory from "../Components/popular/PopularInfoRightRow";
import SearchInput from "../Components/common/SearchInput";

function Homepage({ setHomepageSearch, homepageSearch }) {

  return (
    <Dashboard>
      <BoardLeft>
        <VerticalNav />
      </BoardLeft>
      <BoardCenter>
       <HomepageTabs/>
      </BoardCenter>
      <BoardRight>
        <SearchInput setHomepageSearch={setHomepageSearch} homepageSearch={homepageSearch} /> 
      <PopularCategory />
      </BoardRight>
    </Dashboard>
  );
}

export default Homepage;
