import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ContentTitleComponent } from '../components/ContentTitleComponent';
import { FormComponent } from '../components/FormComponent';
import { ButtonComponent } from '../components/ButtonComponent';

export const UserNewPage = () => {
    const navigate = useNavigate();

    const [btnName, setBtnName] = useState('');
    const [btnColor, setBtnColor] = useState('');

    // 페이지 모드
    const pathName = window.location.pathname.split('/');
    const pageMode = pathName[2];
    console.log(pathName[2]);

    const isAdd = pageMode.toLowerCase().indexOf('add') !== -1;
    const isDetail = pageMode.toLowerCase().indexOf('detail') !== -1;
    const isUpdate = pageMode.toLowerCase().indexOf('update') !== -1;

    let pageTypeTxt = '';

    if(isAdd) {
      pageTypeTxt = '등록하기';
      setBtnName('save');
      setBtnColor('btn-blue');
    } 
    else if(isDetail) {
      pageTypeTxt = '상세보기';
      setBtnName('modify');
      setBtnColor('');
    }
    else if(isUpdate) {
      pageTypeTxt = '수정하기';
      setBtnName('update');
    }


  return (
    <div>
        <ContentTitleComponent titleMain={`${pageTypeTxt}`}/>
        <FormComponent></FormComponent>

        
        <ButtonComponent name={btnName} color={btnColor}></ButtonComponent> 
        
    </div>
  )
}
