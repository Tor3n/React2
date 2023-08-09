import {
  useLoaderData,
  Form,
  useFetcher,
} from "react-router-dom";
import { getContact, updateContact } from "../contacts";

export async function loader({ params }) {
    const contact = await getContact(params.contactId);
    if(!contact){
      throw new Response("", {
        status: 404,
        statusText: "Not Found"
      });
    }
    return { contact };
  }

export async function action({ request, params }) {

  /* Pretty simple. Pull the form data off the 
  request and send it to the data model. 
  
  Check that out, both stars automatically update.
  Our new <fetcher.Form method="post"> works almost
  exactly like the <Form> we've been using: it calls 
  the action and then all data is revalidated automatically
  --even your errors will be caught the same way.

  There is one key difference though, it's not a navigation
  --the URL doesn't change, the history stack is unaffected.
  */

  let formData = await request.formData();
  return updateContact(params.contactId, {
    favorite: formData.get("favorite") === "true",
  });
}

export default function Contact() {
const { contact } = useLoaderData();

  return (
    <div id="contact">
      <div>
        <img
          key={contact.avatar}
          src={contact.avatar || null}
        />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (
                !window.confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ contact }) {
  const fetcher = useFetcher();
  let favorite = contact.favorite;
  if (fetcher.formData){
    favorite = fetcher.formData.get("favorite") === "true";
  }

  /* Might want to take a look at that form
   while we're here. As always, our form has
   fields with a name prop. This form will 
   send formData with a favorite key that's either
   "true" | "false". Since it's got method="post" 
   it will call the action. Since there is no 
   <fetcher.Form action="..."> prop, it will 
   post to the route where the form is rendered. */

  return (
    
    <fetcher.Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </fetcher.Form>
  );
}