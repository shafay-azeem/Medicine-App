import React from 'react';

const LanguageOption = (props) => {
    return (
        <div>
            <select style={{ backgroundColor: '#a7e1f2', borderStyle: 'none', cursor: 'pointer', color: '#4b666d' }} onChange={props.onChange}>
                <option >Select Language</option>
                <option value={'en'}>English</option>
                <option value={'arb'}>Arbic</option>
            </select>
        </div>
    )
}

export default LanguageOption;