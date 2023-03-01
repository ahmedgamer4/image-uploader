import React, { useCallback, useEffect, useState } from 'react'
import DropBox from './components/DropBox';
import Uploading from './components/Uploading';
import './App.css'
import Uploaded from './components/Uploaded';
// 
function App() {
  const [image, setImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState({
      imgUrl: '',
      publicId: ''
  })
  const [uploading, setUploading] = useState(false)

  return (
    <div className='flex justify-center items-center min-h-screen'>
      {!uploading && !imageLink.imgUrl && 
        <DropBox setUploading={setUploading} setImageUrl={setImageLink} />}

      {uploading && !imageLink.imgUrl &&
        <Uploading />}

      {imageLink.imgUrl &&
        <Uploaded imageLink={imageLink} />
      }
    </div>
  )
}

export default App