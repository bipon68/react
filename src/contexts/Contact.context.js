import React, { Component } from 'react';
export const ContactContext = React.createContext();

// will take existing state
// modify and return based on action Ex: add, edit, update, delete
// return another from of state
// const reducer = (state, action) => {
//     if(action.type === 'ADD_COUNT'){
//         return{
//             ...state,
//             count: state.count + action.payload
//         }
//     }
// }

// console.log(reducer({count: 0, counting: false}, {type: 'ADD_COUNT', payload: 1}))

const reducer = (state, action) => {
    switch (action.type){
        case 'ADD_CONTACT':
            return{
                ...state,
                contacts: [...state.contacts, action.payload]
            };
        case 'DELETE_CONTACT': 
          return{
            ...state,
            contacts: state.contacts.filter(contact => contact.id !== action.payload)
        };
        case 'EDIT_CONTACT':
          return {
            ...state,
            selectedContact: action.payload
          }
        case 'UPDATE_CONTACT':
            return {
              ...state,
              contacts: state.contacts.map(contact =>
                contact.id === action.payload.id
                  ? (contact = action.payload)
                  : contact
              )
            };
        default: 
            return state;
    }
}

// console.log(
//     reducer(existingState, {
//         type: 'ADD_CONTACT',
//         payload: {firstName: 'bipon', lastName: 'biswas'}
//     })
// )

export class ContactProvider extends Component {

    state = {
        contacts: [
          {
            id: 1,
            firstName: 'Bipon',
            lastName: 'Biswas',
            email: 'bipon770@gmail.com',
            profession: 'Web developer',
            selectedValue: 'personal'
          },
          {
            id: 2,
            firstName: 'Sandip',
            lastName: 'Rahman',
            email: 'sr@gmail.com',
            profession: 'Graphics Designer',
            selectedValue: 'professional'
          },
          {
            id: 3,
            firstName: 'Sajib',
            lastName: 'Hasan',
            email: 'sajib@gmail.com',
            profession: 'Php developer',
            selectedValue: 'personal'
          }
        ],
        selectedContact: null
      }
      
      componentDidMount(){
        fetch('http://localhost:3000/contacts').then(res => res.json()).then(
          contacts => console.log(contacts)
        )
      }

      dispatch = action => this.setState(state => reducer(state, action))

      // addContact = (contact) => {
      //   this.setState({
      //     // spread this one
      //     contacts: [...this.state.contacts, contact]
      //   })
      //   console.log(contact)
      // }
      // deleteContact = (id) => {
      //   const updatedContacts = this.state.contacts.filter(contact => contact.id !==id) 
      //   this.setState({
      //     contacts: updatedContacts
      //   })
      // };
      // editContact = (id) => {
      //   console.log(id)
      //   const fountItem = this.state.contacts.find(contact => contact.id === id);
      //   this.setState({
      //     selectedContact: fountItem
      //   })
      // }
    
     
      // updateContact = updateContact => {
      //   const updatedContacts = this.state.contacts.map(contact =>
      //           // if(contact.id === updateContact.id){
      //         //   contact = updateContact
      //         // }else{
      //         //   return contact
      //         // }
      //     contact.id === updateContact.id ? (contact = updateContact) : contact
      //   );
      //   this.setState({
      //     contacts: updatedContacts,
      //     selectedContact: null
      //   });
      // };


    render(){
        return(
            <ContactContext.Provider value={{
                state: this.state,
                //addContact: this.addContact,
                // editContact: this.editContact,
                // updateContact: this.updateContact,
                // deleteContact: this.deleteContact,
                dispatch: this.dispatch
                // firstName: 'Bipon',
                // lastName: 'Biswas'
            }}>
                {this.props.children}
            </ContactContext.Provider>
        )
    }
}