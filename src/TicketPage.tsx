import { useActionData } from 'react-router'

const TicketPage = () => {
  const actionData = useActionData()
  const getData = (name: string) => {
    if (!actionData) return null
    return actionData.get(name)
  }

  return (
    <div>
      <h1>Ticket Page</h1>
      {actionData && <p>Generated Ticket ID: {getData('id')}</p>}
    </div>
  )
}

export default TicketPage
