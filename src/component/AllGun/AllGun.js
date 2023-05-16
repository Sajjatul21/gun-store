import React, { useEffect, useState } from 'react';
import SingleGun from '../SingleGun/SingleGun';

const AllGun = ({ increaserCount }) => {
    const [guns, setGuns] = useState([]);
    // console.log(guns)
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
            .then(res => res.json())
            .then(data => setGuns(data));
    }, [])
    return (
        <div className='mt-5'>
            <div className='my-4'>
                <h1 className='text-4xl text-center font-bold mt-4'>Wellcome to Gun Store.</h1>
                <p className='ml-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, est nisi dolores at enim nihil optio reiciendis. Quis, ullam numquam? Eaque ullam amet delectus culpa.</p>
            </div>


            <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ' >

                {
                    guns.map(gun => <SingleGun gun={gun} increaserCount={increaserCount}></SingleGun>)
                }
            </div>
        </div>

    );
};

export default AllGun;