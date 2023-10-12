
async function getTickets(){
    const res = await fetch('http://localhost:4000/tickets',{
        next: {
            revalidate: 0
        }
    });

    return res.json()
}

export default async function TicketsList() {
    const tickets = await getTickets();

  return (
    <>
    {tickets.length === 0 && (
        <p className="text-center">Sorry There are no tickets.</p>
    )}
    {tickets.map((ticket: any) => (
        <div key={ticket.id} className="card my-5">
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0,200)}...</p>
            <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
            </div>
        </div>
    ))}
    </>
  )
}
