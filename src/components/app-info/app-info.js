import { Component } from 'react';
import './app-info.sass'

class AppInfo extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        const {posts, postsLike} = this.props
        return(
            <div className='appInfo'>
                <div className="appInfo__user">Ivan Fedak</div>
                <div className="appInfo__counter">{posts} posts, liked - {postsLike}</div>
            </div>
        )
    }
}

export default AppInfo;