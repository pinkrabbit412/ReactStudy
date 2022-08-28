import { useLocation, useSearchParams } from "react-router-dom";

const About = () => {
    const location = useLocation();
    const [search_params, setSearchParams] = useSearchParams();
    const UID = search_params.get("UID");
    const mode = search_params.get("mode");

    const whenIncreaseUIDButtonClicked = () => {
        const nextUID = ( UID === null ? 1 : ( parseInt(UID) + 1 ) );
        setSearchParams({UID: nextUID, mode});
    };

    const whenModeToggleButtonClicked = () => {
        setSearchParams({mode: (mode === "true" ? false : true), UID});
    };


    return(
        <>
        <h1>정보</h1>
        <p>리액트 라우터 연습 프로젝트.</p>
        <hr />

        <div>
            사람들의 잔디가 위에 북간도에 벌레는 까닭입니다. 하나에 별 비둘기, 어머니, 없이 우는 봄이 봅니다. 같이 나는 이름과, 이런 보고, 너무나 듯합니다. 불러 나는 당신은 새겨지는 어머니, 피어나듯이 나의 계십니다. 걱정도 내 아무 위에 까닭이요, 하나에 봅니다. 멀리 시와 북간도에 밤이 하늘에는 같이 가난한 어머니, 있습니다. 위에도 가을로 밤이 지나가는 계집애들의 무엇인지 차 무덤 별 까닭입니다. 봄이 지나가는 남은 봅니다. 청춘이 같이 릴케 가을 이름과, 듯합니다. 쉬이 잔디가 별 불러 봅니다. 무덤 흙으로 마디씩 까닭이요, 가슴속에 하나에 있습니다.
        </div>
        <div>
            Github URL: <a href="https://github.com/pinkrabbit412">https://github.com/pinkrabbit412</a>
        </div>
        <br />
        <p>쿼리스트링: {location.search}</p><br />
        (UID: {UID} / 모드 설정: {mode})
        <br />
        <button onClick={whenIncreaseUIDButtonClicked}>UID + 1</button>
        <button onClick={whenModeToggleButtonClicked}>모드 활성화/비활성화</button>
        </>
    );
};

export default About;