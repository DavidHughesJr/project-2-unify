import { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Bookmarker from "./Bookmarker"
import Link from "@mui/material/Link"
import { MoviesBtnContainer, MoviesContainer, WatchNowBtn, CategoryTypography } from "./MaterialStyles"
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay } from 'swiper'
import 'swiper/css';
import tmdbApi, { tvType } from "../api/tmdbApi"
import { movieType, category, tvList } from "../api/tmdbApi"
import { apiConfig } from "../api/apiConfig"
import 'swiper/css/autoplay'




export default function NewestSubcategory() {

    const [movieItems, setMovieItems] = useState([])
    const [topRatedMovies, setTopRatedMovies] = useState([])

    useEffect(() => {
        const getMovies = async (pageNum = 1) => {
            try {
                const response = await tmdbApi.getMoviesList(movieType.popular, pageNum)
                const data = await response.json()
                setMovieItems(data.results)

            } catch (error) {
                console.error(error);
            }
        }
        const getTopRatedMovies = async (pageNum = 1) => {
            try {
                const response = await tmdbApi.getMoviesList(movieType.top_rated, pageNum)
                const data = await response.json()
                setTopRatedMovies(data.results)
            } catch (error) {
                console.error(error);
            }
        }
        getTopRatedMovies()
        getMovies()
    }, [])
    return (

        <Box>
            <div>
                <Swiper
                    modules={Autoplay}
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={true}
                    navigation
                    pagination={{ clickable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}>

                    {
                        movieItems.map((movie) => {
                            return (
                                <SwiperSlide>
                                    <div
                                        style={{ width: "100%", height: '35rem'}}
                                    >
                                        <img
                                            style={{ width: "100%", height: "100%", objectFit: 'cover' }}
                                            src={`${apiConfig.originalImage(movie.backdrop_path)}`} alt="New movies"
                                        />
                                        <div style={{ position: 'relative', bottom: '10rem', left: '5%' }}>
                                            <div> <Typography sx={{ background: '-webkit-linear-gradient(#eaecef, #b9c1c9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bolder' }} variant="h4"> {movie.title} </Typography>  </div>
                                            <div> <Typography sx={{ color: '#eaecef' }} variant="subtitle"> {movie.release_date} </Typography>  </div>
                                            <Link sx={{ textDecoration: 'none' }} href={''}>
                                                <WatchNowBtn> Watch Now </WatchNowBtn>
                                            </Link>
                                            <Bookmarker />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )

                        })
                    }
                </Swiper>
            </div>
            <CategoryTypography variant="subtitle2"> Now Playing </CategoryTypography> 
            <MoviesContainer>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => (swiper)}>
                    {
                        movieItems.map((movie) => {
                            return (
                                <SwiperSlide>
                                    <div key={movie.id} style={{ width: '100%' }}>
                                        <img style={{ width: '100%' }} src={`${apiConfig.w500Image(movie.poster_path)}`} alt="New movies" />
                                        <MoviesBtnContainer>
                                            <Link sx={{ textDecoration: 'none' }} href={''}>
                                                {/* <WatchNowBtn>  Watch Now </WatchNowBtn> */}
                                            </Link>
                                            {/* <Bookmarker /> */}
                                        </MoviesBtnContainer>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
            </MoviesContainer>
            <Box>
                <CategoryTypography variant="subtitle2"> Top Rated Movies </CategoryTypography> 
                <div style={{ display: 'flex', width: "100%", height: "100%" }} >
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}>
                        {
                            topRatedMovies.map((movie) => {
                                return (
                                    <SwiperSlide>
                                        <div style={{ width: '100%' }}>
                                            <img style={{ objectFit: 'cover', height: '100%', width: '100%' }} src={`${apiConfig.originalImage(movie.backdrop_path)}`} alt="New movies" />
                                            <div style={{ position:'relative', bottom: '2.5rem', left: '5%' }}>
                                                <Link sx={{ textDecoration: 'none' }}>
                                                    <Typography sx={{ color: 'white', fontWeight: 'bold', textShadow: '0 0 5px black'  }} variant="caption"> {movie.title} </Typography>
                                                    <Typography sx={{color: 'lightgrey'}} variant="caption"> , {movie.release_date} </Typography>
                                                </Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </Box>
        </Box>

    )
}