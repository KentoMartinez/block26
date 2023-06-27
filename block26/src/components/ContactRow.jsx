export default function ContactRow({ serSelectedContactId, contact }) {
   return (
     <tr
     onClick={() => {
      setSelectedContactId(contact.id);
    }}
  >
       <td>{contact.name}</td>
       <td>{contact.email}</td>
       <td>{contact.phone}</td>
     </tr>
   );
 }