import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import axios from 'axios';
import {styles} from '../theme'; 

interface ApiResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const ExampleComponent = () => {
  const [data, setData] = useState<ApiResponse | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get<ApiResponse>(
        'https://jsonplaceholder.typicode.com/posts/1',
      );
      if (response.status === 200) {
        setData(response.data);
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = () => {
    fetchData();
  };

  return (
    <>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Datos desde la API:</Text>
        {data ? (
          <View>
            <Text>{`UserId: ${data.userId}`}</Text>
            <Text>{`Id: ${data.id}`}</Text>
            <Text>{`Título: ${data.title}`}</Text>
            <Text>{`Cuerpo: ${data.body}`}</Text>
          </View>
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
      <Button title="Refresh" onPress={handleRefresh} />
    </>
  );
};

export default ExampleComponent;
