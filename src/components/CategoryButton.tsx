import React from 'react';

type CategoryButtonProps = {
    label: string
}

export const CategoryButton:React.FC<CategoryButtonProps> = ({label}) => {
    return (
        <div>
        <img 
        src="https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amFwYW5lc2UlMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" 
        alt=""
        className="w-20 h-20 object-cover rounded-full"
        />
        <div className="text-center">{label}</div>
      </div>
    );
};