import { useEffect, useState, useRef } from 'react';
import Layout from '../../common/layout/Layout';
import './Detail.scss';
import { useParams } from 'react-router-dom';

export default function Detail() {
	console.log('re-render');
	console.log('-----------------');
	const { id } = useParams();
	const [YoutubeData, setYoutubeData] = useState(null);
	console.log(YoutubeData);

	const fetchSingleData = async () => {
		const api_key = process.env.REACT_APP_YOUTUBE_API;
		const baseURL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${api_key}&part=snippet&id=${id}`;

		const data = await fetch(baseURL);
		const json = await data.json();
		setYoutubeData(json.items[0].snippet);
	};

	useEffect(() => {
		console.log('useEffect');
		fetchSingleData();
	}, []);

	return (
		<Layout title={'Detail'}>
			{/* Optional Chaing : 객체명?.property 해당객체에 값이 없을땐 무시하고 값이 있을때만 property접근 */}

			<div className='videoBox'>
				<iframe src={`https://www.youtube.com/embed/${YoutubeData?.resourceId.videoId}`} title={YoutubeData?.title}></iframe>
			</div>
			<h3>{YoutubeData?.title}</h3>
			<p>{YoutubeData?.description}</p>
		</Layout>
	);
}
