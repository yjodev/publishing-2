import React, { useEffect, useState } from 'react';
import { CategoryButton } from '../components/CategoryButton';
import { MovieCard } from '../components/MovieCard';
import nowPlayingImg from '../assets/images/image2.jpg';
import topRatedImg from '../assets/images/image3.jpg';
import upcomingImg from '../assets/images/image4.jpg';

const API_KEY = 'd7cfdd1572e06bb0e7952f1b466a0ee5';


export type Category = {
  id: number;
  label: string;
  url: string;
  image: string;
};

const CATEGORY_LIST = [
  { id: 0, label: '현재 상영작', url: '/now_playing', image: nowPlayingImg },
  { id: 1, label: '별점 높은 영화', url: '/top_rated', image: topRatedImg },
  { id: 2, label: '개봉 예정작', url: '/upcoming', image: upcomingImg },
];

export type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
};


export const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [categoryIndex, setCategoryIndex] = useState(0);

  const setCategory = (index: number) => {
    setCategoryIndex(index);
  }


  const getData = async (categoryIndex: number) => {
    const url = `https://api.themoviedb.org/3/movie${CATEGORY_LIST[categoryIndex].url}?api_key=${API_KEY}&language=ko-KR&page=1`
    const response = await fetch(url);
    console.log(response);
    if (response.status == 200) {
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
          src="https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdmllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
          className="w-full h-72 object-cover rounded-2xl"
        />
      </div>

      <div className="space-y-4">
        <div className="text-2xl font-bold">Category</div>

        <div className="flex space-x-6">
          {CATEGORY_LIST.map((data) => (<CategoryButton category={data} onClick={setCategory} />))}

        </div>
      </div>


      {/* <div>
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
        </div> */}


      <div className="space-y-4">
        <div className="text-2xl font-bold">Today's Special</div>
        {!isLoading && movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}

        <div className="border-b-2"></div>

        <div className="space-y-4">
          <div className="text-2xl font-bold">Today's Actor</div>

          <div className="flex space-x-4">
            <img
              src="https://images.unsplash.com/photo-1620845417099-57e9635a914c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2lsdWV0dGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt=""
              className="w-20 h-30 object-cover rounded-md" />
            <div>
              <div className="text-lg font-semibold">한소희</div>
              <div className="text-gray-700">말이 필요 없는 최고의 배우</div>
              <div className="text-gray-500">알고있지만 (2021) </div>
            </div>
          </div>

          <div className="border-b-2"></div>

        </div>
      </div>
    </div>
  );
};
