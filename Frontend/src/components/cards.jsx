import React from 'react';

const Cards = ({ item }) => {
    console.log(item)
    return (
        <>
            <div>
                <div className="mt-5 mb-10 ml-8 py-10" >
                    <div className="card card-side  bg-base-100 shadow-xl cursor-pointer" style={{ width: "400px", height: "450px" }} >
                        <div  >
                            <figure className='m-5'><img className=' w-90  rounded-xl' src={item.image} alt="image" /></figure>
                        </div>

                        <div className="card-body">
                            <h6 className="card-title">{item.name}</h6>
                            <p className='  font-normal' > Auhthor : {item.author}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-outline  hover:text-red-300 duration-200">Open Here </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Cards;
