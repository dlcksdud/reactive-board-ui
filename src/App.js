import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { ThComponent } from './component/ThComponent';
import {Table, Button} from 'react-bootstrap';
import { TdComponent } from './component/TdComponent';


function App() {

  const [theadTitle, setTheadTitle] = useState([]);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    getTheadTitle();
    getUserInfo();
  }, [])

  const getTheadTitle = () => {
      axios.get("http://localhost:8089/getColumn")
          .then((response) => {
              const columnArr = response.data.getColumn;
              setTheadTitle(columnArr);
          })
          .catch((error) => {
              console.log(error);
          });
  };

  const getUserInfo = () => {
      axios.get("http://localhost:8089/getUserInfo")
          .then((response) => {
            console.log(response.data);
            const arr = response.data.userData;
            setUserInfo(arr);
          })
          .catch((error) => {
            console.log(error);
          })
  }

  const createUser = () => {

  }


  return (
    <div>
      <Table striped bordered hover>
          <thead>
            <tr>
              <ThComponent title={theadTitle}></ThComponent>
            </tr>
          </thead>
          <tbody>
              <TdComponent userInfo={userInfo}></TdComponent>
          </tbody>
      </Table>

      <Button variant="primary" onClick={()=> createUser()}>사용자 생성</Button>
    </div>
  );
}

export default App;
