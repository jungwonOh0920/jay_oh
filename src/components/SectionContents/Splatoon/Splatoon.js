import React from 'react'
import Article from '../../Article/Article'
import Button from '../../Button/Button'
import SearchInput from '../../SearchInput/SearchInput'

const Splatoon = () => {
  return (
    <div>
      <SearchInput />
      <h1>Splatoon</h1>
      <div style={{maxWidth: '600px'}}>
        <div style={{paddingBottom: '56.25%', position: 'relative'}}>
          <img style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '16px'}} src='https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.0/c_scale,w_300/ncom/en_US/merchandising/Character%20Portals/Ncom_CharacterRail_1600x1600_Splatoon_character_v2' alt='splatoon' />
        </div>
      </div>
      <p>05/01/22</p>
      <h2>It's Splatoon</h2>
      <Article>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nam!
      </Article>
      <div className='buttons-section'>
        <Button type='fill' onClick={() => {alert('Button component with the fill type')}}>Button</Button>
      </div>
    </div>
  )
}

export default Splatoon