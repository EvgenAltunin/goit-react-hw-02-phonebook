import PropTypes from 'prop-types'
import {ContactsList, ContactItem, ContactText, ContactButton} from 'components/ContactList/ContactList.styled'

export const ContactList = ({ contacts, onDeleteContact }) => (
    <ContactsList>
        {contacts.map(({id, name, number}) => (
            <ContactItem key={id}>
                <ContactText>{name}</ContactText>
                <ContactText>{number}</ContactText>
                <ContactButton type='button' onClick={() => onDeleteContact(id)}>Delete</ContactButton>
            </ContactItem>
        ))}
    </ContactsList>
);

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired
}