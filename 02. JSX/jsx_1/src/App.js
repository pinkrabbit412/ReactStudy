import logo from './logo.svg';
import './App.css';

// #1. 상수 선언 부분
const name = '악동분홍토끼';
const app_style = {
	backgroundColor: '#252830',
	color: '#FCACD3',
	fontSize: '48px',
	fontWeight: 'bold',
	padding: 16 // 단위 미지정시 픽셀(px)로 간주됨
};

// #2. 함수 선언 부분
function App() {
	return (
		<>
		<div className="App" style={app_style}>
			{name}님, 환영합니다!
		</div>
		<div className="reverseStyle">
		이 페이지는 테스트 페이지입니다.
		</div>
		</>
	);
}

export default App;
