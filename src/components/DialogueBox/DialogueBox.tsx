import React, { useState, useEffect } from 'react';
import { FieldExtensionSDK } from '@contentful/app-sdk';
import { useSDK } from '@contentful/react-apps-toolkit';
import { Button } from '../Button/Button';
import './DialogueBox.css';

const handleQueryClick = (query: string, setCurrentImgData: Function, setShowImageSelection: Function) => {
	const API_KEY = '26645896-222fd5bcff1e2c64635c1e48a';
	const URL = "https://pixabay.com/api/?key=" + API_KEY + "&q="+ encodeURIComponent(query);

	fetch(URL)
			.then(response => response.json())
			.then(data => {
				setCurrentImgData(data);
			})
			.then(() => {
				setShowImageSelection(true);
			})
			.catch(() => {
			console.log('Issue with fetching PixaBay request')
	});
}

export const DialogueBox = () => {
	const sdk = useSDK<FieldExtensionSDK>();
	const [currentQuery, setCurrentQuery] = useState('');
	const [currentImgData, setCurrentImgData] = useState({}) as any;
	const [currentImgUrl, setCurrentImgUrl] = useState('none');
	const [showImageSelection, setShowImageSelection] = useState(true);

	useEffect(() => {
		sdk.field.setValue(currentImgUrl);

		console.log(currentImgData);
	}, [currentImgUrl]);

	return (
		<div className='dialogue-box-container'>
			<div className='dialogue-box-input-and-label-wrapper'>
				<label className='pixabay-query-label'>Pixabay Query:</label>
				<div className='dialogue-box-input-wrapper'>
					<input className='dialogue-box-input' onChange={(e) => setCurrentQuery(e.target.value)} value={currentQuery}></input>
					<Button className='dialogue-box-button' buttonText='Search' handleClick={() => handleQueryClick(currentQuery, setCurrentImgData, setShowImageSelection)}></Button>
				</div>
			</div>
			{
				!showImageSelection &&
				<div>
					<p className='selected-img-url-text'>Currently Selected Img Url:</p>
					<p>{currentImgUrl}</p>
				</div>
			}
			{
				showImageSelection && 
				<div className='dialogue-box-image-wrapper'>
					{
						currentImgData && currentImgData.hits && currentImgData.hits.map((img: any, i: number) => (
							<img onClick={() => {setCurrentImgUrl(img.largeImageURL); setShowImageSelection(false);}} src={img.previewURL} />
						))
					}
				</div>
			}
		</div>
	);
}