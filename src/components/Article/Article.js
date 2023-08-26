import React, {useEffect, useState, useRef} from 'react'
import Button from '../Button/Button'
import './article.css'

const Article = ({children}) => {
    const [isEllipsis, setIsEllipsis] = useState(true)
    const [showFull, setShowFull] = useState(false)
    const paragraph = useRef(null)

    useEffect(() => {
        // remove ellipsis className if it's short enough
        if (paragraph.current.offsetHeight >= paragraph.current.scrollHeight) {
            paragraph.current.className = 'article'
            setIsEllipsis(false)
        }
    }, [])

    useEffect(() => {
        if (showFull) {
            paragraph.current.className = 'article'
        } else {
            paragraph.current.className = 'article ellipsis'
        }
    }, [showFull])

    return (
        <>
            <p className='article ellipsis' ref={paragraph}>
                {children}
            </p>
            {isEllipsis ?
                <Button type='underline' size='sm' onClick={() => {setShowFull(!showFull)}}> {showFull ? 'Read Less' : 'Read More'}
                </Button> : null}
        </>
    )
}

export default Article