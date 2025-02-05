import React from 'react'
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { ThComponent } from '../components/ThComponent'
import {Table, Button} from 'react-bootstrap';
import { TdComponent } from '../components/TdComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { useNavigate } from 'react-router-dom';

export const UserListPage = () => {

    const navigate = useNavigate();
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

    const onAction = async (type) => {
        
        switch(type) {
            case 'button-click-add' :
                navigate("users/userAdd");
                break;    
        }
        
    }
  

  return (
    <div>
        <h1 className='title_h1'>사용자 목록</h1>
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

        <ButtonComponent name='add' color='btn-blue' onAction={onAction}>사용자 생성</ButtonComponent>
        </div>
    </div>
  )
}

export default UserListPage;