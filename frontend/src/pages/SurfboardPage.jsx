import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/breadcrum/Breadcrum';
import SurfboardDisplay from '../components/surfboardDisplay/SurfboardDisplay';
import RelatedSurfboards from '../components/relatedSurfboards/RelatedSurfboards';

const SurfboardPage = () => {
  const { category, surfboardId } = useParams();
  const [ surfboard, setSurfboard ] = useState({});
  const [ allSurfboards, setAllSurfboards ] = useState([]);

  console.log(allSurfboards)

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch(`/${category}.json`);
        if (!response.ok) {
          throw new Error(`Failed to fetch ${category} data`);
        }
        const data = await response.json();
        const foundSurfboard = data.Data.find(
          (item) => item.id === parseInt(surfboardId)
        );
        if (foundSurfboard) {
          setSurfboard(foundSurfboard);
        } else {
          throw new Error(`Surfboard with ID ${surfboardId} not found in ${category}`);
        }
      setAllSurfboards(data.Data); // Set all surfboards data
      } catch (error) {
        console.error(`Error fetching ${category} data:`, error);
      }
    };

    fetchData();
  }, [category, surfboardId]);


  return (
    <div>
      <Breadcrum surfboard={surfboard} />
      <SurfboardDisplay surfboard={surfboard} />
      <RelatedSurfboards allSurfboards={allSurfboards} chosenSurfboard={surfboard}/>
    </div>
  );
};

export default SurfboardPage;
