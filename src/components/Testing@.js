import React from 'react'
import { Link, useLocation } from 'react-router-dom'
export default function Testing2() {
  return (
    <div>
        <Link to="/testing" state={
            {name:'name is everything we got!'}
        }>Some link</Link>
        </div>
  )
}
