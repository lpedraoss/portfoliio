import  { useEffect, useState } from 'react';

const UseDataProduct = () => {
  const [project, setproject] = useState([]);
  const url = "https://646d4d739c677e232189e51a.mockapi.io/project";
  useEffect(() => {
    fetchData(url);
  }, []);

  const fetchData = async (url:string) => {
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setproject(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return { project, url, fetchData };
};

export default UseDataProduct;