import React from 'react'
import { Route, Routes } from 'react-router-dom'
/**Pages */
import UserListPage from '../containers/UserListPage'
import { UserNewPage } from '../containers/UserNewPage'

export const ContentRoutes = () => {
  return (
  
    <Routes>
        {/**사용자 목록 */}
        <Route index path="/" element={<UserListPage/>}></Route>
        {/**사용자 생성 , 수정, 상세 */}
        <Route path='/users/detail/:num' element={<UserNewPage/>}></Route>
        <Route path='/users/update/:num' element={<UserNewPage/>}></Route>
        <Route path='/users/userAdd' element={<UserNewPage/>}></Route>
        {/** 사용자 삭제 */}
        <Route path='/users/delete' element={<UserNewPage/>}></Route>
    </Routes>
    
  )
}

export default ContentRoutes;