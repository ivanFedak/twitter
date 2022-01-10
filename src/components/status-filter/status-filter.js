import { Component } from 'react';
import './status-filter.sass'

class StatusFilter extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className="statusFilter">
                <button className='statusFilter__btn statusFilter__btn_all _active'>All</button>
                <button className='statusFilter__btn statusFilter__btn_like'>Liked</button>
            </div>
        )
    }
}

export default StatusFilter;