import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Sidebar extends Component {

    render() {
        return (
            <section className="sidebar">
                <h1>Bookshelf</h1>

                <nav>
                    <ul>
                    <li><Link to='/'>
                        Home
                    </Link></li>
                    <li><Link to='/saved'>
                        Saved
                    </Link></li>
                    </ul>
                </nav>

                <p>This is a project description.</p>

                <form id="bookSearch">
                    <input 
                        type="text" 
                        name="book" 
                        placeholder="Search for a book..."/>
                    <button type="submit">
                        <i class="fas fa-search"></i>
                    </button>
                </form>
                
            </section>
        );
    }

}

export default Sidebar;