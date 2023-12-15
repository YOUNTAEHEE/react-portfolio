import './Footer.scss';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import { useSelector } from 'react-redux';
//npm i react-icons

export default function Footer() {
	const MemberData = useSelector(store => store.memberReducer.members);
	console.log(MemberData);

	return (
		<footer className='Footer'>
			<h1>Dcodelab</h1>

			<p>2023 Dcodelab &copy; All Rights Reserved.</p>
			<p>{MemberData && `${MemberData[0].position}:${MemberData[0].name}`}</p>

			<ul>
				<li>
					<FaFacebookF />
				</li>
				<li>
					<FaTwitter />
				</li>
				<li>
					<FaYoutube />
				</li>
			</ul>
		</footer>
	);
}