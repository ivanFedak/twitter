import { Component } from 'react';
import './post-add-form.sass'

class PostAddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: ''
        };
    }

    onValueChange = (e) =>{
        this.setState({
            text: e.target.value
        })
    }


    onAddItem = (e) =>{
        e.preventDefault();
        if(this.state.text.length > 0){
            this.props.addItem(this.state.text)
            this.setState({
                text: ''
            })
        }
    }

    render(){
        return(
            <div className='addForm'>
                <div className='addForm__container _container'>
                    <form onSubmit={this.onAddItem} action="#" className='addForm__add add'>
                        <input onChange={this.onValueChange} type="text" className='add__input' value={this.state.text} placeholder='write something...'/>
                        <button type='submit' className='add__btn'>Add</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default PostAddForm;