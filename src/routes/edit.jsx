import {
    Form,
    useLoaderData,
    redirect,
    useNavigate,
  } from "react-router-dom";
import { updateContact } from "../contacts";

export async function action({ request, params }) {
    const formData = await request.formData();
    /* Without JavaScript, when a form is submitted, the browser 
    will create FormData and set it as the body of the request when 
    it sends it to the server. As mentioned before, React Router 
    prevents that and sends the request to your action instead, 
    including the FormData.
    Each field in the form is accessible with formData.get(name). 
    For example, given the input field from above, you could 
    access the first and last names like this:*/

    const firstName = formData.get("first");
    const lastName = formData.get("last");

    /*
    Aside from action, none of these APIs we're 
    discussing are provided by React Router: request, 
    request.formData, Object.fromEntries are 
    all provided by the web platform.

    After we finished the action,
     note the redirect at the end:
    
    const updates = Object.fromEntries(formData);
    updates.first; // "Some"
    updates.last; // "Name" */

    const updates = Object.fromEntries(formData);
    await updateContact(params.contactId, updates);
    return redirect(`/contacts/${params.contactId}`);
  }

export default function EditContact() {
    const { contact } = useLoaderData();
    const navigate = useNavigate();
  
    return (
      <Form method="post" id="contact-form">
        <p>
          <span>Name</span>
          <input
            placeholder="First"
            aria-label="First name"
            type="text"
            name="first"
            defaultValue={contact.first}
          />
          <input
            placeholder="Last"
            aria-label="Last name"
            type="text"
            name="last"
            defaultValue={contact.last}
          />
        </p>
        <label>
          <span>Twitter</span>
          <input
            type="text"
            name="twitter"
            placeholder="@jack"
            defaultValue={contact.twitter}
          />
        </label>
        <label>
          <span>Avatar URL</span>
          <input
            placeholder="https://example.com/avatar.jpg"
            aria-label="Avatar URL"
            type="text"
            name="avatar"
            defaultValue={contact.avatar}
          />
        </label>
        <label>
          <span>Notes</span>
          <textarea
            name="notes"
            defaultValue={contact.notes}
            rows={6}
          />
        </label>
        <p>
          <button type="submit">Save</button>
          
          <button type="button" onClick={()=>{navigate(-1)}}>Cancel</button>
        </p>
      </Form>
    );
  }

  /* A <button type="button">, while seemingly redundant,
   is the HTML way of preventing a button from submitting its form.*/