import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ContentTitleComponent } from '../components/ContentTitleComponent';

export const UserNewPage = () => {
    const navigate = useNavigate();

    // 페이지 모드
    const pathName = window.location.pathname.split('/');
    const pageMode = pathName[2];
    console.log(pathName[2]);

    console.log("pageMode.toLowerCase().indexOf('add') : " , pageMode.toLowerCase().indexOf('add'));
    const isAdd = pageMode.toLowerCase().indexOf('add') !== -1;
    const isDetail = pageMode.toLowerCase().indexOf('detail') !== -1;
    const isUpdate = pageMode.toLowerCase().indexOf('update') !== -1;

    let pageTypeTxt = '';

    if(isAdd) {
        pageTypeTxt = '등록하기';
    
    }

   

  return (
    <div>
        <ContentTitleComponent
                titleMain={ `${pageTypeTxt}` }
            />
        
    </div>
  )
}
