import React from 'react';
import LeftGroup from '../../components/leftGroup/LeftGroup';
import Post from '../../components/post/Post';

const Group = () => {
    return (
        <>
            <LeftGroup></LeftGroup>  
           <div className='col-span-8 h-screen ml-28 overflow-y-auto overflow-hidden no-scrollbar pb-24'>
            <Post></Post>
            </div>         
        </>
    );
};

export default Group;