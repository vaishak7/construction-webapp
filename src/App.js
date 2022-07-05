import './App.css';
import Topbar from './components/topbar/topbar';
import Header from './components/header/header';
import Action from './components/action/action';
import Feature from './components/feature/feature';
import Facts from './components/facts/facts';
import Service from './components/service/service';
import Projectarea from './components/projectarea/projectarea';
import Content from './components/content/content';
import Subscribe from './components/subscribe/subscribe';
import News from './components/news/news';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
     <Topbar/>
     <Header/>
     <Action/>
     <Feature/>
     <Facts/>
     <Service/>
     <Projectarea/>
     <Content/>
     <Subscribe/>
     <News/>
     <Footer/>
    </div>
  );
}

export default App;
