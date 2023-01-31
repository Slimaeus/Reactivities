import { Grid } from "semantic-ui-react";

import ActivityList from "./ActivityList";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { LoadingComponent } from "../../../app/layout/LoadingComponent";


export default observer(function ActivityDashboard() {
    const { activityStore } = useStore()
    const {loadActivies, activityRegistry} = activityStore


    useEffect(() => {
        if (activityRegistry.size <= 0) loadActivies()
    }, [activityRegistry.size, loadActivies])


    if (activityStore.loadingInitial) return <LoadingComponent content='Loading app' />


    return (
        <Grid>
            <Grid.Column width="10">
                <ActivityList />
            </Grid.Column>
            <Grid.Column width='6'>
                <h2>Activity filters</h2>
            </Grid.Column>
        </Grid>
    );
})