import { useParams } from 'react-router-dom'
import PackageList from './PackageList'
import { packageTypes } from './packageData'
import { usePackages } from '../../hooks/usePackages'

function Packages() {
  // const { type } = useParams()
  // const packageInfo = packageTypes[type]


  return (
    <div className="py-16">
      <div className="container">
        {/* <h1 className="text-4xl font-bold text-center mb-4">{packageInfo.title}</h1> */}
        
        <PackageList/>
      </div>
    </div>
  )
}

export default Packages