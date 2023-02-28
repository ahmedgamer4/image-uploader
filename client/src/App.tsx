import React, { useCallback, useEffect, useState } from 'react'
import DropBox from './components/DropBox';
import Uploading from './components/Uploading';
import './App.css'

function App() {
  const [image, setImage] = useState<File | null>(null)
  const [imageUrl, setImageUrl] = useState('')
  const [uploading, setUploading] = useState(false)

  return (
    <div className='flex justify-center items-center min-h-screen'>
      {!uploading &&
        <DropBox setUploading={setUploading} setImageUrl={setImageUrl} />}

      {uploading &&
        <Uploading />}

      {image &&
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
      }
    </div>
  )
}

export default App