import React, { useEffect, useState } from 'react'
import { getOneFoodAPI } from '../services/allAPI'
import { useParams } from 'react-router-dom'
import Checkout from '../components/Checkout';


function Payment() {

  const [food, setFood] = useState({});
  const [count,setCount]=useState(1)
  const [total,setTotal]=useState(0)
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchSingleFood = async (id) => {
      try {
        const response = await getOneFoodAPI(id);
        if (response.status === 200) {
          setFood(response.data)
        }

      } catch (error) {
        console.error('Error fetching food:', error);
      }
    };

    if (id) {
      fetchSingleFood(id);
    }
  }, [id]);



  useEffect(() => {
    console.log(food);
  }, [food]);

  useEffect(()=>{
    setTotal(food.price*count)
  })

  return (
    <div>
      <section class="py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="row gx-4 gx-lg-5 align-items-center">
            <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src={food.image_url} alt="..." /></div>
            <div class="col-md-6">
              <div class="small mb-1">SKU: BST-498</div>
              <h1 class="display-5 fw-bolder">{food.name}</h1>
              <div class="fs-5 mb-5">
                <span class="text-decoration-line-through m-2"><i class="fa-solid fa-indian-rupee-sign"></i>{food.price*2} </span>
                <span> <i class="fa-solid fa-indian-rupee-sign"></i>{food.price}</span>
              </div>
              <p class="lead">{food.description} <br /></p>
              <div class="d-flex">
                <input class="form-control text-center me-3" id="inputQuantity" type="number" style={{ "max-width": "8rem" }} placeholder='count'
                onChange={(e)=>setCount(e.target.value)} />
                <button class="btn btn-outline-dark flex-shrink-0" type="button">total={total}</button>
                <button class="btn btn-outline-dark flex-shrink-0" type="button">
                  <i class="bi-cart-fill me-1"></i>
                 <Checkout/>Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-5 bg-light">
        <div class="container px-4 px-lg-5 mt-5">
          <h2 class="fw-bolder mb-4">Related products</h2>
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div class="col mb-5">
              <div class="card h-100">
                <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Fancy Product</h5>
                    $40.00 - $80.00
                  </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>
    </div>
  )
}

export default Payment