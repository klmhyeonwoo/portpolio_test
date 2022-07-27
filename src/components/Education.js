import Content from './Content';
import DetailContent from './DetailContent';
import Title from './Title';

const Education = () => {
    return (
        <Content>
            <Title text={"Education"}/>
            <DetailContent>
                <p>2016 구성고등학교 졸업</p>
                <p>2017 강남대학교 재학</p>
            </DetailContent>
        </Content>
    )
}

export default Education;