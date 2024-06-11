import React, { useState } from 'react';
import './MegaMenu.css'; // Ensure this CSS file path is correct

const MegaMenu = ({ links, blogPosts }) => {
    const [isVisible, setVisible] = useState(true);

    return (
        <div className="mega-menu-container" onMouseOver={() => setVisible(true)} onMouseOut={() => setVisible(false)}>
            {isVisible && (
                <div className="mega-menu">
                    <div className="menu-section small">
                        {links.map((link, index) => (
                            <div key={index} className="link-item">{link}</div>
                        ))}
                    </div>
                    <div className="menu-section large">
                        {blogPosts.map((post, index) => (
                            <div key={index} className="blog-post">
                                <img src={post.image} alt={post.title} />
                                <div>
                                    <h4>{post.title}</h4>
                                    <p>{post.summary}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MegaMenu;
