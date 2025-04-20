import React from 'react';

const About: React.FC = () => {
    return (
        <div style={{ padding: '2rem' }}>
            <h1>About This App</h1>
            <p>
                {/* Brief description of the app */}
                [Insert a short description of your budget app here.]
            </p>
            <h2>Features</h2>
            <ul>
                <li>[Feature 1 placeholder]</li>
                <li>[Feature 2 placeholder]</li>
                <li>[Feature 3 placeholder]</li>
            </ul>
            <h2>Contact</h2>
            <p>
                {/* Contact information or links */}
                [Insert your contact information or support email here.]
            </p>
        </div>
    );
};

export default About;