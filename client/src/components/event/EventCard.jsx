import { Button, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { getCardImageByPropertyType } from '../../services/utils';

const EventCard = ({ propertyDetails }) => {
    let navigate = useNavigate();

    return (
        <Card sx={{
            ':hover': {
                boxShadow: '0 8px 10px 0 rgb(0 0 0 / 50%)'
            }, maxWidth: 345
        }}>
            <CardMedia
                component="img"
                sx={{ width: '100%', height: '250px' }}
                image={getCardImageByPropertyType(propertyDetails.eventNo)}
                alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {propertyDetails?.eventName}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" component="div">
                        {propertyDetails?.date}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {propertyDetails?.address}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Event By : {propertyDetails?.owner}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" component="div">
                        {propertyDetails?.description}
                    </Typography>
                    <CardActions>
                        <Button size="small" onClick={() => navigate(`/property-details/${propertyDetails?._id}`)}>
                            View More
                        </Button>
                    </CardActions>
                </CardContent>
            </Box>
        </Card>
    );
};

export default EventCard;
