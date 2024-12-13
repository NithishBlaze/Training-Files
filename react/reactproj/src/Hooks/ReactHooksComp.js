import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const ReactHooksComp = () => {
  return (
    <div>
      <h2>This is ReactHooksComp</h2>
      <div className='card border-primary'>
        <div className='card-header border-primary'>
          <Link to={"effecthooks"} className='btn btn-warning'>useEffect</Link>
          <Link to={"statehooks"} className='btn btn-warning'>stateEffect</Link>
        </div>
        <div className='card-body border-primary'>
          <Outlet />
        </div>
        <div className='card-footer border-primary'></div>
      </div>
    </div>
  )
}

export default ReactHooksComp