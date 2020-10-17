import React, {useState, useEffect} from 'react';
import {observer} from 'mobx-react';
import store from './store';
import styled from 'styled-components';
const Button = styled.button({color: '#8764b5', backgroundColor: 'white', fontSize: '20px', border: '1px solid #8764b5', borderRadius: '5px'})
const Input = styled.input({
  color: '#8764b5',
  fontSize: '20px',
  padding: '5px 10px',
  border: '1px solid #8764b5',
  borderRadius: '5px',
  width: '78%'
})
const Li = styled.li({listStyleType: 'none', color: '#8764b5', fontSize: '30px', marginBottom: '10px'})
const Ul = styled.ul({margin: '0', padding: '40px 0'})
const MainContainer = styled.div({
  margin: '0 auto',
  width: "400px",
  border: '1px solid #8764b5',
  borderRadius: '5px',
  padding: '20px',
  focus: 'border: none'
})
const DivLi = styled.div({display: 'flex', justifyContent: 'space-between'})
const DivInput = styled.div({display: 'flex', justifyContent: 'space-between'})

function App() {;

  const [Task,
    setTask] = useState('')

  const Add = () => {
    if (Task != null) 
      store.input(Task);
    return setTask('')
  }
  const Del = (id) => {
    return store.delete(id);
  }

  useEffect(() => {
    document
      .querySelector("#input")
      .focus();
  });

  return (
    <div className="App">
      <MainContainer>
        <Ul>
          {store
            .allTask
            .map((t,idx) => {
              return <DivLi>
                <Li key={idx}>{t.title}</Li>
                <Button onClick={()=>Del(t.id)}>DEL</Button>
              </DivLi>
            })
}
        </Ul>
        <DivInput>
          <Input id="input" value={Task} onChange={e => setTask(e.target.value)}/>
          <Button onClick={Add}>ADD</Button>
        </DivInput>
      </MainContainer>
    </div>
  );
}

export default observer(App);
