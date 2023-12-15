import { useSelector } from 'react-redux';
import './Visual.scss';

export default function Visual() {
	const Vids = useSelector(store => store.youtubeReducer.youtube);
	return (
		<figure className='Visual'>
			{
				//Vids의 유무로 에러처리를 할 수 없는 이유
				//설사 데이터 반환에 실패하더라도 Vids에는 undefined라는 값이 들어가 있기때문에
				//데이터반환에 실패해서 분기처리 하기 위해서는 err객체에만 있는 message라는 property로 분기처리
				//Vids뒤에 무조건 optionial chaing처리를 하는 이유는
				//해당 리액트가 조건문을 읽을때 Vids값이 undefined이기 떄문에 undefined에 message, map 프로퍼티 접근 자체가 구문 오류이기 때문에 초기 구문오류 에러를 피하기 위함
				Vids?.message ? (
					<h1>{Vids?.message}</h1>
				) : (
					Vids?.map((vid, idx) => {
						console.log(vid);
						if (idx >= 4) return null;
						return (
							<article key={vid.id}>
								<div className='pic'>
									<img src={vid.snippet.thumbnails.default.url} alt={vid.snippet.title} />
								</div>
							</article>
						);
					})
				)
			}
		</figure>
	);
}