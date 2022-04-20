import React, { useEffect, useState } from 'react';
import { CategoryButton } from '../components/CategoryButton';
import { MovieCard } from '../components/MovieCard';
const API_KEY = 'd7cfdd1572e06bb0e7952f1b466a0ee5';

export type Category = {
  id: number;
  label: string;
  url: string;
 };
 
 const CATEGORY_LIST = [
  { id: 0, label: '인기있는영화', url: '/popular' },
  { id: 1, label: '현재 상영작', url: '/now_playing' },
  { id: 2, label: '별점 높은 영화', url: '/top_rated' }
 ];

export type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
 };
 

export const HomePage = () => {
  const [isLoading,setIsLoading] = useState(true);
  const [movies,setMovies] = useState<Movie[]>([]);
  const [categoryIndex, setCategoryIndex] = useState(0);

  const setCategory = (index:number) => {
    setCategoryIndex(index);
  }


  const getData = async (categoryIndex:number) => {
    const url = `https://api.themoviedb.org/3/movie${CATEGORY_LIST[categoryIndex].url}?api_key=${API_KEY}&language=ko-KR&page=1`
    const response = await fetch(url);
    console.log(response);
    if (response.status == 200 ) {
      // 데이터 잘 왔을 때 실행할 내용
      const data = await response.json();
      console.log(data);

      setMovies(data.results);
    } else {
      throw new Error("데이터를 받아오지 못했습니다.");
    }
    setIsLoading(false);
  }

useEffect(() => {
  getData(categoryIndex);
}, [categoryIndex])

    return (
    <div className='m-4 space-y-10'>
      <div className="space-y-4">
        <div className="text-2xl font-bold ">New</div>
        <img 
          src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="" 
          className="w-full h-72 object-cover rounded-2xl"
        />
      </div>

      <div className="space-y-4">
        <div className="text-2xl font-bold">Category</div>

        <div className="flex space-x-6">
          {CATEGORY_LIST.map((data) => (<CategoryButton category={data} onClick={setCategory}/>))}


        </div>

      </div>

{/*
      <div>
        <div className="text-2xl font-bold mb-4">List</div>
        
        <div className="border p-4 rounded-md">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2hpbmVzZSUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
              alt=""
              className="w-full h-60 object-cover rounded-2xl"
              />
            <div className="mt-4">
              <div className="text-lg font-semibold">Card Title</div>
              <div className="text-gray-500">
                Card contents. Asfnjawfnjsdfn nejkdsnfklsdnkl.
              </div>
              <div className="mt-4 flex justify-end space-x-3">
                <div className="bg-gray-800 rounded-md text-white text-center py-2.5 px-4">
                  Button
                </div>
                <div className="bg-gray-800 rounded-md text-white text-center py-2.5 px-4">
                  Button
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    */}
     

      <div className="space-y-4">
        <div className="text-2xl font-bold">Today's Special</div>
        {!isLoading && movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      

        <div className="border-b-2"></div>

        <div className="space-y-4">
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60" 
          alt="" 
          className="w-full h-60 object-cover rounded-2xl"/>
          <div className="space-y-2">
            <div className="text-lg font-semibold">이화여대 아맛나 식당</div>
            <div>
              <div className="text-gray-700">서울특별시 서대문구 대현동 11-1</div>
              <div className="text-gray-700">02-1234-5678 </div>
              <div className="text-gray-700">MON-SUN 12:00PM - 9:00PM</div>
            </div>
          </div>
          <div className="bg-gray-900 rounded-3xl text-white text-center py-2.5 px-4">
                  네이버 지도로 길찾기
                </div>
        </div>
      </div>
    </div>
  );
};
