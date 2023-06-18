import { Button, Grid, Typography } from "@mui/material";
import CelebrationIcon from '@mui/icons-material/Celebration';

function EventCategories() {
    const eventsCategories = [
        { name: "Music" },
        { name: "Movie" },
        { name: "Birthday" },
        { name: "Holiday" },
    ]

    return (
        <><Typography variant="h5" gutterBottom>
            Popular Events By Categories :
        </Typography><Grid container spacing={1}>
                {eventsCategories &&
                    eventsCategories.length > 0 &&
                    eventsCategories.map((event) => {
                        return (
                            <>
                                <Grid item xs={12} sm={4} md={3}>
                                    <Button variant="outlined" sx={{ width: '100%' }} startIcon={<CelebrationIcon />}>
                                        {event?.name}
                                    </Button>
                                </Grid>
                            </>
                        );
                    })}
            </Grid></>
    )
}

export default EventCategories;