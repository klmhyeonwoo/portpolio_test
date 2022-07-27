import Title from "./Title";
import styles from './Portfolio.module.css';
import DetailContent from "./DetailContent";
import Content from "./Content";

const Portfolio = () => {
    return (
        <Content>
            <Title text={"Project & Roles"}/>
            <DetailContent>
                <a href="https://github.com/klmhyeonwoo" className={styles.link} target={"_blank"}>현우의 깃허브 실험실</a>
                <p>- 깃허브에서 다양한 것들을 만들어보고, 실험을 해보고 있습니다.</p>
                <a href="https://h4vebeauty.com" className={styles.link} target={"_blank"}>운영중인 헤뷰 브랜드 페이지</a>
                <p>- 크리에이터 채널 운영을 위해 브랜드 페이지를 제작하였습니다.</p>
            </DetailContent>
        </Content>
    )
}

export default Portfolio;