import { Dashboard, BoardLeft, BoardCenter, BoardRight, Board, MobileBoard } from "../Components/muiStyles/PageStyles";
import VerticalNav from "../Layout/navigation/VerticalNav";
import ShowAllGenres from "../Components/genres/ShowAllGenres";
import TrendingCategory from "../Components/common/Trending";
import ResponsiveAppBar from "../Layout/navigation/AppBar";


function ShowAllPage({setSearch}) {
    return (
        <Board>
            <Dashboard>
                <MobileBoard>
                    <ResponsiveAppBar setSearch={setSearch} /> 
                </MobileBoard>
                <BoardLeft>
                    <VerticalNav />
                </BoardLeft>
                <BoardCenter>
                    <ShowAllGenres />
                </BoardCenter>
                <BoardRight>
                    <TrendingCategory />
                </BoardRight>
            </Dashboard>
        </Board>
       
    );
}

export default ShowAllPage;
