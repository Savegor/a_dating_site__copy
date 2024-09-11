import { Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import MainMenu from './components/MainMenu/MainMenu';
import ChatPage from './components/Pages/ChatPage/ChatPage';
import PostsPage from './components/Pages/PostsPage/PostsPage';
import MiniChats from './components/MiniChats/MiniChats';
import ProfilePage from './components/Pages/ProfilePage/ProfilePage';
import MobileMainMenu from './components/Mobile/MobileMainMenu/MobileMainMenu';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { initialize } from './redux/app-reducer'



const App = (props) => {

  //Добавить useEffect initialize
  useEffect(() => {
    props.initialize()
  }, [])

  if (!props.initialized){
    //Вернуть предзагрузку
  }

  return (
    <>
      {/* <div className="background"></div> */}
      <div className="overlay"></div>
      <Header/>
      <div className='container'>
        <div className='row'>
          <MainMenu/>
          <div className='col'>
            <Routes>
              <Route path='/profile/:user_id' element={<ProfilePage/>}/>
              <Route path='/posts' element={<PostsPage/>}/>
              <Route path='/chats/:chatId?' element={<ChatPage/>}/>
              <Route path="/" element={<Navigate to="/posts" replace />} />
            </Routes>
          </div>
          <MiniChats/>
        </div>
        <MobileMainMenu/>
      </div>
      
    </>
  );
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initialize })(App);