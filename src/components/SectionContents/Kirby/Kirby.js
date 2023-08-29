import React from 'react'
import Article from '../../Article/Article'
import Button from '../../Button/Button'

const Kirby = () => {
    return (
        <div>
            <h1>Heading text here</h1>
            <div style={{maxWidth: '600px'}}>
                <div style={{paddingBottom: '56.25%', position: 'relative'}}>
                    <img style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '16px'}} src='https://kirby.nintendo.com/assets/img/kirby-forgotten-land.jpg' alt='kirby' />
                </div>
            </div>
            <p>05/01/22</p>
            <h2>It's Kirby</h2>
            <Article>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nam!
            </Article>
            <div className='buttons-section'>
                <Button type='fill' onClick={() => {alert('Button component with the fill type')}}>Button</Button>
            </div>
        </div>
    )
}

export default Kirby