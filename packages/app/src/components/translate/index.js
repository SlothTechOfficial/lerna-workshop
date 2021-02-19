import React from 'react';
import { Translate as TranslateService } from '@lerna-workshop/services';

export const Translate = ({
    Languages,
    message,
    onEndTranslate
}) => {

    const onChangeLanguage = (e) => {
        let lang = e.target.value;
        TranslateService.Message(message, lang).then(reply=>{
            onEndTranslate(reply.TranslatedText);
        });
      // 
    }

    

    return  <>
        <select onChange={onChangeLanguage}>
        {Languages.map(item=>{
            return <option value={item.Code}> {item.Language}</option>
        })}     
        </select>   
    </>
}