import { Link, useRouteLoaderData, useSubmit } from "react-router-dom";
import classes from "./EventItem.module.css";

function EventItem({ event }) {
  const submit = useSubmit();
  const token = useRouteLoaderData("auth");

  function startDeleteHandler() {
    const confirmed = window.confirm("Are you sure?");

    if (confirmed) {
      submit(null, { method: "delete" });
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        {token && <Link to={"edit"}>Edit</Link>}
        {token && <button onClick={startDeleteHandler}>Delete</button>}
      </menu>
    </article>
  );
}

export default EventItem;
