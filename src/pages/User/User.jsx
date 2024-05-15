// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
// import ContactForm from 'components/ContactForm/ContactForm';
// import { ContactList } from 'components/ContactList/ContactList';
// import { Filter } from 'components/Filter/Filter';
import Test from '../../components/UserSections/Test';

const User = () => {
  return (
    <>
      <h1>User</h1>
      <Test></Test>
    </>
  );
};

export default User;

// export default function App() {
//   const [contacts, setContacts] = useState(
//     JSON.parse(window.localStorage.getItem('contacts')) ?? []
//   );
//   const [filter, setFilter] = useState('');
//   const [submittedData, setSubmittedData] = useState(null); // Додайте стан для збереження даних, відправлених з форми User

//   useEffect(() => {
//     const contacts = localStorage.getItem('contacts');
//     const parsContacts = JSON.parse(contacts);

//     if (parsContacts) {
//       setContacts(parsContacts);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   const handleSubmit = values => {
//     const contactId = nanoid();

//     if (contacts.some(item => item.name === values.name)) {
//       alert(`${values.name} is already in contacts`);
//       return;
//     }

//     setContacts(prevContacts => [
//       ...prevContacts,
//       { name: values.name, number: values.number.toString(), id: contactId },
//     ]);

//     // Зберегти дані, відправлені з форми User, для відображення
//     setSubmittedData({
//       title: values.title,
//       description: values.description,
//       categoryName: values.categoryName,
//       todo: values.todo,
//       publicList: values.publicTodo,
//     });
//   };

//   const handleCnangeFilter = event => {
//     setFilter(event.target.value);
//   };

//   const findContacts = () => {
//     const сontactMatches = contacts.filter(({ name }) =>
//       name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
//     );
//     return сontactMatches;
//   };

//   const deleteContact = idContact => {
//     setContacts(prevContacts =>
//       prevContacts.filter(({ id }) => id !== idContact)
//     );
//   };

//   return (
//     <>
//       <h1>Phonebook</h1>
//       <ContactForm onSubmit={handleSubmit} />

//       {submittedData && ( // Відображати дані, відправлені з форми User, якщо вони були збережені
//         <div>
//           <h2>Submitted Data</h2>
//           <p>Title: {submittedData.title}</p>
//           <p>Description: {submittedData.description}</p>
//           <p>Category Name: {submittedData.categoryName}</p>
//           <p>Todo: {submittedData.todo}</p>
//           <p>Public Todo: {submittedData.publicList ? 'Yes' : 'No'}</p>
//         </div>
//       )}

//       <h1>Contacts</h1>
//       <Filter onChangeFilter={handleCnangeFilter} />
//       <ContactList filter={findContacts} onDeleteContact={deleteContact} />
//     </>
//   );
// }
