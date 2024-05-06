import React, { useEffect, useState } from "react";
// import { format } from "date-fns";
// import itLocale from "date-fns/locale/it";
import { peopleApi } from "../utilities/funzioniApi";
import DescrzioneAperto from "./DescrzioneAperto";
import { Link, useParams } from "react-router-dom";

const People = () => {
  const [people, setPeople] = useState([]);

  const { ID } = useParams();

  const peopleFetch = async () => {
    const peopleData = await peopleApi();
    console.log("people json", peopleData);
    setPeople(peopleData);

    people.map((movie) => {
      console.log("map",movie);
    });
  };
  
  useEffect(() => {
    peopleFetch();
  }, []);

  return (
    <div className="max-w-5xl w-full mx-auto max-lg:p-4 ">
      <h1 className="font-bold text-4xl my-4">Trending People</h1>
      <div className="overflow-x-auto whitespace-nowrap">
        {people.length > 0 && (
        <div className="flex space-x-4 p-4">
          {people.map((movie) => (
            <Link
              to={`/movies/movie/${movie.id}`}
              className="flex-none w-40 hover:scale-110 transition-all"
              key={movie.id}>
              <div className="relative">
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.profile_path}`}
                  alt="No img"
                  className="rounded-lg"
                />
                <div className=" absolute top-2 right-2  h-9 w-9 flex justify-center items-center bg-zinc-800 rounded-full">
                  <p>{Math.round(movie.popularity * 10) / 10}</p>
                </div>
                <div className=" text-white p-2 w-full text-center">
                  <h2 className="text-xs font-semibold whitespace-normal">
                    {movie.title}
                  </h2>
                  {/* <p className="text-xs">
                    {format(new Date(movie.release_date), "dd MMM, yyyy", {
                      locale: itLocale,
                    })}
                  </p> */}
                </div>
              </div>
            </Link>
          ))}
        </div>
        )}
      </div>
      {/* {ID && <DescrzioneAperto movieID={ID} />} */}
    </div>
  );
};

export default People;
