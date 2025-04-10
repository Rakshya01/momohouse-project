import React, { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import { NavLink } from "react-router-dom";

function Menu() {
  const [data, setData] = useState([]);
  const getProduct = async () => {
    let data = await fetch("https://dummyjson.com/recipes");
    data = await data.json();
    console.log(data.recipes);
    setData(data.recipes)
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <div className="pt-16">
        <div>
          {data.length > 0 ? (
            <div className="flex my-20 flex-wrap gap-5 justify-center">
              {data.map((data) => {
                return (
                  <div className="shadow-2xl shadow-gray-400 rounded-2xl " key={data.id}>
                    <img className="h-52 rounded-2xl" src={data.image}/>
                    <NavLink to={`/productdescription/${data.id}`}>

                    <div className="flex flex-col justify-center items-center">
                    <p className="text-orange-500">Rs.{data.caloriesPerServing}</p>
                    <p>{data.name}</p>
                    <p className="text-orange-800">{data.rating}</p>
                    </div>
                    </NavLink>
                  </div>
                );
              })}
            </div>
          ) : (
            <div>
              <Loading />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Menu;
