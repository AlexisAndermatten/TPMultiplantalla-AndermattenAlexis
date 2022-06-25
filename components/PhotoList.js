import React, { useState, useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';
import axios from 'axios';
import PhotoDetail from './PhotoDetail';

const PhotoList = (props) => {
	const [ photos, setPhotos ] = useState(null);

	useEffect(() => {
		const getPhotos = async () => {
			let response;
			try {
				response = await axios.get(
					`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photoset_id=${props
						.route.params.albumId}&user_id=137290658%40N08&format=json&nojsoncallback=1`
				);
				setPhotos(response.data.photoset.photo);
			} catch (error) {
				console.log(error);
			}
		};
		getPhotos();
	}, []);

	const renderAlbums = ({ item }) => (
		<PhotoDetail
			key={item.title}
			title={item.title}
			imageUrl={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`}
		/>
	);

	return !photos ? (
		<View style={{ display: 'flex' }}>
			<Text>Loading...</Text>
		</View>
	) : (
		<View style={{ display: 'flex' }}>
			<FlatList 
			data={photos} 
			renderItem={renderAlbums} 
			keyExtractor={(item) => item.id} 
			numColumns={2}
			/>
		</View>
	);
};

export default PhotoList;
