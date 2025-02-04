import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap CSS 임포트

export const TdComponent = ({userInfo}) => {
    //"|location.href='/details/${user.num}'|"


    const detailOfUser = () => {
        console.log("detailOfUser 호출");
    }

  return (
    <>
        {
            
        userInfo.map((user, index) => (
            <tr key={index} onClick={() => detailOfUser()}>
                <td>{user.DATABASE_TYPE}</td>
                <td>{user.DATABASE_VERSION}</td>
                <td>{user.SERVER_IP}</td>
                <td>{user.DATABASE_ID}</td>
                <td>{user.DATABASE_USER_ID}</td>
                <td>{user.REF_INFO}</td>
                <td>{user.num}</td>
            </tr>
            ))
        }
        
    </>
  )
}

export default TdComponent;
