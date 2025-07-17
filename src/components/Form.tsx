import { Controller, useForm } from 'react-hook-form'
import InfoIcon from '../assets/images/icon-info.svg'
import '../styles/form.css'
import DropZone from './ui/DropZone'

type FormType = {
  avatar: File
  userName: string
  email: string
  github: string
}

const Form = () => {
  const { handleSubmit, register, control } = useForm<FormType>()

  const onSubmit = (data: FormType) => {
    console.log(data)
    // Handle form submission logic here
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto mt-8 mb-10 flex flex-col gap-4 lg:mt-10 lg:max-w-3/12"
    >
      {/* Upload avatar */}
      <div>
        <label className="mb-2" htmlFor="drop-zone">
          Upload Avatar
        </label>
        <Controller
          name="avatar"
          control={control}
          render={({ field: { onChange } }) => (
            <DropZone onFileChange={onChange} />
          )}
        />

        <span className="mt-2 flex items-center gap-2 text-xs text-[var(--neutral-500)]">
          <img src={InfoIcon} alt="Info Icon" className="h-4 w-4" />
          Upload your photo (JPG or PNG, max size: 500KB)
        </span>
      </div>

      {/* Full name */}
      <div>
        <label className="mb-2" htmlFor="userName">
          Full name
        </label>
        <input
          id="userName"
          type="text"
          placeholder="Jhon Doe"
          {...register('userName', { required: true })}
          className="input"
        />
      </div>

      {/* Email */}
      <div>
        <label className="mb-2" htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          placeholder="example@email.com"
          {...register('email', { required: true })}
          className="input"
        />
      </div>

      {/* GitHub */}
      <div>
        <label className="mb-2" htmlFor="github">
          GitHub Username
        </label>
        <input
          id="github"
          type="text"
          placeholder="@yourusername"
          {...register('github', { required: true })}
          className="input"
        />
      </div>

      <button className="btn" type="submit">
        Generate My Ticket
      </button>
    </form>
  )
}

export default Form
