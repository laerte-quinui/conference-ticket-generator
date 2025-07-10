import InfoIcon from '../assets/images/icon-info.svg'
import DropZone from './ui/DropZone'

const Form = () => {
  return (
    <form className="mx-auto my-10 flex flex-col gap-4 lg:max-w-3/12">
      <div>
        <label className="mb-2">Upload Avatar</label>
        <DropZone />
        <span className="mt-2 flex items-center gap-2 text-xs text-[var(--neutral-500)]">
          <img src={InfoIcon} alt="Info Icon" className="h-4 w-4" />
          Upload your photo (JPG or PNG, max size: 500KB)
        </span>
      </div>
    </form>
  )
}

export default Form
