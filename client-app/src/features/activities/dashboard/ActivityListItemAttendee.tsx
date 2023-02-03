import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { Image, List, Popup } from 'semantic-ui-react';
import { Profile } from '../../../app/models/profile';
import ProfileCard from '../../profiles/ProfileCard';

interface IActivityListItemAttendeeProps {
    attendees: Profile[]
}

export default observer(function ActivityListItemAttendee({ attendees }: IActivityListItemAttendeeProps) {
    const styles = {
        borderColor: 'orange',
        borderWidth: 2
    }
    return (
        <List horizontal>
            {attendees.map(attendee => (
                <Popup
                    hoverable
                    key={attendee.username}
                    trigger={
                        <List.Item key={attendee.username} as={Link} to={`/profiles/${attendee.username}`}>
                            <Image
                                size='mini'
                                circular
                                src={attendee.image || '/assets/user.png'}
                                style={attendee.following ? styles : null}
                            />
                        </List.Item>

                    }
                >
                    <Popup.Content>
                        <ProfileCard profile={attendee} />
                    </Popup.Content>
                </Popup>
            ))}
        </List>
    );
})
