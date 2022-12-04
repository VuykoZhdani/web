import {SelectForm, SelectLabel, SelectStyle} from '../styles/select-style.js'

function Select(props){
    return(
        <SelectForm>
            <SelectLabel htmlFor='filter'>Filter{props.number}</SelectLabel>
            <SelectStyle name='filter'>
                <option value='name'>Name</option>
                <option value='price'>Price</option>
                <option value='Stars'>Stars</option>
                
            </SelectStyle>
        </SelectForm>
    )

}

export default Select;