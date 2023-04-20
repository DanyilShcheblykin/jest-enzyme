import './styles/global.scss'
import Navbar from './components/Navbar/Navbar';
import HeadLine from './components/headline';
import Button from './components/button';
import ListItem from './components/listItem';
import { connect } from 'react-redux'
import { fetchPosts } from './actions';
import { useState } from 'react';

// unit tests focus on testing individual pieces of code in isolation, while integration tests test how different pieces of code work together.

const tempArr = [{
  fName: 'Joe',
  lName: "Bloggs",
  email: "job@gmail.com",
  age: 24,
  onlineStatus: true
}]

function App(props: any) {
  const { posts, fetchPosts } = props;

  const [hideBtn, setHideBtn] = useState(false)


  const fetch = async () => {
    await fetchPosts();
    exampleMethod()
  }

   const exampleMethod=()=>{
    setHideBtn(true)
  }

  return (
    <div data-test='AppComponent'>
      <Navbar></Navbar>
      <section className='main'>
        <HeadLine tempArr={tempArr} header='Posts' descr='Click the button to render posts'></HeadLine>
        {!hideBtn && <Button buttonText='Get Posts' emitEvent={fetch}></Button>}

        {posts ? posts.map((item: any, index: number) => {
          return (
            <ListItem key={index} title={item.title} descr={item.descr} />
          )
        }) : null}
      </section>
    </div>
  )
}
const mapStateToProps = (state: any) => {
  return {
    posts: state.posts
  }
}
export default connect(mapStateToProps, { fetchPosts })(App);