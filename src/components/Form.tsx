import { Controller, useForm } from 'react-hook-form'
import { useSubmit } from 'react-router'
import ErrorIcon from '../assets/images/icon-error.svg'
import InfoIcon from '../assets/images/icon-info.svg'
import '../styles/form.css'
import DropZone from './ui/DropZone'

type FormType = {
  avatar: File[]
  userName: string
  email: string
  github: string
}

const Form = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors }
  } = useForm<FormType>()
  const submit = useSubmit()

  const onSubmit = (data: FormType) => {
    const id = String(Math.floor(Math.random() * 100000)).padStart(5, '0')
    const formData = new FormData()

    let avatarUrl = ''
    if (data.avatar && data.avatar[0])
      avatarUrl = URL.createObjectURL(data.avatar[0])

    Object.entries({ ...data, id }).forEach(([key, value]) => {
      if (key === 'avatar') formData.append('avatar', avatarUrl)
      else formData.append(key, String(value))
    })

    submit(formData, { method: 'post', action: '/' + id })
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
          rules={{
            required: 'Please, upload your avatar.',
            validate: {
              acceptedFormats: file =>
                file[0]?.type === 'image/jpeg' ||
                file[0]?.type === 'image/png' ||
                'Only JPG or PNG files are allowed.',
              maxSize: file =>
                file[0]?.size <= 500000 ||
                'File too large. Please upload a photo that is less than 500KB.'
            }
          }}
          render={({ field: { onChange } }) => (
            <DropZone onFileChange={onChange} />
          )}
        />

        {errors.avatar ? (
          <span className="tip-message error">
            <img src={ErrorIcon} alt="Error Icon" className="h-4 w-4" />
            {errors.avatar.message}
          </span>
        ) : (
          <span className="tip-message">
            <img src={InfoIcon} alt="Info Icon" className="h-4 w-4" />
            Upload your photo (JPG or PNG, max size: 500KB)
          </span>
        )}
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
          {...register('userName', { required: 'Please, enter your name.' })}
          className={`input ${errors.userName ? 'error' : ''}`}
        />
        {errors.userName && (
          <span className="tip-message error">
            <img src={ErrorIcon} alt="Error Icon" className="h-4 w-4" />
            {errors.userName.message}
          </span>
        )}
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
          {...register('email', {
            required: 'Please, enter your email.',
            validate: {
              isEmail: value =>
                /^\S+@\S+\.\S+$/.test(value) ||
                'Please, enter a valid email address.'
            }
          })}
          className={`input ${errors.email ? 'error' : ''}`}
        />
        {errors.email && (
          <span className="tip-message error">
            <img src={ErrorIcon} alt="Error Icon" className="h-4 w-4" />
            {errors.email.message}
          </span>
        )}
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
          {...register('github', {
            required: 'Please, enter your GitHub username.'
          })}
          className={`input ${errors.github ? 'error' : ''}`}
        />
        {errors.github && (
          <span className="tip-message error">
            <img src={ErrorIcon} alt="Error Icon" className="h-4 w-4" />
            {errors.github.message}
          </span>
        )}
      </div>

      <button className="btn" type="submit">
        Generate My Ticket
      </button>
    </form>
  )
}

export default Form
