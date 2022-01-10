import './app.sass';
import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import StatusFilter from '../status-filter/status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';

class App extends Component{
    constructor(props){
        super(props)
        this.state ={
            data: [
                {text: 'Going to the store', like: true, star: false, id: 1},
                {text: 'Learn React', like: false, star: true, id: 2},
                {text: 'Buy a new phone', like: false, star: false, id: 3},
                {text: 'Buy a new mackBook', like: true, star: false, id: 4},
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 5;
    }

    onChangeLike = (id) => {
        this.setState(({data})=>{
            const index = data.findIndex(item => item.id === id);
            const oldObj = data[index];
            const newObj = {...oldObj, like: !oldObj.like}

            const before = data.slice(0,index);
            const after = data.slice(index + 1);
            const newArr = [...before,newObj,...after];

            return{data: newArr}
        })
    }

    onChangeStar = (id) => {
        this.setState(({data})=>{
            const i = data.findIndex(item => item.id === id);
            const oldObj = data[i];
            const newObj = {...oldObj, star: !oldObj.star};

            const before = data.slice(0, i);
            const after = data.slice(i + 1);
            const newArr = [...before,newObj, ...after]
            return{data: newArr}
        })
    }

    onRemoveItem =  (id) => {
       this.setState(({data})=>{
           const newArr = data.filter(item=> item.id !== id); //all items that not our id
           return{data: newArr}
       }) 
    }

    addItem = (text) => {
        const newObj = {};
        newObj.text = text;
        newObj.like = false;
        newObj.star = false;
        newObj.id = this.maxId++;

        this.setState(({data})=>{
            const newArr = [...data, newObj];
            return {data: newArr}
        })
    }

    searches = (data,term) => {
        if(term.length === 0) return data //search is empty
        return data.filter(item => item.text.indexOf(term) > -1) //find something
    }
    onUpdateSearch = (term) => {
        this.setState({term: term})
    }

    filter = (data,filter) => {
        if(filter === 'like'){
            return data.filter(item => item.like)
        }
        if(filter === 'star'){
            return data.filter(item => item.star)
        }
        return data
    }
    onUpdateFilter = (filter) => {
        this.setState({filter: filter})
    }


    render(){
        const {data,term,filter} = this.state;
        const posts = data.length;
        const postsLike = data.filter(item => item.like).length;

        const visible = this.filter(this.searches(data,term),filter);
        return(<>
            <div className="header">
                <div className="header__container _container">                 
                    <AppInfo posts={posts} postsLike={postsLike}/>
                    <div className="header__panel">
                        <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                        <StatusFilter onUpdateFilter={this.onUpdateFilter} filter={filter}/>
                    </div>
                </div>
            </div>
            <main className="page">
                <PostList data={visible} 
                        onChangeLike={this.onChangeLike} 
                        onChangeStar={this.onChangeStar}
                        onRemoveItem={this.onRemoveItem}
                />
            </main>
            <PostAddForm addItem={this.addItem}/>
        </>)
    }
}


export default App;