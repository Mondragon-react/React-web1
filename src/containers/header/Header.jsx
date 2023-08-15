import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
const Header = () => {
    return (
        <div className="gpt3__header secion__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="text-color">Lets Build Something amazing with GPT-3
                OpenAI</h1>
                <p>Societal norms are unwritten rules that shape behavior
                    and interactions in a community, reflecting cultural values. They
                    maintain order but can be restrictive and may evolve to promote
                    inclusivity and respect for all.</p>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Your Email Address" />
                    <button type="button">Get Started</button>
                    <div className="gpt3__header-content__people">
                        <img alt="people" src={people} />
                        <p> 1,600 people asked to join in the last 24 hours</p>
                    </div>
                </div>
            </div>
            <div className="gpt3__header-image">
                <img src={ai} alt="ai" />
            </div>
        </div>
    )
}
export default Header
