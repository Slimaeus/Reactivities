import { Grid } from "semantic-ui-react";

import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import { Activity } from "../../../app/models/Activity";
import ActivityForm from "../form/ActivityForm";

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
}

export default function ActivityDashboard({ activities, selectedActivity, selectActivity, cancelSelectActivity, openForm, closeForm, editMode, createOrEdit }: Props) {
    return (
        <Grid>
            <Grid.Column width="10">
                <ActivityList activities={activities} selectActivity={selectActivity} />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode &&
                    <ActivityDetails
                        activity={selectedActivity}
                        cancelSelectActivity={cancelSelectActivity}
                        openForm={openForm}
                    />}
                {editMode &&
                    <ActivityForm activity={selectedActivity} closeForm={closeForm} createOrEdit={createOrEdit}/>
                }
            </Grid.Column>
        </Grid>
    );
}