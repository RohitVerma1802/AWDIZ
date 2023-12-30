import React, { useState, useEffect } from "react";
import Ticket from "./Ticket";
//import "./KanbanBoard.css";

function KanbanBoard() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const apiURL = "https://api.quicksell.co/v1/internal/frontend-assignment";

  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        const fetchedTickets = data.tickets;
        const fetchedUsers = data.users;
        setTickets(fetchedTickets);
        setUsers(fetchedUsers);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Rest of the component logic

  return (
    <div className="kanban-board">
      <div className="column">
        <h2>Todo</h2>
        {tickets
          .filter((ticket) => ticket.status.toLowerCase() === "todo")
          .map((ticket) => (
            <Ticket key={ticket.id} ticket={ticket} users={users} />
          ))}
      </div>
      <div className="column">
        <h2>Inprogress</h2>
        {tickets
          .filter((ticket) => ticket.status.toLowerCase() === "inprogress")
          .map((ticket) => (
            <Ticket key={ticket.id} ticket={ticket} users={users} />
          ))}
      </div>
      <div className="column">
        <h2>Done</h2>
        {tickets
          .filter((ticket) => ticket.status.toLowerCase() === "done")
          .map((ticket) => (
            <Ticket key={ticket.id} ticket={ticket} users={users} />
          ))}
      </div>
    </div>
  );
}

export default KanbanBoard;
