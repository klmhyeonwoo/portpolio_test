import TextBox from './components/TextBox';
import styles from './App.module.css';
import profile_rotate from './images/profile_rotate.png';
import Education from './components/Education';
import Award from './components/Award';
import Project from './components/Project';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className={styles.App}>
      <img className={styles.img} src={profile_rotate} alt="프로필 사진"/>

      <header className={styles.header}>
        <p className={styles.name}> 안녕하세요, 주니어 개발자 김현우입니다. </p>
        <p className={styles.introduce}> 기획자이자, 개발자가 되고 싶은 김현우입니다. <br/>
            소프트웨어 공학을 전공하고, 다채로운 사람이 되고자 <br/>
            디자인과 기획 분야, 그리고 사람들이 소통하는 방법을 공부합니다. <br/> <br/>

            사람들에게 편리함과 도움을 제공하는 매체에 관심이 많습니다. <br/>
            때문에 다양한 부분을 도전하고, 탐구하며 다양한 프로젝트를 진행해왔습니다. <br/>
        </p>
        <hr className={styles.line}/>
      </header>

      <section className={styles.content}>
          <Education/>
          <Award/>
          <Project/>
          <Portfolio/>
      </section>

    </div>
  );
}

export default App;
