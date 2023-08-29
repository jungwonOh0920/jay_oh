import React from 'react'
import Article from '../../Article/Article'
import Button from '../../Button/Button'

const Luigi = () => {
    return (
        <div>
            <h1>Luigi</h1>
            <div style={{maxWidth: '600px'}}>
                <div style={{paddingBottom: '56.25%', position: 'relative'}}>
                    <img style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '16px'}} src='https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_300/ncom/software/switch/70010000001620/2b166fb3197dacfde1d939acd6a976b9fbe3b1a32c54f9f0d2c8d23efb22412d' alt='luigi' />
                </div>
            </div>
            <p>05/01/22</p>
            <h2>It's Luigi</h2>
            <Article>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nam!
            </Article>
            <div className='buttons-section'>
                <Button type='fill' onClick={() => {alert('Button component with the fill type')}}>Button</Button>
                <Button onClick={() => {alert('Default button type')}}>Button</Button>
            </div>
        </div >
    )
}

export default Luigi