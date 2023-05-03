import { BodyDiv, Topper, ShareBox, LinkKakao } from "./style";
import { Link, useLocation } from "react-router-dom";
import FooterLogoColor from "../../styles/global/footerLogoColor";
import clipboardCopy from 'clipboard-copy';

function Body() {
    
    const location = useLocation();
    
    // teams에서 가져온 url, teamId
    const url = location.state.url;
    const teamId = location.state.teamId;
    const teamName = location.state.teamName;
    
    // 클립보드에 복사하기
    function copyToClipboard() {
        const link = `http://localhost:3000/upload/${teamName}`;
        clipboardCopy(link);
        alert('링크가 복사되었습니다 !');
    }

    return (
        <BodyDiv>
            <ShareBox>
                <p>
                    아래의 링크를 공유하여 <br />
                    모두의 시간표를 모아주세요 !
                </p>
                <Link to={`/upload/${teamName}`} state={{url:url, teamId:teamId}}>
                {`http://localhost:3000/upload/${teamName}`}
                </Link>
                
                <LinkKakao>
                    <div onClick={copyToClipboard}>
                    </div>
                    <div>
                    </div>
                </LinkKakao>
            </ShareBox>
            
            <Link to={`/upload/${teamName}`} state={{url:url, teamId:teamId}} id="next">다음</Link>
            <FooterLogoColor></FooterLogoColor>
        </BodyDiv>
    )
}

export default Body;