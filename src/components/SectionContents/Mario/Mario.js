import React from 'react'
import SearchInput from '../../SearchInput/SearchInput'
import Article from '../../Article/Article'
import './mario.css'
import Button from '../../Button/Button'

const Mario = () => {
    return (
        <div className='mario-container'>
            <div className='inner-wrapper'>
                <SearchInput />
                <h1>Heading text here</h1>
                <div className='img-container'>
                    <div className='img-ratio'>
                        <img src='https://mario.nintendo.com/static/88dd0f6281674a77d052e46cc38c63f7/a320e/mario.png' alt='mario' />
                    </div>
                </div>
                <p>05/01/22</p>
                <h2>Title copy Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, praesentium!</h2>
                <Article>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit id111
                </Article>
            </div>
            <div className='buttons-section'>
                <Button type='fill'>Button</Button>
                <Button>Button</Button>
            </div>
        </div>
    )
}

export default Mario