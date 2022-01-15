import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import LoadingElement from '../components/elements/loading'
import PlayIndex from '../components/play'
import { RootModuleType } from '../modules/moduleTypes'

function Play() {
  const video = useSelector(({ video }: RootModuleType) => video)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    if (loading) {
      if (video.items.length === 0) {
        navigate('/')
      }
      setLoading(false)
    }
  }, [navigate, video, loading])

  return <>{loading ? <LoadingElement /> : <PlayIndex video={video} />}</>
}

export default Play
