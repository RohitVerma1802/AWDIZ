import React from "react";

function Ticket({ ticket, users }) {
  const assignedUser = users.find((user) => user.id === ticket.userId);

  let assignedUserName = "Unknown";
  if (assignedUser) {
    assignedUserName = assignedUser.name;
  }

  return (
    <div className="ticket">
      <h3>{ticket.title}</h3>
      <p>Status: {ticket.status}</p>
      <p>Priority: {ticket.priority}</p>
      <p>Assigned to: {assignedUserName}</p>
    </div>
  );
}

export default Ticket;
