import React from 'react'
import SearchBar from './components/SearchBar';
import BlogList from './components/BlogList';

const link =
  "https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";

class App extends React.Component{
    constructor(){
        super();

        this.state = {
            loading:true,
            blogs: [],
            blogsFiltered: []
        }
    }
    
    //this method will compile when it starts
    componentDidMount (){
        this.handleGetBlogs()
    }

    //handling search event
    //cari data sesuai search (ngefilter)
    handleTypeSearch = event =>{
        const blogFiltered = this.state.blogs.filter((blog) => {
        return blog.title.toLowerCase().indexOf(event.target.value.toLowerCase) > -1                
        }) //ngambil state dari blog trus difilter.
        
        this.setState ({blogsFiltered: blogFiltered})
    }

    handleGetBlogs = () => {
        fetch(link)
            .then(res => res.json())
            .then(res => this.setState ({blogs: res, blogsFiltered: res}))

    }

    render()
    {
        console.log(this.state.blogsFiltered)

        return(
            <div>
            <SearchBar onChangeSearch={this.handleTypeSearch}/>
    
            {this.state.blogsFiltered.map((blogs, index) =>
            (    
            <BlogList
             key={index}
             title= {blogs.title}
             content= {blogs.content}
             author = {blogs.author}
             date = {blogs.created_at}
             />
            ))}
            </div>
        );
    }
}

export default App