import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function Header(props) {
  return <header>
    <h1><a href="/" onClick={(event) => {
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>
}

function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id} ><a id={t.id} onClick={(event) => { //number값인 id를 태그의 속성으로 넘기면 string이 된다. typescript를 쓰는이유...
      event.preventDefault();
      props.onChangeMode(Number(event.target.id) ); //t.id 그리고 문자를 숫자로 바꿈
    }}
      href={"/read/" + t.id} >{t.title}
    </a></li>);
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}
function Create(props){
  return<article>
    <h2>Create</h2>
    <form onSubmit={event=>{
      event.preventDefault();
      const title = event.target.title.value //event 발생한 태그 event.target == <form> 에서 name이 title인거 에 값을 가져와
      const body = event.target.body.value
      props.onCreate(title, body);
    }}>
      <p><input type='text' name="title" placeholder='title'></input></p>
      <p><textarea name='body' placeholder='body'></textarea></p>
      <p><input type="submit" value="Create" ></input></p>
    </form>
  </article>
}
function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}
function Update(props){

}
function App() {
  // const _mode = useState('WELCOME');
  // const mode = _mode[0];
  // const setMode = _mode[1];
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] =useState(4);
  const [topics,setTopics ]= useState( [
    { id: 1, title: 'html', body: 'html is ....' },
    { id: 2, title: 'css', body: 'css is ....' },
    { id: 3, title: 'javascript', body: 'javascript is ....' },
  ]);
  let content = null;
  let contextControl = null;
  if(mode === 'WELCOME'){
    content = <Article title="Welcome" body="Hello, WEB"></Article>

  } else if(mode === 'READ'){
    let title,body = null;
    for(let i = 0;i < topics.length ; i++){
      if(id === topics[i].id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body }></Article>
    contextControl = <li><a href = {"/update/" + id} onClick={event=>{
      event.preventDefault();
      setMode('UPDATE');
    }}>Update</a></li>
  } else if(mode ==='CREATE'){
    content = <Create onCreate={(_title, _body)=>{
      const newTopic ={id: nextId, title: _title, body: _body} // 상태의 데이터가 원시데이터 타입인경우 그냥 값을 넣어도 상관없지만!
      const newTopics =[...topics]; // 상태의 데이터가 범 객체인 경우(객체, 배열) 다음과 같이 값을 지정해야 한다.
      newTopics.push(newTopic); // newValue = {...value} >> newValue 변경 >> setValue(newValue) 식으로 해야한다.
      setMode('READ');
      setId(nextId);
      setNextId(nextId+1);
      setTopics(newTopics);
     
    }}></Create>
  } else if(mode ==='UPDATE'){
    content = <Update></Update>
  }
  return (
    <div>
      <Header title="REACT" onChangeMode={() => {
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id) => {
        setMode('READ');
        setId(_id);
      }}></Nav>
      {content}
      <ul>
      <li>
      <a href ='/create' onClick={(event) =>{
        event.preventDefault();
        setMode('CREATE');
      }}>Create</a>
      </li>
      {contextControl}
      </ul>
      
    </div>
  );
}

export default App;



