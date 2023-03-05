import NoResults from '@/components/NoResults'
import VideoCard from '@/components/VideoCard'
import { Video } from '@/types'
import { BASE_URL } from '@/utils'
import axios from 'axios'



export default function Home({videos}: {videos: Video[]}) {
  
  return (
    <div className='flex flex-col gap-10 videos h-full'>{
      videos?.length ? videos?.map((video: Video) => (<VideoCard key={video._id} post={video}/>))
      : (<NoResults text="No Videos" />)
    }</div>
  )
}




export const getServerSideProps = async ({query: {topic}} : {query: {topic: string}}) => {
  let res = null
  if (topic) {
    res = await axios.get(`${BASE_URL}/api/discover/${topic}`)
  } else { 
    res = await axios.get(`${BASE_URL}/api/posts`)
  }

  return {
    props: {
      videos: res?.data
    }
  }
} 