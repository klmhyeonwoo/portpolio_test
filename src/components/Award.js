import Content from './Content';
import DetailContent from './DetailContent';
import Title from './Title';

const Award = () => {
    return (
        <Content>
            <Title text={"Award & Experience"}/>
            <DetailContent>
                <p>2017 멋쟁이사자처럼 5기 교육생</p>
                <p>2017 현대오토에버 어플리케이션 기획 금상</p>
                <p>2017 현대오토에버 어플리케이션 개발 우수상</p>
                <p>2018 멋쟁이사자처럼 6기 강남대학교 대표</p>
                <p>2018 강남대학교 웰텍 사업단 복지기술 연구 및 팀장</p>
                <p>2018 SOPT 21st 디자인파트</p>
                <p>2020 헤브뷰티 기획자 및 크리에이터</p>
            </DetailContent>
        </Content>
    )
}

export default Award;