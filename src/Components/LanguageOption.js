import React from 'react'

const LanguageOption = (props) => {
    return (
        <div >
            <select onChange={props.onChange}>
                <option>Select Language</option>
                <option value={'en'}>English</option>
                <option value={'arb'}>Arbic</option>
            </select>
        </div>
    )
}

export default LanguageOption