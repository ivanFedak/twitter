import { Component } from 'react';
import './status-filter.sass'

class StatusFilter extends Component {
    constructor(props){
        super(props);
        this.state = {
            btns: [
                {text: 'All', name: 'all', classes: ''},
                {text: 'Liked', name: 'like', classes: ''},
                {text: 'Star', name: 'star', classes: ''},
            ]
        };
    }

    onUpdateFilter = (e) => {
        
    }

    render(){
        const {onUpdateFilter} = this.props;
        const buttons = this.state.btns.map(item=>{
            const active = this.props.filter === item.name;
            const clazz = active ? '_active' : ''
            return(
                <button onClick={()=>onUpdateFilter(item.name)} key={item.name} className={`statusFilter__btn ${clazz}`}>
                    {item.text}
                </button>
            )
        })
        return(
            <div className="statusFilter">
                {buttons}
                {/* <button onClick={this.onUpdateFilter} className='statusFilter__btn statusFilter__btn_all _active' name='all'>All</button>
                <button onClick={this.onUpdateFilter} className='statusFilter__btn statusFilter__btn_like' name='like'>Liked</button> */}
            </div>
        )
    }
}

export default StatusFilter;