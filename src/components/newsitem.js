import React, { Component } from 'react'

class Newsitem extends Component {
    // constructor(props) {
    //     super(props);
    //   }
    // componentDidUpdate(){
    //     if(data.urlToImage === null){
    //         this.setState({
    //             urlToImage: 'https://res.cloudinary.com/tinkerbell/image/upload/v1596816955/pexels-bongkarn-thanyakij-3787324_z9rupy.jpg'
    //         })
    //     }
    // }
    
    render() {
        return (
            <div className = 'news-container'>
                { this.props.item.map(data => (
                <div key={data.id} className = 'news-box'>
                    <img src = {data.urlToImage} />
                    <h5> {data.title}</h5>
                    <p> {data.description} </p>
                    <p><a href = {data.url}>Read More</a></p>
                </div>
                
            )) }
            </div>
        )
    }
}

// const Newsitem = ({ allnews: {title, author, url, urlToImage, content, publishedAt }}) => {

//     return (
//         <div className = 'card text-center'>
//             <img src={urlToImage} 
//                 alt = 'author-image' 
//                 className = 'round-img' 
//                 style = {{ width: '150px'}}
//             />

//             <h3> {title} </h3>
//             <div>
//                 <a href = {url} className = 'btn btn-dark btn-sm my-1' >More</a> 
//             </div>
//         </div>
//     )
// }

// Newsitem.propTypes = {
//     allusers: PropTypes.object.isRequired,
// }  

export default Newsitem
