import React from 'react'
import { Link } from 'react-router-dom'

function SingleItem({ foods }) {
    return (
        <>
            <section class="py-5">
                <div class="container px-4 px-lg-5 mt-5">
                    <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-between">
                        {foods.map((food)=> (
                            <div class="col mb-5">
                                <div key={food.id} class="card h-100">

                                    <img class="card-img-top" src={food.image_url} alt="..." height={'200'}/>

                                    <div class="card-body p-4">
                                        <p>{food.description.slice(0,25)}......</p>
                                        <div class="text-center">

                                            <h5 class="fw-bolder">{food.name}</h5>

                                           {food.price} <i class="fa-solid fa-indian-rupee-sign"></i>
                                        </div>
                                    </div>

                                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <Link to={`/payment/${food._id}`}><div class="text-center"><a class="btn btn-outline-success mt-auto" href="#">Order Now</a></div></Link>
                                    </div>
                                </div>
                            </div>
                        ))
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleItem