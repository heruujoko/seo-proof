import React, { useEffect, useState } from 'react'

// https://prd-growth.s3.ap-southeast-1.amazonaws.com/public/grabfood-com/merchant-info/6-C221A3JHVKAYRN.json

const About = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();
        setData(JSON.stringify(json, null, 2));
      } catch (error) {
        console.error('Error fetching data:', error);
        setData('Error fetching data');
      }
    };

    fetchData();
  }, []);

  return (
    <div>This IS ABOUT {JSON.stringify(data)}</div>

  )
}
export default About