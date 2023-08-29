import React from 'react'
import Article from '../../Article/Article'
import Button from '../../Button/Button'
import SearchInput from '../../SearchInput/SearchInput'

const Zelda = () => {
    return (
        <div>
            <SearchInput />
            <h1>Zelda</h1>
            <div style={{maxWidth: '600px'}}>
                <div style={{paddingBottom: '56.25%', position: 'relative'}}>
                    <img style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '16px'}} src='https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.0/c_scale,w_300/ncom/en_US/merchandising/Character%20Portals/The%20Legend%20of%20Zelda/1600x1600_character' alt='zelda' />
                </div>
            </div>
            <p>05/01/22</p>
            <h2>It's Zelda</h2>
            <Article>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas possimus cupiditate aspernatur, explicabo numquam non cum eligendi distinctio sapiente recusandae tempora, dicta animi saepe fuga neque mollitia deserunt, sint officiis quia quas ipsam odio atque. Voluptatem sapiente provident fugiat illum totam nostrum unde ea. Non saepe unde necessitatibus voluptatem ex aliquid alias dolorum voluptate at explicabo in numquam optio incidunt dolorem illo odio tempore, atque fugit quasi ratione sunt sequi, libero blanditiis! Molestias nam inventore incidunt obcaecati tenetur quos ducimus corporis sint porro. Molestiae neque dolor hic, natus praesentium deserunt nostrum? Expedita ipsum, dolore eius obcaecati voluptatum nam illum sint!
            </Article>
            <div className='buttons-section'>
                <Button type='fill' onClick={() => {alert('Button component with the fill type')}}>Button</Button>
            </div>
        </div>
    )
}

export default Zelda