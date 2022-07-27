import Title from "./Title";
import DetailContent from "./DetailContent";
import Content from "./Content";

const Project = () => {
    return (
        <Content>
        <Title text={"Project & Roles"}/>
            <DetailContent>
                <p>2017 장애인 캠퍼스 네비게이션 어플 ‘이음캠퍼스’ 제작 </p>
                <p>- 기획 및 어플리케이션 디자인 </p>

                <p>2018 멋쟁이사자처럼 해커톤 쇼핑몰 후기 모음 서비스 MOAMOA 제작 </p>
                <p>- 웹 페이지 기획 및 프론트엔드 개발 </p>

                <p>2018 외국인과의 커뮤니티 사이트 LANG 제작 </p>
                <p>- 어플리케이션 디자인 및 웹 페이지 개발</p>

                <p>2018 강남대학교 축제페이지 ‘강낭콩’ 개발</p>

                <p>2021 헤브뷰티 브랜딩 페이지 제작 </p>
                <p> - 웹 페이지 프론트엔드 개발</p>
            </DetailContent>
        </Content>
    )
}

export default Project;