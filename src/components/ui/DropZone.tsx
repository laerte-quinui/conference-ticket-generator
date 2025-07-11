import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import UploadIcon from '../../assets/images/icon-upload.svg'
import '../../styles/drop-zone.css'

const DropZone = () => {
  const [avatarUrl, setAvatarUrl] = useState<string | null>()

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file: File) => {
      const reader = new FileReader()
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        const binaryStr = reader.result
        if (typeof binaryStr === 'string' || binaryStr === null)
          setAvatarUrl(binaryStr)
      }
      reader.readAsDataURL(file)
    })
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  if (avatarUrl) {
    return (
      <div className="drop-zone">
        <div className="drop-zone__icon with-avatar">
          <img src={avatarUrl} />
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="btn-gray underline"
            onClick={() => setAvatarUrl(null)}
          >
            Remove image
          </button>
          <label className="btn-gray !font-normal !text-[var(--neutral-300)]">
            Change image
            <input className="hidden" type="file" {...getInputProps()} />
          </label>
        </div>
      </div>
    )
  }

  return (
    <div
      {...getRootProps()}
      className={`drop-zone ${isDragActive ? 'drop-zone__on-drag' : ''}`}
    >
      <input type="file" id="drop-zone" {...getInputProps()} />

      <div className="drop-zone__icon">
        <img src={UploadIcon} />
      </div>
      <p className="drop-zone__text">Drag and drop or click to upload</p>
    </div>
  )
}

export default DropZone
