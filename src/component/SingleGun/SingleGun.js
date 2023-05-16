import React from 'react';

const SingleGun = (props) => {
    // console.log(props);
    const { gun, increaserCount } = props;
    // console.log(gun)
    const { action, bullet, catagory, img, name, price } = gun;
    return (
        <div>
            <div className="card w-full  h-full bg-base-100 shadow-xl">
                <figure >
                    <img className='w-96 h-44 rounded-xl' src={img} alt="Shoes" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div>

                        <button className="btn btn-xs btn-outline mr-2">{action}</button>
                        <button className="btn btn-xs btn-outline ">{bullet}</button>
                    </div>

                    <div className="mt-4 ">
                        <button onClick={() => increaserCount()} className="btn btn-sm mr-2  btn-info">Add To Cart</button>
                        <button className="btn btn-sm  btn-success">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleGun;