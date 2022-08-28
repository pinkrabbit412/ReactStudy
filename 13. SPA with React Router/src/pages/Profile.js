import { useParams } from "react-router-dom";

const userData = {
    pinkrabbit412: {
        name: "악동분홍토끼",
        country: "South Korea"
    },
    hgd135489: {
        name: "홍길동",
        country: "Joseon"
    }
}

const Profile = () => {
    const params = useParams();
    const profile = userData[params.target_user_name];

    return(
        <>
        <h1>사용자 프로필 조회</h1>
        { profile ?
            (<div>
                <h2>이름: {profile.name}</h2>
                <h2>국적: {profile.country}</h2>
            </div>)
            :
            <p>해당 이름의 프로필이 존재하지 않습니다.</p>
        }       
        </>
    );
};

export default Profile;