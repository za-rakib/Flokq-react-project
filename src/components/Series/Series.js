import React, { useEffect, useState } from "react";
import classes from './Series.module.css'

const Series = () => {
  const [seriesData, setSeriesData] = useState();
  useEffect(() => {
    const url =
      "https://raw.githubusercontent.com/jagjotsinghparry/MCR-React-L1-1/master/feed/sample.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSeriesData(data));
  }, []);

  // value of series
  const getSeriesData =
    seriesData &&
    seriesData.entries.filter((series) => series.programType === "series");
  // value >= 2010
  const filterByYear =
    getSeriesData &&
    getSeriesData.filter((series) => series.releaseYear >= 2010);
  // ascending alphanumeric order
  const filteredByTitle =
    filterByYear &&
    filterByYear.sort(function (x, y) {
      let a = x.title.toUpperCase(),
        b = y.title.toUpperCase();
      return a === b ? 0 : a > b ? 1 : -1;
    });

  const firstTwentyOne = filteredByTitle && filteredByTitle.slice(0, 21);

  // getSeriesData && console.log(getSeriesData);
  // filterByYear && console.log(filterByYear);
  // filteredByTitle && console.table(filteredByTitle);
  firstTwentyOne && console.log(firstTwentyOne);
  // if () {}
  return (
    <div className="container mt-5">
      <div className="row">
        {firstTwentyOne && firstTwentyOne.map((data) => (
          <div className={`col-md-3 p-1  ${classes.cardData}`} key={data.title}>
            <img src={data.images["Poster Art"].url} alt={data.title} />
            <p>{data.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// description
// images
// programType
// releaseYear
// title

// images:
// Poster Art:
// url

export default Series;
