import { Component } from 'react';
import './search-panel.sass'

class SearchPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: ''
        };
    }

    onChangeState = (e) => {
        const val = e.target.value;
        this.setState({term: val})
        this.props.onUpdateSearch(val);
    }

    render(){
        return(
            <div className='searchPanel'>
                <input onChange={this.onChangeState} value={this.state.term} type="text" name="search" className='searchPanel__input' placeholder='Search...'/>
            </div>
        )
    }
}

export default SearchPanel;