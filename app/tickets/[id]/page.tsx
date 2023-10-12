
async function getTicket(id: any){
    const res = await fetch(`http://localhost:4000/tickets/${id}`,{
        next: {
            revalidate: 60
        }
    });

    return res.json()
}

export default async function TicketDetails({params}: any) {
    const id = params.id

    const ticket = await getTicket(id)

  return (
    <main>
        <nav>
            <h2>Tickets Details</h2>
        </nav>
        <div className="card">
            <h3>{ticket.title}</h3>
            <small>Created By {ticket.user_email}</small>
            <p>{ticket.body}</p>
            <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
            </div>
        </div>
    </main>
  )
}
