import React from 'react';

export const HomePage = () => {
    return (
    <div className='m-4 space-y-10'>
      <div className="space-y-4">
        <div className="text-2xl font-bold ">New</div>
        <img 
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
          alt="" 
          className="w-full h-72 object-cover rounded-2xl"
        />
      </div>

      <div className="space-y-4">
        <div className="text-2xl font-bold">Category</div>

        <div className="flex space-x-6">
          <div>
            <img 
            src="https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amFwYW5lc2UlMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" 
            alt=""
            className="w-20 h-20 object-cover rounded-full"
            />
            <div className="text-center">일식</div>
          </div>
 
          <div>
            <img 
            src="https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2hpbmVzZSUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" 
            alt=""
            className="w-20 h-20 object-cover rounded-full"
            />
            <div className="text-center">중식</div>
          </div>

          <div>
            <img 
            src="https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amFwYW5lc2UlMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" 
            alt=""
            className="w-20 h-20 object-cover rounded-full"
            />
            <div className="text-center">한식</div>
          </div>
          <div>
            <img 
            src="https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2hpbmVzZSUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" 
            alt=""
            className="w-20 h-20 object-cover rounded-full"
            />
            <div className="text-center">양식</div>
          </div>
        </div>

      </div>

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

      <div className="space-y-4">
        <div className="text-2xl font-bold">Today's Special</div>

        <div className="flex space-x-4">
          <img 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60" 
            alt="" 
            className="w-20 h-30 object-cover rounded-md"/>
          <div>
            <div className="text-lg font-semibold">식당 이름</div>
            <div className="text-gray-700">말이 필요 없는 서울 최고의 식당 중 하나</div>
            <div className="text-gray-500">서울시 강남구 청담동</div> 
          </div>
        </div>

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
