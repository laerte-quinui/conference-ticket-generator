import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import UploadIcon from '../../assets/images/icon-upload.svg'
import '../../styles/drop-zone.css'

const DropZone = () => {
  interface FileWithPath extends File {
    path?: string
  }

  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    acceptedFiles.forEach((file: FileWithPath) => {
      const reader = new FileReader()
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        console.log('file dropped:', file)
        const binaryStr = reader.result
        console.log(binaryStr)
      }
      reader.readAsArrayBuffer(file)
    })
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

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
