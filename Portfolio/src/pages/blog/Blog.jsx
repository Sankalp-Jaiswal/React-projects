import React, { useEffect, useState } from 'react'
import BlogPost from './BlogPost'
import './Blog.css'

const Blog = () => {

    const [blogs, setBlogs] = useState([])
    const [currPage, setCurrPage] = useState(1)
    const [postPerPage] = useState(4)


    useEffect(() => {
        fetch('blogs.json').then(res => res.json()).then(data => setBlogs(data))
    }, [])

    const indexOfLastPage = currPage * postPerPage
    const indexOfFirstPage = indexOfLastPage - postPerPage
    const currentPosts = blogs.slice(indexOfFirstPage, indexOfLastPage)

    const paginate = pageNumber => setCurrPage(pageNumber)

    return (
        <section className='blog'>
            <header>
                <h2 className="h2 article-title">Blogs</h2>
            </header>
            <div className="blog-posts">
                <ul className='blog-posts-list'>
                    {
                        currentPosts.map((post, index) => (
                            <BlogPost key={index} post={post} />
                        ))
                    }
                </ul>
            </div>
            <nav>
                <ul className='pagination'>
                    <li className={`page-item ${currPage === 1 ? 'disabled' : ''}`}>

                        <button onClick={() => paginate(currPage - 1)} className='page-link'>Previous</button>
                    </li>
                    {
                        Array.from({ length: Math.ceil(blogs.length / postPerPage) }, (_, index) => (
                            <li key={index} className={`page-item ${currPage === index + 1 ? 'active' : ''}`}>

                                <button className='page-link' onCanPlay={() => paginate(index)}>{index + 1}</button>
                            </li>

                        ))
                    }
                    <li className={`page-item ${currPage === Math.ceil(blogs.length/postPerPage) ? 'disabled' : ''}`}>

                        <button onClick={() => paginate(currPage + 1)} className='page-link'>Next</button>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default Blog