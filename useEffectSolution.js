import React, { useEffect, useRef, useState } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const isMounted = useRef(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const jsonData = await response.json();
        if (isMounted.current) {
          setData(jsonData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {
      isMounted.current = false; // Prevent state update after unmount
    };
  }, []);

  return (
    <View>
      {data ? (
        <Text>{JSON.stringify(data)}</Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default MyComponent;